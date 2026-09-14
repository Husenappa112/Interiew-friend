import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchOverview } from '../service/api';
import AIChatWidget from '../assets/components/AIChatWidget';

const metrics = [
  { label: 'Roles', value: '100+' },
  { label: 'Questions', value: '5k+' },
  { label: 'Videos', value: '1k+' },
  { label: 'AI Feedback', value: '24/7' },
];

const features = [
  { title: 'AI Mock Interview', description: 'Practice with a voice-first interviewer that adapts to your pace and gives actionable feedback.' },
  { title: 'Resume Analyzer', description: 'Upload your resume and discover ATS gaps, missing skills, and stronger positioning for roles.' },
  { title: 'Career Roadmaps', description: 'Generate year-wise learning plans for internships, placements, open source, and beyond.' },
  { title: 'Opportunity Hub', description: 'Filter internships, jobs, hackathons, scholarships, and open-source programs in one dashboard.' },
  { title: 'Learning Hub', description: 'Access curated YouTube playlists, company prep notes, coding questions, and interview videos.' },
  { title: 'Progress Dashboard', description: 'Track streaks, weekly goals, weak skills, and your growth over time with one view.' },
];

const ecosystemItems = [
  { title: 'AI Career Advisor', description: 'Ask anything about roles, company prep, resources, projects, and interview strategy.' },
  { title: 'Global Opportunities', description: 'Search internships, jobs, hackathons, scholarships, and research programs by country and skills.' },
  { title: 'GitHub & LinkedIn Analyzer', description: 'Turn your profile into a stronger portfolio with AI feedback on repositories and personal branding.' },
  { title: 'Year-wise Guidance', description: 'Get a personalized plan for 1st year through graduates and working professionals.' },
];

const companies = ['Google', 'Amazon', 'Microsoft', 'Adobe', 'Oracle', 'Infosys', 'TCS', 'Flipkart'];

const subjectChannels = [
  { title: 'DSA & Problem Solving', channels: ['Abdul Bari', 'CodeChef', 'NeetCode'] },
  { title: 'Web Development', channels: ['Traversy Media', 'freeCodeCamp', 'The Net Ninja'] },
  { title: 'DBMS & System Design', channels: ['Gaurav Sen', 'Harkirat Singh', 'System Design School'] },
  { title: 'Cloud & DevOps', channels: ['Tech With Nana', 'KodeKloud', 'AWS Training'] },
  { title: 'Python & AI', channels: ['Krish Naik', 'freeCodeCamp', 'Coding Ninjas'] },
  { title: 'Java & Backend', channels: ['Java Brains', 'Code With Harry', 'Hitesh Choudhary'] },
];

const locationContent = {
  India: [
    'College placement prep for TCS, Infosys, Wipro, and Capgemini',
    'Internship and hackathon opportunities for Tier-1 and Tier-2 city students',
    'Regional tech communities and coding bootcamp events',
  ],
  USA: [
    'Summer internship and internship conversion pathways for US students',
    'Campus recruiting, resume review, and portfolio strategies',
    'Remote-first software roles and startup-focused project building',
  ],
  Europe: [
    'EU internship visas, research programs, and academic-focused roles',
    'Remote-first technical roles and global startup hiring trends',
    'Study and work opportunities aligned with European job markets',
  ],
  Default: [
    'Career roadmap for your target country and remote opportunities',
    'Portfolio projects and AI interview prep customized to your market',
    'Community meetups, scholarships, and open-source learning tracks',
  ],
};

const fallbackRoles = [
  { title: 'Frontend Engineer', slug: 'frontend-engineer', overview: 'Build accessible, high-converting interfaces for real-world products and internal tools.', skills: ['React', 'TypeScript', 'UX Systems'] },
  { title: 'Backend Engineer', slug: 'backend-engineer', overview: 'Design APIs, secure systems, and scalable services that support real user traffic.', skills: ['Node.js', 'APIs', 'System Design'] },
  { title: 'Data Engineer', slug: 'data-engineer', overview: 'Build data pipelines and analytics workflows used by product and business teams.', skills: ['SQL', 'Python', 'ETL'] },
  { title: 'Cloud Engineer', slug: 'cloud-engineer', overview: 'Deploy resilient systems, optimize costs, and automate infrastructure on modern cloud stacks.', skills: ['AWS', 'Docker', 'Terraform'] },
  { title: 'Product Analyst', slug: 'product-analyst', overview: 'Turn insights into actions with experimentation, product analytics, and business reasoning.', skills: ['SQL', 'Metrics', 'Experimentation'] },
];

const fallbackOpportunities = [
  { title: 'Google Summer of Code', type: 'Open Source' },
  { title: 'Microsoft Learn Internship', type: 'Internship' },
  { title: 'HackOn India', type: 'Hackathon' },
  { title: 'Amazon Future Engineer', type: 'Scholarship' },
  { title: 'Infosys Springboard', type: 'Learning' },
];

function HomePage() {
  const [roles, setRoles] = useState([]);
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState('India');

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchOverview();
        setRoles(data.roles || []);
        setOpportunities(data.opportunities || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadData();

    const savedLocation = localStorage.getItem('m-ai-location');
    const browserLocale = navigator.language || 'en-IN';

    if (savedLocation) {
      setLocation(savedLocation);
      return;
    }

    if (browserLocale.toLowerCase().includes('in')) {
      setLocation('India');
    } else if (browserLocale.toLowerCase().includes('us') || browserLocale.toLowerCase().includes('en-us')) {
      setLocation('USA');
    } else if (browserLocale.toLowerCase().includes('fr') || browserLocale.toLowerCase().includes('de') || browserLocale.toLowerCase().includes('uk')) {
      setLocation('Europe');
    } else {
      setLocation('Default');
    }
  }, []);

  const displayRoles = roles.length ? roles : fallbackRoles;
  const displayOpportunities = opportunities.length ? opportunities : fallbackOpportunities;
  const currentLocationContent = locationContent[location] || locationContent.Default;

  return (
    <div className="page-content">
      <AIChatWidget />
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">AI Career OS for students and freshers</p>
          <h1>Become interview-ready with an AI mentor that thinks several steps ahead.</h1>
          <p className="hero-text">Practice interviews, build roadmaps, discover opportunities, and track your progress from one platform.</p>
          <div className="hero-actions">
            <Link className="primary-btn" to="/practice">Start Interview</Link>
            <Link className="secondary-btn" to="/opportunities">Explore Opportunities</Link>
          </div>
          <div className="metric-grid">
            {metrics.map((metric) => (
              <div className="metric-card" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="ai-card">
            <div className="ai-card-head">
              <span className="dot" />
              <span>AI Coach • Live</span>
            </div>
            <div className="ai-chat">
              <p className="bubble user">How do I prepare for Google Cloud?</p>
              <p className="bubble ai">Roadmap • Projects • Resume tips • Interview practice</p>
            </div>
            <div className="ai-card-foot">Ask: “Show me cloud internships”</div>
          </div>
        </div>
      </section>

      <section className="section" id="roles">
        <div className="section-heading">
          <p className="eyebrow">Popular roles</p>
          <h3>Choose a role and start building your edge.</h3>
        </div>
        <div className="role-grid">
          {loading ? (
            <div className="glass-card role-card"><h4>Loading roles...</h4></div>
          ) : displayRoles.map((role) => (
            <article className="glass-card role-card" key={role.slug || role.title}>
              <h4>{role.title}</h4>
              <p>{role.overview}</p>
              <span>{role.skills?.join(' • ')}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="practice">
        <div className="section-heading">
          <p className="eyebrow">Core features</p>
          <h3>An AI operating system for your career journey.</h3>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="glass-card feature-card" key={feature.title}>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section" id="opportunities">
        <div className="glass-card panel-card">
          <p className="eyebrow">Opportunities hub</p>
          <h3>Find internships, hackathons, scholarships, and open-source programs in one place.</h3>
          <div className="opportunity-list">
            {displayOpportunities.map((item) => (
              <div className="opportunity-item" key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.type}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card panel-card">
          <p className="eyebrow">Smart roadmap</p>
          <h3>From first-year fundamentals to placement readiness.</h3>
          <div className="dashboard-list">
            {['Learn programming fundamentals', 'Build projects and GitHub portfolio', 'Practice DSA and system design', 'Apply to internships and open source', 'Ace interviews with AI feedback'].map((step, index) => (
              <div className="dashboard-item" key={step}>
                <span>{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="ecosystem">
        <div className="section-heading">
          <p className="eyebrow">AI ecosystem</p>
          <h3>Everything you need to grow from student to hired professional.</h3>
        </div>
        <div className="ecosystem-grid">
          {ecosystemItems.map((item) => (
            <article className="glass-card ecosystem-card" key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="learning">
        <div className="section-heading">
          <p className="eyebrow">YouTube learning hub</p>
          <h3>Role-based channels and subject playlists for every career path.</h3>
        </div>

        <div className="resource-grid">
          {subjectChannels.map((subject) => (
            <div className="glass-card resource-card" key={subject.title}>
              <h4>{subject.title}</h4>
              <ul>
                {subject.channels.map((channel) => <li key={channel}>{channel}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="community">
        <div className="section-heading">
          <p className="eyebrow">Trusted by ambitious students</p>
          <h3>Built for the next generation of engineers and builders.</h3>
        </div>

        <div className="location-panel glass-card">
          <div>
            <p className="eyebrow">Regional content</p>
            <h3>Career resources for {location}</h3>
          </div>
          <ul>
            {currentLocationContent.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>

        <div className="cta-banner glass-card">
          <div>
            <p className="eyebrow">Career momentum</p>
            <h3>Turn your weekly progress into interview-ready outcomes.</h3>
          </div>
          <Link className="primary-btn" to="/dashboard">View my dashboard</Link>
        </div>

        <div className="company-row">
          {companies.map((company) => <div className="company-pill" key={company}>{company}</div>)}
        </div>
      </section>

      <section className="section">
        <div className="glass-card developed-card">
          <p className="eyebrow">Developed by</p>
          <h3>M AI Career Platform Team</h3>
          <p>Designed for engineering students and fresh graduates to learn, practice, build, and get hired in one intelligent workspace.</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
