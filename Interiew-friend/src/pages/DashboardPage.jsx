import { Link } from 'react-router-dom';

const cards = [
  { title: 'Completed Interviews', value: '12' },
  { title: 'Current Streak', value: '7 days' },
  { title: 'Accuracy', value: '84%' },
  { title: 'Weak Skills', value: 'System Design' },
];

function DashboardPage() {
  return (
    <div className="page-content">
      <div className="section-heading">
        <p className="eyebrow">Dashboard</p>
        <h2>Your AI career command center</h2>
      </div>

      <div className="metric-grid dashboard-grid">
        {cards.map((card) => (
          <div className="glass-card metric-card" key={card.title}>
            <strong>{card.value}</strong>
            <span>{card.title}</span>
          </div>
        ))}
      </div>

      <div className="split-section">
        <div className="glass-card panel-card">
          <h3>Upcoming Practice</h3>
          <p>Mock interview for Google SDE and resume review for your internship application.</p>
        </div>
        <div className="glass-card panel-card">
          <h3>Recommended Next Step</h3>
          <p>Practice DSA and review your roadmap for the next 7 days.</p>
          <Link className="primary-btn inline-btn" to="/practice">Open Practice</Link>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
