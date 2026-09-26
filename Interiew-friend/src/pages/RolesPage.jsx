import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchRoles } from '../service/api';

const roleChannels = {
  'Frontend Developer': [
    { name: 'freeCodeCamp', url: 'https://www.youtube.com/@freecodecamp' },
    { name: 'Traversy Media', url: 'https://www.youtube.com/@TraversyMedia' },
    { name: 'The Net Ninja', url: 'https://www.youtube.com/@NetNinja' },
    { name: 'Web Dev Simplified', url: 'https://www.youtube.com/@WebDevSimplified' },
  ],
  'Backend Developer': [
    { name: 'Hitesh Choudhary', url: 'https://www.youtube.com/@HiteshChoudharydotcom' },
    { name: 'CodeWithHarry', url: 'https://www.youtube.com/@CodeWithHarry' },
    { name: 'Java Brains', url: 'https://www.youtube.com/@Java.Brains' },
    { name: 'Traversy Media', url: 'https://www.youtube.com/@TraversyMedia' },
  ],
  'Java Engineer': [
    { name: 'Java Brains', url: 'https://www.youtube.com/@Java.Brains' },
    { name: 'Coding Ninjas', url: 'https://www.youtube.com/@CodingNinjasIndia' },
    { name: 'Kunal Kushwaha', url: 'https://www.youtube.com/@KunalKushwaha' },
    { name: 'Telusko', url: 'https://www.youtube.com/@Telusko' },
  ],
  'Python Engineer': [
    { name: 'Krish Naik', url: 'https://www.youtube.com/@krishnaik06' },
    { name: 'freeCodeCamp', url: 'https://www.youtube.com/@freecodecamp' },
    { name: 'CodeWithHarry', url: 'https://www.youtube.com/@CodeWithHarry' },
    { name: 'Alex The Analyst', url: 'https://www.youtube.com/@AlexTheAnalyst' },
  ],
  'Cloud Engineer': [
    { name: 'AWS Skill Builder', url: 'https://www.youtube.com/@AWSSkillBuilder' },
    { name: 'Tech World with Nana', url: 'https://www.youtube.com/@TechWorldwithNana' },
    { name: 'KodeKloud', url: 'https://www.youtube.com/@KodeKloud' },
    { name: 'Gaurav Sen', url: 'https://www.youtube.com/@gkcs' },
  ],
  'Full Stack Developer': [
    { name: 'JavaScript Mastery', url: 'https://www.youtube.com/@javascriptmastery' },
    { name: 'Traversy Media', url: 'https://www.youtube.com/@TraversyMedia' },
    { name: 'Web Dev Simplified', url: 'https://www.youtube.com/@WebDevSimplified' },
  ],
  'DevOps Engineer': [
    { name: 'Tech World with Nana', url: 'https://www.youtube.com/@TechWorldwithNana' },
    { name: 'KodeKloud', url: 'https://www.youtube.com/@KodeKloud' },
    { name: 'NetworkChuck', url: 'https://www.youtube.com/@NetworkChuck' },
  ],
  'Data Analyst': [
    { name: 'Alex The Analyst', url: 'https://www.youtube.com/@AlexTheAnalyst' },
    { name: 'Luke Barousse', url: 'https://www.youtube.com/@LukeBarousse' },
    { name: 'codebasics', url: 'https://www.youtube.com/@codebasics' },
  ],
  'Data Scientist': [
    { name: 'Krish Naik', url: 'https://www.youtube.com/@krishnaik06' },
    { name: 'StatQuest', url: 'https://www.youtube.com/@statquest' },
    { name: 'Data School', url: 'https://www.youtube.com/@dataschool' },
  ],
  'Machine Learning Engineer': [
    { name: 'DeepLearningAI', url: 'https://www.youtube.com/@Deeplearningai' },
    { name: 'Krish Naik', url: 'https://www.youtube.com/@krishnaik06' },
    { name: 'AssemblyAI', url: 'https://www.youtube.com/@AssemblyAI' },
  ],
  'Cybersecurity Analyst': [
    { name: 'John Hammond', url: 'https://www.youtube.com/@_JohnHammond' },
    { name: 'NetworkChuck', url: 'https://www.youtube.com/@NetworkChuck' },
    { name: 'HackerSploit', url: 'https://www.youtube.com/@HackerSploit' },
  ],
  'QA Automation Engineer': [
    { name: 'SDET-QA Automation Techie', url: 'https://www.youtube.com/@sdet-qa' },
    { name: 'Automation Step by Step', url: 'https://www.youtube.com/@AutomationStepByStep' },
    { name: 'Test Automation University', url: 'https://www.youtube.com/@TestAutomationUniversity' },
  ],
  'Mobile App Developer': [
    { name: 'Flutter', url: 'https://www.youtube.com/@flutterdev' },
    { name: 'Philipp Lackner', url: 'https://www.youtube.com/@PhilippLackner' },
    { name: 'Coding with T', url: 'https://www.youtube.com/@codingwitht' },
  ],
  'UI/UX Designer': [
    { name: 'Mizko', url: 'https://www.youtube.com/@Mizko' },
    { name: 'Jesse Showalter', url: 'https://www.youtube.com/@JesseShowalter' },
    { name: 'Figma', url: 'https://www.youtube.com/@Figma' },
  ],
};

const fallbackChannels = [
  { name: 'freeCodeCamp', url: 'https://www.youtube.com/@freecodecamp' },
  { name: 'Hitesh Choudhary', url: 'https://www.youtube.com/@HiteshChoudharydotcom' },
  { name: 'Krish Naik', url: 'https://www.youtube.com/@krishnaik06' },
];

const additionalRoles = [
  { title: 'Full Stack Developer', slug: 'full-stack-developer', overview: 'Build web applications from interface to database.', skills: ['React', 'Node.js', 'PostgreSQL'] },
  { title: 'DevOps Engineer', slug: 'devops-engineer', overview: 'Automate deployment, infrastructure, and reliable releases.', skills: ['Docker', 'CI/CD', 'Linux'] },
  { title: 'Data Analyst', slug: 'data-analyst', overview: 'Transform data into useful business insights and dashboards.', skills: ['SQL', 'Excel', 'Power BI'] },
  { title: 'Data Scientist', slug: 'data-scientist', overview: 'Use statistics and machine learning to solve problems.', skills: ['Python', 'Statistics', 'ML'] },
  { title: 'Machine Learning Engineer', slug: 'machine-learning-engineer', overview: 'Build and deploy production machine-learning systems.', skills: ['Python', 'MLOps', 'Deep Learning'] },
  { title: 'Cybersecurity Analyst', slug: 'cybersecurity-analyst', overview: 'Protect systems through secure design and monitoring.', skills: ['Security', 'Networking', 'Linux'] },
  { title: 'QA Automation Engineer', slug: 'qa-automation-engineer', overview: 'Create robust automated testing systems.', skills: ['Testing', 'Selenium', 'APIs'] },
  { title: 'Mobile App Developer', slug: 'mobile-app-developer', overview: 'Build Android and iOS experiences.', skills: ['Flutter', 'React Native', 'Android'] },
  { title: 'UI/UX Designer', slug: 'ui-ux-designer', overview: 'Design research-led, intuitive product experiences.', skills: ['Figma', 'Research', 'Prototyping'] },
];

const roleResources = {
  'Frontend Developer': { tech: 'HTML, CSS, JavaScript, React, TypeScript, accessibility', platforms: ['freeCodeCamp', 'The Odin Project', 'Frontend Mentor', 'Vercel (vercel.com)', 'GitHub (github.com)'] },
  'Backend Developer': { tech: 'Node.js, Express, REST APIs, PostgreSQL, Redis, Docker', platforms: ['MDN Web Docs', 'Docker (docker.com)', 'Postman Academy', 'AWS Builder (aws.amazon.com)'] },
  'Java Engineer': { tech: 'Java, OOP, Collections, Spring Boot, SQL, JUnit', platforms: ['Spring Academy', 'HackerRank Java', 'AWS EC2', 'GitHub (github.com)'] },
  'Python Engineer': { tech: 'Python, FastAPI/Django, SQL, testing, Docker', platforms: ['Python Docs', 'Docker (docker.com)', 'AWS Lambda', 'GitHub (github.com)'] },
  'Cloud Engineer': { tech: 'Linux, networking, AWS/Azure, Docker, Kubernetes, Terraform', platforms: ['AWS Skill Builder (aws.amazon.com)', 'Docker (docker.com)', 'Kubernetes (kubernetes.io)'] },
  'Full Stack Developer': { tech: 'React, Node.js, APIs, authentication, PostgreSQL, deployment', platforms: ['Firebase (firebase.google.com)', 'Vercel (vercel.com)', 'Docker (docker.com)', 'AWS Builder'] },
  'DevOps Engineer': { tech: 'Linux, Bash, Git, Docker, CI/CD, Kubernetes, Terraform', platforms: ['Docker (docker.com)', 'AWS Skill Builder', 'GitHub Actions'] },
  'Data Analyst': { tech: 'Excel, SQL, Power BI/Tableau, Python, statistics', platforms: ['Kaggle (kaggle.com)', 'Microsoft Learn', 'AWS Builder (aws.amazon.com)'] },
  'Data Scientist': { tech: 'Python, SQL, statistics, Pandas, scikit-learn, visualization', platforms: ['Kaggle (kaggle.com)', 'AWS SageMaker', 'Google Colab'] },
  'Machine Learning Engineer': { tech: 'Python, statistics, scikit-learn, PyTorch/TensorFlow, MLOps', platforms: ['AWS DeepRacer', 'Kaggle (kaggle.com)', 'Docker (docker.com)'] },
  'Cybersecurity Analyst': { tech: 'Networking, Linux, Python, OWASP, SIEM, incident response', platforms: ['TryHackMe', 'OWASP (owasp.org)', 'AWS Security'] },
  'QA Automation Engineer': { tech: 'Testing fundamentals, Selenium/Playwright, APIs, CI/CD, SQL', platforms: ['Selenium (selenium.dev)', 'Playwright', 'Docker (docker.com)'] },
  'Mobile App Developer': { tech: 'Dart/Flutter or Kotlin, state management, APIs, testing', platforms: ['Firebase (firebase.google.com)', 'Flutter Docs', 'AWS Amplify'] },
  'UI/UX Designer': { tech: 'Figma, user research, wireframes, prototypes, accessibility', platforms: ['Figma (figma.com)', 'Google UX Design', 'Firebase (for A/B testing)'] },
};

function RolesPage() {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRoles() {
      try {
        const data = await fetchRoles();
        setRoles(data.roles || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadRoles();
  }, []);

  const displayRoles = [...roles, ...additionalRoles.filter((item) => !roles.some((role) => role.slug === item.slug))];

  return (
    <div className="page-content">
      <div className="section-heading">
        <p className="eyebrow">Roles</p>
        <h2>Choose your next career path</h2>
      </div>

      <div className="role-grid">
        {loading ? (
          <div className="glass-card role-card"><h4>Loading roles...</h4></div>
        ) : displayRoles.map((role) => (
          <article className="glass-card role-card" key={role.slug || role.title}>
            <h4>{role.title}</h4>
            <p>{role.overview}</p>
            <span>{role.skills?.join(' • ')}</span>
            <p className="role-tech"><strong>Skills & technology:</strong> {roleResources[role.title]?.tech || role.skills?.join(', ')}</p>
            <p className="role-platforms"><strong>Learn / practice:</strong> {(roleResources[role.title]?.platforms || ['freeCodeCamp', 'Roadmap.sh']).join(' · ')}</p>
            <div className="mini-list">
              {(roleChannels[role.title] || fallbackChannels).map((channel) => (
                <a key={channel.url} href={channel.url} target="_blank" rel="noreferrer">
                  {channel.name} ↗
                </a>
              ))}
            </div>
            <Link className="primary-btn inline-btn" to="/roadmap">Open roadmap</Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default RolesPage;
