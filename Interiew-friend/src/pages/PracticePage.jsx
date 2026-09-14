import { useState } from 'react';

const prompts = [
  'Tell me about yourself and your projects.',
  'Why do you want to work at Google?',
  'Explain your most challenging project.',
  'How would you design a URL shortener?',
];

function PracticePage() {
  const [question, setQuestion] = useState(prompts[0]);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setFeedback(`AI feedback: Your answer is structured well. Strengthen your technical depth, explain your impact clearly, and include a concise example.`);
  };

  return (
    <div className="page-content">
      <div className="section-heading">
        <p className="eyebrow">AI Practice</p>
        <h2>Live mock interview studio</h2>
      </div>

      <div className="split-section">
        <div className="glass-card panel-card">
          <h3>Current question</h3>
          <p>{question}</p>
          <div className="prompt-list">
            {prompts.map((prompt) => (
              <button key={prompt} className="secondary-btn prompt-btn" onClick={() => setQuestion(prompt)}>{prompt}</button>
            ))}
          </div>
        </div>

        <div className="glass-card panel-card">
          <h3>Your response</h3>
          <form onSubmit={handleSubmit} className="auth-form">
            <textarea value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Answer the interviewer here..." rows="8" />
            <button className="primary-btn" type="submit">Get AI Feedback</button>
          </form>
          {feedback && <div className="feedback-box">{feedback}</div>}
        </div>
      </div>
    </div>
  );
}

export default PracticePage;
