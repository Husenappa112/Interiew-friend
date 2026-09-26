import { useEffect, useMemo, useState } from 'react';

const practiceModes = [
  { title: 'Aptitude test', description: 'Percentages, time/work, probability, profit/loss, and speed practice.', action: 'Start aptitude test' },
  { title: 'Logical reasoning', description: 'Analogy, coding-decoding, directions, series, and puzzles.', url: 'https://www.indiabix.com/logical-reasoning/' },
  { title: 'DSA practice', description: 'Structured coding interview questions by difficulty and topic.', url: 'https://leetcode.com/problemset/' },
  { title: 'HackerRank', description: 'Language-specific problems, certificates, and programming practice.', url: 'https://www.hackerrank.com/domains' },
  { title: 'CodeChef', description: 'Competitive programming contests and beginner practice.', url: 'https://www.codechef.com/practice' },
  { title: 'Online compiler', description: 'Write and run C, C++, Java, Python, JavaScript, and more.', url: 'https://www.programiz.com/' },
];

const questions = [
  { text: 'A train 120 metres long is running at 54 km/hr. How long will it take to cross a platform 180 metres long?', options: ['12 seconds', '20 seconds', '24 seconds', '30 seconds'], answer: 1, topic: 'Time and Distance' },
  { text: 'If 3x + 7 = 25, what is the value of x?', options: ['4', '6', '8', '10'], answer: 0, topic: 'Algebra' },
  { text: 'A shopkeeper marks an article at Rs. 800 and gives a discount of 15%. What is the selling price?', options: ['Rs. 660', 'Rs. 680', 'Rs. 700', 'Rs. 720'], answer: 1, topic: 'Profit and Loss' },
  { text: 'The average of five consecutive numbers is 24. What is the largest number?', options: ['25', '26', '27', '28'], answer: 2, topic: 'Averages' },
  { text: 'Which number should come next in the series: 2, 6, 12, 20, 30, ?', options: ['36', '40', '42', '44'], answer: 2, topic: 'Number Series' },
  { text: 'If SOUTH is coded as 12345 and NORTH as 67845, how is SHOT coded?', options: ['1524', '1542', '1254', '1245'], answer: 0, topic: 'Reasoning' },
  { text: 'A can complete a work in 12 days and B in 18 days. In how many days can they complete it together?', options: ['6 days', '7 1/5 days', '8 days', '9 days'], answer: 1, topic: 'Time and Work' },
  { text: 'What is the probability of getting an even number when a fair die is thrown once?', options: ['1/6', '1/3', '1/2', '2/3'], answer: 2, topic: 'Probability' },
  { text: 'Find the simple interest on Rs. 2,000 at 5% per annum for 3 years.', options: ['Rs. 250', 'Rs. 300', 'Rs. 350', 'Rs. 400'], answer: 1, topic: 'Interest' },
  { text: 'A person walks 10 metres north, then 10 metres east, then 10 metres south. How far is he from the starting point?', options: ['0 metres', '10 metres', '20 metres', '30 metres'], answer: 1, topic: 'Direction Sense' },
];

const TEST_SECONDS = 15 * 60;

function PracticePage() {
  const [selectedMode, setSelectedMode] = useState(null);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [reviewed, setReviewed] = useState(new Set());
  const [secondsLeft, setSecondsLeft] = useState(TEST_SECONDS);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted || secondsLeft === 0) return undefined;
    const timer = window.setInterval(() => setSecondsLeft((value) => Math.max(value - 1, 0)), 1000);
    return () => window.clearInterval(timer);
  }, [secondsLeft, submitted]);

  const answeredCount = Object.keys(answers).length;
  const score = useMemo(() => questions.reduce((total, item, index) => total + (answers[index] === item.answer ? 1 : 0), 0), [answers]);
  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
  const seconds = String(secondsLeft % 60).padStart(2, '0');
  const selectAnswer = (optionIndex) => setAnswers((value) => ({ ...value, [current]: optionIndex }));
  const goTo = (index) => setCurrent(Math.min(Math.max(index, 0), questions.length - 1));
  const clearAnswer = () => setAnswers((value) => {
    const next = { ...value };
    delete next[current];
    return next;
  });
  const toggleReview = () => setReviewed((value) => {
    const next = new Set(value);
    if (next.has(current)) next.delete(current);
    else next.add(current);
    return next;
  });

  if (!selectedMode) return <div className="page-content">
    <div className="section-heading"><p className="eyebrow">Practice hub</p><h2>Choose exactly what you want to improve</h2><p>Start an in-app aptitude test or use a trusted platform for reasoning, DSA, competitive programming, and coding.</p></div>
    <div className="practice-choice-grid">{practiceModes.map((mode) => <article className="glass-card practice-choice" key={mode.title}><h3>{mode.title}</h3><p>{mode.description}</p>{mode.action ? <button className="primary-btn" onClick={() => setSelectedMode('aptitude')}>{mode.action}</button> : <a className="secondary-btn" href={mode.url} target="_blank" rel="noreferrer">Open platform ↗</a>}</article>)}</div>
    <section className="glass-card learning-strip"><h3>Before you start</h3><p>Choose a topic, solve a small set without looking at solutions, review mistakes, then repeat with a timer. Your skill grows from feedback, not random question counts.</p></section>
  </div>;

  if (submitted) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="test-page test-result-page">
        <div className="test-topline"><span>Interview Friend / Online Test</span><button className="test-link" onClick={() => { setSubmitted(false); setCurrent(0); setAnswers({}); setReviewed(new Set()); setSecondsLeft(TEST_SECONDS); }}>Start a new test</button></div>
        <section className="result-card">
          <p className="test-kicker">Test completed</p>
          <h1>Your aptitude test result</h1>
          <div className="result-score"><strong>{score}<small>/{questions.length}</small></strong><span>{percentage}% score</span></div>
          <p className="result-copy">You answered {answeredCount} of {questions.length} questions. Review the topic breakdown below and use another attempt to improve your accuracy.</p>
          <div className="result-stats"><div><strong>{score}</strong><span>Correct answers</span></div><div><strong>{answeredCount - score}</strong><span>Incorrect / skipped</span></div><div><strong>{minutes}:{seconds}</strong><span>Time remaining</span></div></div>
          <button className="test-primary" onClick={() => { setSubmitted(false); setCurrent(0); }}>Review answers</button>
        </section>
      </div>
    );
  }

  const activeQuestion = questions[current];

  return (
    <div className="test-page">
      <div className="test-topline"><span>Interview Friend / Online Test</span><span>General Aptitude</span></div>
      <header className="test-header"><div><p className="test-kicker">Practice test</p><h1>Aptitude Test - Random</h1><p>Choose the best answer for each question. You can move between questions at any time.</p></div><div className={`timer-box ${secondsLeft < 60 ? 'timer-danger' : ''}`}><span>Time left</span><strong>{minutes}:{seconds}</strong></div></header>
      <div className="test-progress"><span style={{ width: `${(answeredCount / questions.length) * 100}%` }} /></div>
      <div className="test-layout">
        <main className="question-panel">
          <div className="question-meta"><span>Question {current + 1} of {questions.length}</span><span>{activeQuestion.topic}</span></div>
          <h2>{activeQuestion.text}</h2>
          <div className="answer-list">{activeQuestion.options.map((option, index) => <button key={option} className={`answer-option ${answers[current] === index ? 'selected' : ''}`} onClick={() => selectAnswer(index)}><span>{String.fromCharCode(65 + index)}</span>{option}</button>)}</div>
          <div className="question-actions"><button className="test-muted" onClick={clearAnswer}>Clear answer</button><button className={`test-review ${reviewed.has(current) ? 'is-reviewed' : ''}`} onClick={toggleReview}>{reviewed.has(current) ? 'Marked for review' : 'Mark for review'}</button><div className="action-spacer" /><button className="test-secondary" disabled={current === 0} onClick={() => goTo(current - 1)}>Previous</button><button className="test-primary" onClick={() => current === questions.length - 1 ? setSubmitted(true) : goTo(current + 1)}>{current === questions.length - 1 ? 'Submit test' : 'Save and next'}</button></div>
        </main>
        <aside className="test-sidebar"><div className="sidebar-block"><h3>Question palette</h3><div className="palette">{questions.map((_, index) => <button key={index} className={`${answers[index] !== undefined ? 'palette-answered' : ''} ${reviewed.has(index) ? 'palette-review' : ''} ${current === index ? 'palette-current' : ''}`} onClick={() => goTo(index)}>{index + 1}</button>)}</div><div className="palette-legend"><span><i className="legend-current" />Current</span><span><i className="legend-answered" />Answered</span><span><i className="legend-review" />Review</span></div></div><div className="sidebar-block test-summary"><h3>Test summary</h3><p><strong>{answeredCount}</strong> answered</p><p><strong>{questions.length - answeredCount}</strong> not answered</p><p><strong>{reviewed.size}</strong> marked for review</p><button className="submit-link" onClick={() => setSubmitted(true)}>Submit test</button></div></aside>
      </div>
    </div>
  );
}

export default PracticePage;
