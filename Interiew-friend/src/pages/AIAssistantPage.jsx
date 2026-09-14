import { useMemo, useState } from 'react';

const suggestions = [
  'How do I prepare for Infosys?',
  'Show me internship options for cloud',
  'Help me with my resume',
  'Create a roadmap for AI',
  'How do I crack Google interviews?',
];

function buildResponse(value) {
  const prompt = value.toLowerCase();
  const role = prompt.includes('backend') || prompt.includes('developer')
    ? 'Backend Developer'
    : prompt.includes('frontend') || prompt.includes('react')
      ? 'Frontend Developer'
      : prompt.includes('ai') || prompt.includes('ml')
        ? 'AI Engineer'
        : prompt.includes('cloud')
          ? 'Cloud Engineer'
          : 'Software Engineer';

  const company = prompt.includes('google') ? 'Google' : prompt.includes('microsoft') ? 'Microsoft' : prompt.includes('infosys') ? 'Infosys' : 'your target company';
  const focus = prompt.includes('intern') ? 'internship' : prompt.includes('job') ? 'job' : 'career growth';

  return {
    title: `All-in-one plan for ${role}`,
    summary: `For ${company}, build a strong ${focus} profile by combining technical depth, project proof, and interview readiness in one focused plan.`,
    roadmap: [
      'Master core fundamentals: DSA, OOP, DBMS, OS, and networking basics.',
      'Build 2 practical projects that show real-world problem solving and deployment skills.',
      'Create a polished GitHub, LinkedIn, and resume aligned to your target role.',
      'Practice mock interviews and company-specific questions every week.',
    ],
    opportunities: [
      'Apply to internships and open-source programs like GSoC, Outreachy, and MLH.',
      'Target companies such as Microsoft, Google, Amazon, Adobe, and Infosys.',
      'Join hackathons and coding challenges to strengthen your portfolio.',
    ],
    resume: [
      'Use one-page ATS-friendly formatting.',
      'Highlight measurable impact, tools used, and concrete outcomes.',
      'Tailor each resume for the exact role and company.',
    ],
    interview: [
      'Prepare 5 strong STAR stories for behavioral rounds.',
      'Practice coding and system design explanations out loud.',
      'Review your project walkthroughs and speak with confidence.',
    ],
    weekly: [
      'Practice 3 DSA questions and 1 coding challenge.',
      'Improve one project and push it to GitHub.',
      'Apply to 5 relevant opportunities and prepare one follow-up.',
      'Spend 30 minutes reviewing interview notes and weak areas.',
    ],
  };
}

function AIAssistantPage() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState({
    title: 'AI Career Advisor',
    summary: 'Ask the assistant for internships, company prep, roadmap help, resume feedback, or mock interview guidance and get a complete plan in one response.',
    roadmap: ['Pick a target role', 'Build a strong project', 'Practice interview questions', 'Apply consistently'],
    opportunities: ['Explore internships', 'Check hackathons', 'Join open-source programs'],
    resume: ['Keep it ATS-friendly', 'Highlight results', 'Tailor it to the role'],
    interview: ['Practice answers', 'Explain projects clearly', 'Review weak areas'],
    weekly: ['Study daily', 'Apply weekly', 'Review progress'],
  });

  const answer = useMemo(() => buildResponse(prompt), [prompt]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedPrompt = prompt.trim();

    if (!trimmedPrompt) {
      setResponse({
        title: 'AI Career Advisor',
        summary: 'Please enter a career question so I can create a personalized plan for you.',
        roadmap: ['Pick a target role', 'Build a strong project', 'Practice interview questions', 'Apply consistently'],
        opportunities: ['Explore internships', 'Check hackathons', 'Join open-source programs'],
        resume: ['Keep it ATS-friendly', 'Highlight results', 'Tailor it to the role'],
        interview: ['Practice answers', 'Explain projects clearly', 'Review weak areas'],
        weekly: ['Study daily', 'Apply weekly', 'Review progress'],
      });
      return;
    }

    setResponse(buildResponse(trimmedPrompt));
  };

  return (
    <div className="page-content">
      <div className="section-heading">
        <p className="eyebrow">AI Advisor</p>
        <h2>One complete answer for your career journey</h2>
      </div>

      <div className="glass-card panel-card assistant-panel">
        <form onSubmit={handleSubmit} className="auth-form">
          <input type="text" placeholder="Try: frontend internship Google or AI roadmap" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
          <button className="primary-btn" type="submit">Get full plan</button>
        </form>

        <div className="prompt-list">
          {suggestions.map((item) => (
            <button className="secondary-btn prompt-btn" key={item} onClick={() => setPrompt(item)}>{item}</button>
          ))}
        </div>

        <div className="feedback-box">
          <strong>{response.title}</strong>
          <p>{response.summary}</p>

          <div className="response-stack">
            <div className="response-card">
              <h4>Roadmap</h4>
              <ul>{response.roadmap.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="response-card">
              <h4>Opportunities</h4>
              <ul>{response.opportunities.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="response-card">
              <h4>Resume</h4>
              <ul>{response.resume.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="response-card">
              <h4>Interview</h4>
              <ul>{response.interview.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="response-card">
              <h4>Weekly plan</h4>
              <ul>{response.weekly.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIAssistantPage;
