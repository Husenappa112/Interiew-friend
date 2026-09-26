import { Link } from 'react-router-dom';

const yearPlans = [
  {
    year: '1st Year',
    focus: 'Programming foundations, problem-solving, Git/GitHub, professional profile, and career awareness',
    details: ['Choose one: C, C++, Java, or Python', 'Learn HTML and CSS fundamentals', 'Practice basic logic and flowcharts', 'Create GitHub and LinkedIn profiles'],
    links: [
      { label: 'freeCodeCamp – programming courses', url: 'https://www.youtube.com/@freecodecamp' },
      { label: 'GitHub Skills – hands-on Git', url: 'https://skills.github.com/' },
      { label: 'CS50 – free computer science course', url: 'https://cs50.harvard.edu/x/' },
      { label: 'Create a GitHub account', url: 'https://github.com/signup' },
      { label: 'Create a LinkedIn profile', url: 'https://www.linkedin.com/signup' },
    ],
  },
  {
    year: '2nd Year',
    focus: 'DSA, web development, databases, GitHub projects, internships, and open-source preparation',
    details: ['Master arrays, strings, recursion, trees', 'Learn HTML/CSS/JS and React', 'Build one full-stack project', 'Start internship applications'],
    links: [
      { label: 'NeetCode – DSA roadmap', url: 'https://neetcode.io/roadmap' },
      { label: 'The Odin Project – web development', url: 'https://www.theodinproject.com/' },
      { label: 'GitHub Student Developer Pack', url: 'https://education.github.com/pack' },
    ],
  },
  {
    year: '3rd Year',
    focus: 'Core CS, role specialization, AI literacy, resume building, competitive programming, research, and open source',
    details: ['Prepare for DSA interviews', 'Learn DBMS and OS basics', 'Contribute to open source', 'Improve resume and LinkedIn'],
    links: [
      { label: 'Google Summer of Code', url: 'https://summerofcode.withgoogle.com/' },
      { label: 'Roadmap.sh – role roadmaps', url: 'https://roadmap.sh/' },
      { label: 'Microsoft Learn – free training', url: 'https://learn.microsoft.com/training/' },
      { label: 'AICTE internship portal', url: 'https://internship.aicte-india.org/' },
      { label: 'Cisco Networking Academy', url: 'https://www.netacad.com/' },
    ],
  },
  {
    year: '4th Year',
    focus: 'Placements, role-specific interviews, communication, AI-aware engineering skills, portfolio, and company targeting',
    details: ['Practice mock interviews', 'Prepare project explanations', 'Study company-specific preparation', 'Apply to target roles'],
    links: [
      { label: 'IndiaBix – aptitude practice', url: 'https://www.indiabix.com/logical-reasoning/analogy/' },
      { label: 'LeetCode – interview practice', url: 'https://leetcode.com/' },
      { label: 'Naukri – jobs and internships', url: 'https://www.naukri.com/' },
    ],
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
            <div className="roadmap-links">
              {plan.links.map((link) => <a href={link.url} target="_blank" rel="noreferrer" key={link.url}>{link.label} ↗</a>)}
            </div>
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
