const express = require("express");

const router = express.Router();
const model = process.env.GEMMA_MODEL || "gemma-3-27b-it";

router.post("/", async (req, res) => {
  const message = req.body?.message?.trim();
  if (!message) return res.status(400).json({ message: "Message is required" });
  if (!process.env.GEMINI_API_KEY) return res.status(503).json({ message: "GEMINI_API_KEY is not configured" });

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: "You are Gemma, a concise and practical interview and career coach. Give clear steps and examples." }] },
          contents: [{ parts: [{ text: message }] }],
          generationConfig: { temperature: 0.7, maxOutputTokens: 700 },
        }),
      },
    );
    const data = await response.json();
    if (!response.ok) return res.status(response.status).json({ message: data.error?.message || "Gemma request failed" });
    res.json({ reply: data.candidates?.[0]?.content?.parts?.[0]?.text || "Gemma returned no answer." });
  } catch {
    res.status(502).json({ message: "Unable to reach Gemma" });
  }
});

module.exports = router;