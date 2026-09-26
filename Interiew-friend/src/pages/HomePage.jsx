import { Link } from 'react-router-dom';

const pillars = [
  ['Discover', 'Internships, jobs, hackathons, scholarships, conferences, and open-source programmes with direct application links.'],
  ['Build skills', 'Role-specific roadmaps, free AICTE, Google, Cisco, Microsoft, and community learning resources.'],
  ['Practice', 'Choose aptitude, reasoning, DSA, coding platforms, mock interviews, or online compilers—on your own path.'],
  ['Grow together', 'Connect with seniors, mentors, and study partners for accountability and career support.'],
];

const yearGuidance = [
  { year: '1st year', do: 'Learn one programming language, HTML/CSS, Git/GitHub, communication, and create LinkedIn.', avoid: 'Do not chase certificates without building or compare your start to seniors.' },
  { year: '2nd year', do: 'Learn DSA, DBMS, web or app development, and publish two useful projects.', avoid: 'Do not wait until third year to make GitHub active or start internships.' },
  { year: '3rd year', do: 'Choose a role, learn its technology stack, contribute to open source, and refine your resume.', avoid: 'Do not apply everywhere with the same resume or skip CS fundamentals.' },
  { year: '4th year', do: 'Practice interview communication, company patterns, aptitude/DSA, and application tracking.', avoid: 'Do not stop building after placements start or rely only on campus drives.' },
];

const learningPartners = ['AICTE Internship Portal', 'Google Cloud Skills Boost', 'Cisco Networking Academy', 'Microsoft Learn', 'AWS Skill Builder', 'IBM SkillsBuild', 'freeCodeCamp', 'Coursera financial aid', 'Udemy free courses'];
const workspaceCategories = ['Internships', 'Jobs', 'Hackathons', 'Open source', 'Scholarships', 'Competitions', 'Practice tests', 'Role roadmaps', 'Mentor community'];

function HomePage() {
  return <div className="landing-page">
    <section className="landing-hero glass-card">
      <p className="eyebrow">One platform · Student to professional</p>
      <h1>Find your next opportunity. Build the skills to earn it.</h1>
      <p>Interview Friend brings role roadmaps, learning platforms, practice, community guidance, open source, internships, and hackathons into one focused workspace for engineering students.</p>
      <div className="landing-actions"><Link className="primary-btn" to="/signup">Create free account</Link><Link className="secondary-btn" to="/login">Log in</Link></div>
      <p className="landing-note">Start free. Create an account to access the career workspace.</p>
    </section>
    <section className="landing-section"><p className="eyebrow">What you can do</p><h2>Everything needed for a deliberate career journey</h2><div className="feature-grid">{pillars.map(([title, description]) => <article className="glass-card feature-card" key={title}><h3>{title}</h3><p>{description}</p></article>)}</div></section>
    <section className="landing-section"><p className="eyebrow">Your all-in-one workspace</p><h2>Explore every path after you sign in</h2><div className="workspace-category-grid">{workspaceCategories.map((category) => <Link className="glass-card workspace-category" key={category} to="/login"><strong>{category}</strong><span>Explore →</span></Link>)}</div></section>
    <section className="landing-section"><p className="eyebrow">Start with the right habits</p><h2>What to do—and what students often ignore</h2><div className="year-advice-grid">{yearGuidance.map((item) => <article className="glass-card year-advice" key={item.year}><h3>{item.year}</h3><p><strong>Do:</strong> {item.do}</p><p><strong>Do not ignore:</strong> {item.avoid}</p></article>)}</div></section>
    <section className="landing-section landing-platforms glass-card"><p className="eyebrow">Free and low-cost learning</p><h2>One workspace, many trusted platforms</h2><p>Use our role guides to decide what to learn, then open the right platform instead of searching randomly.</p><div>{learningPartners.map((partner) => <span key={partner}>{partner}</span>)}</div></section>
    <section className="landing-section landing-journey glass-card"><div><p className="eyebrow">Designed for every year</p><h2>Foundations → projects → opportunities → placement readiness</h2><p>Begin with programming and your professional profile in first year. Then develop projects, communication, interview skills, and a public portfolio as your goals mature.</p></div><Link className="primary-btn" to="/signup">Start my journey</Link></section>
    <section className="landing-credit"><p>Built by</p><strong>Husenappa H.</strong><span>Interview Friend · AI Career Platform</span></section>
  </div>;
}

export default HomePage;
