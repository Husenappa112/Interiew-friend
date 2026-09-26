import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const shortcuts = [
  { icon: '💼', title: 'Internships', text: 'Find student roles and direct application links.', to: '/opportunities', terms: 'internships jobs placement' },
  { icon: '🎯', title: 'Jobs', text: 'Build a focused application list for your target role.', to: '/opportunities', terms: 'jobs companies placement' },
  { icon: '🏆', title: 'Competitions', text: 'Explore coding contests, challenges, and hackathons.', to: '/opportunities', terms: 'competitions hackathons unstop devpost' },
  { icon: '🧠', title: 'Mock tests', text: 'Take timed aptitude practice and review mistakes.', to: '/practice', terms: 'mock tests aptitude reasoning' },
  { icon: '🎙️', title: 'Interview prep', text: 'Prepare project stories, HR answers, and technical basics.', to: '/practice', terms: 'interview mock hr technical' },
  { icon: '🧭', title: 'Role roadmaps', text: 'Choose a role and learn the skills in the right order.', to: '/roles', terms: 'roles roadmap frontend backend ai cloud' },
  { icon: '🤝', title: 'Community', text: 'Connect with mentors, seniors, and study partners.', to: '/community', terms: 'community mentors students peers' },
];

const featured = [
  { tag: 'Coding sprint', title: '100 days of code', detail: 'One focused coding task each day. Start with arrays, strings, and small projects.', to: '/practice', color: 'cyan' },
  { tag: 'Placement ready', title: '50-test challenge', detail: 'Complete aptitude, reasoning, DSA, and mock interview practice in a clear sequence.', to: '/practice', color: 'violet' },
  { tag: 'Career launch', title: 'Build your first portfolio', detail: 'Pick a role, ship two projects, and create a GitHub profile recruiters can open.', to: '/roles', color: 'orange' },
];

const yearGuidance = [
  { year: '1st year', do: 'Choose one programming language, learn Git/GitHub, and build small projects.', avoid: 'Do not collect certificates without practising or publishing work.' },
  { year: '2nd year', do: 'Learn DSA, DBMS, web or app development, and complete two useful projects.', avoid: 'Do not wait for third year to begin your portfolio or internship search.' },
  { year: '3rd year', do: 'Pick a role, strengthen CS basics, refine your resume, and apply consistently.', avoid: 'Do not use the same resume for every role or ignore communication practice.' },
  { year: '4th year', do: 'Do company-specific preparation, mocks, applications, and project explanations.', avoid: 'Do not rely only on campus drives or stop building after placement season begins.' },
];

function StreakCalendar() {
  const days = Array.from({ length: 70 }).map((_, i) => (
    <div 
      key={i} 
      className={`streak-box ${Math.random() > 0.4 ? 'active' : ''} ${i >= 60 ? 'current-week' : ''}`}
      title={`Day ${i + 1}`}
    />
  ));
  
  return (
    <div className="streak-widget">
      <div className="streak-header">
        <strong>LeetCode-style Streak</strong>
        <span className="streak-badge">🔥 100 Day Goal</span>
      </div>
      <div className="streak-grid">
        {days}
      </div>
      <p className="streak-caption">50 days completed out of 100.</p>
    </div>
  );
}

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every(Boolean);

  const handleClick = (i) => {
    if (board[i] || winner) return;
    const newBoard = [...board];
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="tic-tac-toe">
      <div className="tic-tac-toe-status">
        {winner ? `Winner: ${winner}` : isDraw ? 'Draw!' : `Next player: ${xIsNext ? 'X' : 'O'}`}
        <button onClick={reset} className="test-muted">Restart</button>
      </div>
      <div className="tic-tac-toe-board">
        {board.map((cell, i) => (
          <button key={i} className="tic-tac-toe-cell" onClick={() => handleClick(i)}>
            {cell}
          </button>
        ))}
      </div>
    </div>
  );
}

function MiniAIChat() {
  const [messages, setMessages] = useState([
    { role: 'user', text: 'What is CloudWatch?' },
    { role: 'ai', text: 'Amazon CloudWatch is a monitoring and observability service built for DevOps engineers, developers, site reliability engineers (SREs), and IT managers. It provides data and actionable insights to monitor your applications, respond to system-wide performance changes, and optimize resource utilization.' }
  ]);
  const [input, setInput] = useState('');

  const send = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', text: input }]);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'ai', text: 'I am a demo AI. In the full app, I will answer queries like this using a backend API!' }]);
    }, 600);
    setInput('');
  };

  return (
    <div className="mini-ai-chat">
      <div className="mini-chat-header">
        <span className="ai-icon">✨</span>
        <strong>Ask AI Assistant</strong>
      </div>
      <div className="mini-chat-window">
        {messages.map((m, i) => (
          <div key={i} className={`chat-bubble ${m.role}`}>
            {m.text}
          </div>
        ))}
      </div>
      <form onSubmit={send} className="mini-chat-input">
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="E.g. What is AWS CloudWatch?" />
        <button type="submit">→</button>
      </form>
    </div>
  );
}

function HomePage() {
  const [query, setQuery] = useState('');
  const signedIn = Boolean(localStorage.getItem('m-ai-token'));
  const visibleShortcuts = useMemo(() => shortcuts.filter((item) => `${item.title} ${item.text} ${item.terms}`.toLowerCase().includes(query.trim().toLowerCase())), [query]);
  const destination = (to) => (signedIn ? to : '/login');

  return (
    <div className="workspace-home unstop-theme">
      {/* Unstop-style Hero Banner */}
      <section className="unstop-hero">
        <div className="unstop-hero-content">
          <h1>Connecting Talent, Colleges, Recruiter</h1>
          <p>Explore opportunities from across the globe to learn, showcase skills, gain CV points & get hired by your dream company.</p>
          <div className="unstop-search-bar" role="search">
            <span aria-hidden="true" className="search-icon">🔍</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search for Internships, Hackathons, Quizzes..." aria-label="Search" />
            {query && <button type="button" onClick={() => setQuery('')} aria-label="Clear search" className="clear-btn">×</button>}
          </div>
        </div>
      </section>

      {/* Unstop-style Categories (Circular Icons) */}
      <section className="unstop-categories" aria-label="Explore Categories">
        {visibleShortcuts.map((item) => (
          <Link className="unstop-category-item" key={item.title} to={destination(item.to)}>
            <div className="unstop-icon-wrapper">
              <span className="shortcut-icon">{item.icon}</span>
            </div>
            <strong>{item.title}</strong>
          </Link>
        ))}
      </section>
      {query && !visibleShortcuts.length && <p className="search-empty">No workspace section matches “{query}”.</p>}

      {/* Featured Challenges (Unstop-style Cards) */}
      <section className="home-section">
        <div className="home-section-heading">
          <h2>Featured Opportunities</h2>
          <Link to={destination('/opportunities')} className="text-link">View All →</Link>
        </div>
        <div className="unstop-card-grid">
          {featured.map((item) => (
            <article className={`unstop-card ${item.color}`} key={item.title}>
              <div className="unstop-card-banner"></div>
              <div className="unstop-card-content">
                <span className="unstop-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <div className="unstop-card-stats">
                  <span>👥 12,000+ Registered</span>
                  <span>⏳ 2 Days Left</span>
                </div>
                <Link className="unstop-apply-btn" to={destination(item.to)}>Register Now</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* The User's "Ethics" - Streaks and AI intact */}
      <section className="home-section">
        <div className="home-section-heading">
          <h2>Your Growth & Ethics</h2>
        </div>
        <section className="home-split streak-section">
          <StreakCalendar />
          <div className="streak-stats">
            <div className="stat-box"><span className="progress-icon">🔥</span><strong>50 Day Streak</strong><small>Consistency is key.</small></div>
            <div className="stat-box"><span className="progress-icon">💯</span><strong>100 Day Code Sprint</strong><small>Halfway there!</small></div>
            <div className="stat-box"><span className="progress-icon">📝</span><strong>50 Tests Target</strong><small>8 completed, 42 to go.</small></div>
          </div>
        </section>
      </section>

      <section className="home-split">
        <div className="glass-card brain-card">
          <div className="home-section-heading">
            <div><p className="eyebrow">Brain gym</p><h2>Take a quick break</h2></div>
          </div>
          <p className="brain-result">Play a quick game of Tic-Tac-Toe to refresh your mind before studying.</p>
          <TicTacToe />
        </div>
        <div className="glass-card ai-card">
          <MiniAIChat />
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-heading">
          <h2>Year-wise Learning Guide</h2>
        </div>
        <div className="year-advice-grid">
          {yearGuidance.map((item) => (
            <article className="glass-card year-advice" key={item.year}>
              <h3>{item.year}</h3>
              <p><strong>Do:</strong> {item.do}</p>
              <p><strong>Avoid:</strong> {item.avoid}</p>
            </article>
          ))}
        </div>
      </section>

      {!signedIn && (
        <section className="sign-in-banner glass-card unstop-signin">
          <div>
            <strong>Unlock the full potential of Interview Friend.</strong>
            <span>Create a free account to participate in hackathons, practice AI interviews, and get hired.</span>
          </div>
          <Link className="primary-btn" to="/signup">Create free account</Link>
        </section>
      )}
    </div>
  );
}

export default HomePage;
