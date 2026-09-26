const express = require("express");

const router = express.Router();
// Gemma model identifiers are not available through the Gemini generateContent API.
// Preserve a valid override but use Gemini Flash when the old configuration says Gemma.
const requestedModel = process.env.GEMMA_MODEL || process.env.GEMINI_MODEL;
const model = requestedModel?.toLowerCase().startsWith("gemma") ? "gemini-2.5-flash" : (requestedModel || "gemini-2.5-flash");
const apiKey = process.env.GEMINI_API_KEY?.trim();
const ollamaBaseUrl = process.env.OLLAMA_BASE_URL?.replace(/\/$/, "");
const ollamaModel = process.env.OLLAMA_MODEL?.trim();

const buildFallbackPlan = (message) => {
  const topic = message || "your software career";
  return {
    source: "local",
    title: "Career plan for " + topic,
    summary: "Your free built-in career guide is active. Use the linked learning resources and opportunities while you add a valid Gemini key for generated answers.",
    roadmap: ["Choose one target role and study its core skills", "Build one small project and publish it on GitHub", "Practice aptitude, DSA, and communication every week", "Review your roadmap after four weeks"],
    opportunities: ["Apply through the direct internship links in Opportunities", "Join one MLH or Devpost hackathon", "Shortlist GSoC or Outreachy open-source organizations"],
    resume: ["Use one page with skills, projects, and measurable outcomes", "Link GitHub, LinkedIn, and deployed projects", "Tailor the first three bullets for each role"],
    interview: ["Practice explaining one project in two minutes", "Revise DBMS, OS, networks, and OOP", "Solve three timed aptitude or DSA questions daily"],
    weekly: ["Mon–Thu: learn and practice", "Fri: ship a project improvement", "Sat: apply to two opportunities", "Sun: mock interview and review"],
  };
};

const sendFallback = (res, message, aiIssue) => res.json({
  ...buildFallbackPlan(message),
  aiStatus: aiIssue ? "fallback" : "local",
  aiIssue: aiIssue || null,
});

router.post("/", async (req, res) => {
  const message = req.body?.message?.trim();
  if (!message) return res.status(400).json({ message: "Message is required" });
  // The local guide keeps the feature useful when a Gemini account/key is not available.
  if (!apiKey || apiKey === "your_google_gemini_api_key") return sendFallback(res, message, "No Gemini API key is configured in backened/.env.");

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-goog-api-key": apiKey },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: "You are an AI Career Advisor. Return ONLY a valid JSON object answering the user's career/interview query. The JSON must exactly match this schema: { \"title\": \"string\", \"summary\": \"string\", \"roadmap\": [\"string\"], \"opportunities\": [\"string\"], \"resume\": [\"string\"], \"interview\": [\"string\"], \"weekly\": [\"string\"] }." }] },
          contents: [{ parts: [{ text: message }] }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1024,
            responseMimeType: "application/json"
          },
        }),
      },
    );
    const data = await response.json();
    if (!response.ok) {
      const providerMessage = data.error?.message || "Gemini request failed";
      if (response.status === 400 || response.status === 401 || /api key/i.test(providerMessage)) {
        return sendFallback(res, message, `Gemini rejected the request: ${providerMessage}`);
      }
      return sendFallback(res, message, `Gemini request failed: ${providerMessage}`);
    }

    try {
      const aiResponseText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!aiResponseText) throw new Error("No answer returned");
      const parsedData = JSON.parse(aiResponseText);
      res.json(parsedData);
    } catch (parseError) {
      console.error("Failed to parse Gemini JSON:", parseError);
      sendFallback(res, message, "Gemini returned an unreadable response.");
    }
  } catch (error) {
    console.error("Fetch error:", error);
    sendFallback(res, message, `Unable to reach Gemini: ${error.message}`);
  }
});

// General conversational endpoint for the floating assistant. It deliberately
// returns plain text instead of the roadmap JSON used by the planner above.
router.post("/converse", async (req, res) => {
  const message = req.body?.message?.trim();
  if (!message) return res.status(400).json({ message: "Message is required" });

  try {
    if (ollamaBaseUrl && ollamaModel) {
      const response = await fetch(`${ollamaBaseUrl}/api/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: ollamaModel,
          prompt: `You are Interview Friend, a helpful and accurate software-career and programming assistant. Answer clearly and concisely. If a question is outside your knowledge, say so honestly.\n\nUser: ${message}`,
          stream: false,
        }),
      });
      const data = await response.json();
      if (!response.ok || !data.response) throw new Error(data.error || "Local AI did not return an answer");
      return res.json({ reply: data.response, provider: "ollama" });
    }

    if (!apiKey || apiKey === "your_google_gemini_api_key") {
      return res.status(503).json({ message: "AI is not configured. Add a valid Gemini API key or enable the optional local Ollama setup." });
    }

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-goog-api-key": apiKey },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: "You are Interview Friend, a helpful, accurate software-career and programming assistant. Answer the user's question directly in plain text. Be concise, practical, and honest about uncertainty." }] },
        contents: [{ parts: [{ text: message }] }],
        generationConfig: { temperature: 0.5, maxOutputTokens: 1024 },
      }),
    });
    const data = await response.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!response.ok || !reply) return res.status(502).json({ message: data.error?.message || "Gemini did not return an answer." });
    return res.json({ reply, provider: "gemini" });
  } catch (error) {
    return res.status(502).json({ message: `AI service unavailable: ${error.message}` });
  }
});

module.exports = router;
