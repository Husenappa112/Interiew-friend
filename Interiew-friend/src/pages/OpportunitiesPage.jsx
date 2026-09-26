import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const opportunityGroups = [
  {
    title: 'Internships',
    items: [
      { name: 'Microsoft Internship', company: 'Microsoft', link: 'https://careers.microsoft.com/' },
      { name: 'Google Summer Intern', company: 'Google', link: 'https://buildyourfuture.withgoogle.com/' },
      { name: 'Amazon Jobs & Internships', company: 'Amazon', link: 'https://www.amazon.jobs/en/teams/internships-for-students' },
      { name: 'LinkedIn Jobs', company: 'LinkedIn', link: 'https://www.linkedin.com/jobs/' },
      { name: 'Wellfound Startup Jobs', company: 'Wellfound', link: 'https://wellfound.com/jobs' },
    ],
  },
  {
    title: 'Open Source',
    items: [
      { name: 'Google Summer of Code', company: 'Google', link: 'https://summerofcode.withgoogle.com/' },
      { name: 'Outreachy', company: 'Outreachy', link: 'https://www.outreachy.org/' },
      { name: 'Linux Foundation Mentorship', company: 'Linux Foundation', link: 'https://mentorship.lfx.linuxfoundation.org/' },
      { name: 'GitHub Issues', company: 'GitHub', link: 'https://github.com/issues' },
    ],
  },
  {
    title: 'Hackathons',
    items: [
      { name: 'MLH Hackathons', company: 'MLH', link: 'https://mlh.io/' },
      { name: 'HackerEarth Challenges', company: 'HackerEarth', link: 'https://www.hackerearth.com/challenges/' },
      { name: 'Devpost Hackathons', company: 'Devpost', link: 'https://devpost.com/hackathons' },
      { name: 'Unstop Competitions', company: 'Unstop', link: 'https://unstop.com/hackathons' },
    ],
  },
  {
    title: 'Free training',
    items: [
      { name: 'Microsoft Learn', company: 'Microsoft', link: 'https://learn.microsoft.com/training/' },
      { name: 'AWS Skill Builder', company: 'AWS', link: 'https://explore.skillbuilder.aws/learn' },
      { name: 'Google Cloud Skills Boost', company: 'Google Cloud', link: 'https://www.cloudskillsboost.google/' },
      { name: 'freeCodeCamp', company: 'freeCodeCamp', link: 'https://www.freecodecamp.org/learn/' },
    ],
  },
];

function OpportunitiesPage() {
  const [query, setQuery] = useState('');
  const [activeType, setActiveType] = useState('All');
  const types = ['All', ...opportunityGroups.map((group) => group.title)];
  const visibleGroups = useMemo(() => opportunityGroups
    .filter((group) => activeType === 'All' || group.title === activeType)
    .map((group) => ({ ...group, items: group.items.filter((item) => `${item.name} ${item.company}`.toLowerCase().includes(query.toLowerCase())) }))
    .filter((group) => group.items.length), [query, activeType]);
  return (
    <div className="page-content">
      <div className="section-heading">
        <p className="eyebrow">Opportunities</p>
        <h2>Find internships, hackathons, and open source programs</h2>
        <p>Search direct application pages and free learning programmes in one place.</p>
      </div>

      <div className="opportunity-controls glass-card">
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search internships, companies, hackathons…" aria-label="Search opportunities" />
        <div>{types.map((type) => <button key={type} className={activeType === type ? 'opportunity-filter active' : 'opportunity-filter'} onClick={() => setActiveType(type)}>{type}</button>)}</div>
      </div>

      <div className="opportunity-grid">
        {visibleGroups.map((group) => (
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

      {!visibleGroups.length && <div className="glass-card panel-card"><h3>No matching opportunities</h3><p>Try a company name, or choose a different category.</p></div>}

      <div className="section-heading">
        <h3>Need a guided plan?</h3>
        <Link className="primary-btn inline-btn" to="/ai-advisor">Ask AI Advisor</Link>
      </div>
    </div>
  );
}

export default OpportunitiesPage;
