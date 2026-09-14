import { Link } from 'react-router-dom';

const opportunityGroups = [
  {
    title: 'Internships',
    items: [
      { name: 'Microsoft Internship', company: 'Microsoft', link: 'https://careers.microsoft.com/' },
      { name: 'Google Summer Intern', company: 'Google', link: 'https://buildyourfuture.withgoogle.com/' },
    ],
  },
  {
    title: 'Open Source',
    items: [
      { name: 'Google Summer of Code', company: 'Google', link: 'https://summerofcode.withgoogle.com/' },
      { name: 'Outreachy', company: 'Outreachy', link: 'https://www.outreachy.org/' },
    ],
  },
  {
    title: 'Hackathons',
    items: [
      { name: 'MLH Hackathons', company: 'MLH', link: 'https://mlh.io/' },
      { name: 'HackerEarth Challenges', company: 'HackerEarth', link: 'https://www.hackerearth.com/challenges/' },
    ],
  },
];

function OpportunitiesPage() {
  return (
    <div className="page-content">
      <div className="section-heading">
        <p className="eyebrow">Opportunities</p>
        <h2>Find internships, hackathons, and open source programs</h2>
      </div>

      <div className="opportunity-grid">
        {opportunityGroups.map((group) => (
          <div className="glass-card panel-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="opportunity-list">
              {group.items.map((item) => (
                <a className="opportunity-item" href={item.link} target="_blank" rel="noreferrer" key={item.name}>
                  <strong>{item.name}</strong>
                  <span>{item.company}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="section-heading">
        <h3>Need a guided plan?</h3>
        <Link className="primary-btn inline-btn" to="/ai-advisor">Ask AI Advisor</Link>
      </div>
    </div>
  );
}

export default OpportunitiesPage;
