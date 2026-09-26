import React from 'react';
import { Link } from 'react-router-dom';

const startupJourneys = [
  { name: 'E-commerce Platform', journey: 'Started as a simple Shopify clone, moved to custom React + Node.js backend. Scaled using AWS S3 for images and Stripe for payments.', skills: ['React', 'Node.js', 'Stripe API', 'AWS S3'] },
  { name: 'SaaS Dashboard', journey: 'Built MVP in a weekend using Firebase for Auth & Database, deployed on Vercel. Later containerized with Docker to move to AWS EC2.', skills: ['Firebase', 'Docker', 'Vercel', 'React'] },
  { name: 'AI Content Generator', journey: 'Leveraged OpenAI API. Used Next.js for SEO. Hosted frontend on Vercel and backend microservices on AWS Lambda.', skills: ['Next.js', 'OpenAI API', 'AWS Lambda', 'Tailwind CSS'] }
];

const openSourceTools = [
  { name: 'Firebase', desc: 'Fast backend, authentication, and database for MVPs.', link: 'https://firebase.google.com/' },
  { name: 'AWS Builder', desc: 'Cloud infrastructure to scale your startup from day one.', link: 'https://aws.amazon.com/getting-started/' },
  { name: 'Docker', desc: 'Containerize your applications so they run anywhere.', link: 'https://www.docker.com/' },
  { name: 'GitHub', desc: 'Host code, manage open source contributions, and CI/CD.', link: 'https://github.com/' }
];

function StartupPage() {
  return (
    <div className="page-content unstop-theme">
      <div className="section-heading">
        <p className="eyebrow">Startup Hub</p>
        <h2>Build Your Startup Website</h2>
        <p>From an idea to a scalable product. Learn the skills, tools, and journeys of successful projects.</p>
      </div>

      <section className="home-section" style={{ marginTop: '2rem' }}>
        <h3>Essential Tools & Open Source Platforms</h3>
        <div className="unstop-card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          {openSourceTools.map((tool) => (
            <article className="unstop-card" key={tool.name} style={{ padding: '1.5rem', background: 'var(--bg-card)' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem' }}>{tool.name}</h4>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>{tool.desc}</p>
              <a href={tool.link} target="_blank" rel="noreferrer" className="text-link">Explore {tool.name} ↗</a>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section" style={{ marginTop: '3rem' }}>
        <h3>Example Websites & Their Journey</h3>
        <div className="year-advice-grid">
          {startupJourneys.map((startup) => (
            <article className="glass-card year-advice" key={startup.name}>
              <h3>{startup.name}</h3>
              <p><strong>Journey:</strong> {startup.journey}</p>
              <p><strong>Required Skills:</strong> {startup.skills.join(', ')}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="glass-card panel-card" style={{ marginTop: '3rem' }}>
        <h3>What you need to do</h3>
        <ul>
          <li><strong>Idea Phase:</strong> Define your target audience and core problem.</li>
          <li><strong>MVP (Minimum Viable Product):</strong> Use tools like Firebase and Vercel to build and deploy quickly.</li>
          <li><strong>Scale & Architecture:</strong> Once you have users, learn Docker and AWS to manage server load.</li>
          <li><strong>Open Source:</strong> Look at GitHub repositories to find boilerplate code and UI libraries.</li>
        </ul>
        <Link className="primary-btn inline-btn" to="/ai-advisor" style={{ marginTop: '1rem' }}>Ask AI for a Project Roadmap</Link>
      </section>
    </div>
  );
}

export default StartupPage;
