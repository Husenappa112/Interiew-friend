import { Link } from 'react-router-dom';

const yearPlans = [
  {
    year: '1st Year',
    focus: 'Programming foundations, Git, GitHub, Linux, basic projects, career awareness',
    details: ['Learn C / C++ / Python', 'Practice logic building', 'Build 2 small projects', 'Create GitHub profile'],
  },
  {
    year: '2nd Year',
    focus: 'DSA, web development, internships, coding discipline, open source prep',
    details: ['Master arrays, strings, recursion, trees', 'Learn HTML/CSS/JS and React', 'Build one full-stack project', 'Start internship applications'],
  },
  {
    year: '3rd Year',
    focus: 'System design, resume building, competitive programming, research and open source',
    details: ['Prepare for DSA interviews', 'Learn DBMS and OS basics', 'Contribute to open source', 'Improve resume and LinkedIn'],
  },
  {
    year: '4th Year',
    focus: 'Placements, HR rounds, salary negotiation, final portfolio and company targeting',
    details: ['Practice mock interviews', 'Prepare project explanations', 'Study company-specific preparation', 'Apply to target roles'],
  },
];

function RoadmapPage() {
  return (
    <div className="page-content">
      <div className="section-heading">
        <p className="eyebrow">Roadmap</p>
        <h2>Your guided path from student to hired professional</h2>
      </div>

      <div className="year-grid roadmap-grid">
        {yearPlans.map((plan) => (
          <div className="glass-card year-card" key={plan.year}>
            <h3>{plan.year}</h3>
            <p>{plan.focus}</p>
            <ul>
              {plan.details.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="glass-card panel-card roadmap-panel">
        <h3>Weekly plan</h3>
        <ul>
          <li>Practice 3 DSA questions</li>
          <li>Build one project or improve a portfolio repository</li>
          <li>Apply to one internship or open source opportunity</li>
          <li>Use AI feedback to improve communication and resume</li>
          <li>Review one company-specific interview topic every week</li>
        </ul>
        <Link className="primary-btn inline-btn" to="/practice">Start practice</Link>
      </div>
    </div>
  );
}

export default RoadmapPage;
