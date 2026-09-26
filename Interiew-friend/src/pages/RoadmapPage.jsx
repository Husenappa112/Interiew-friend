import { useState } from 'react';
import { Link } from 'react-router-dom';

const trackPlans = {
  'Software Engineering': [
    { year: '1st Year', focus: 'CS Fundamentals & Logic', details: ['Learn C or C++ basics', 'Understand loops, arrays, pointers', 'Build basic CLI tools', 'Create GitHub profile'], links: [{ label: 'CS50', url: 'https://cs50.harvard.edu/' }] },
    { year: '2nd Year', focus: 'DSA & Web Basics', details: ['Master Trees, Graphs, Recursion', 'Learn HTML, CSS, JavaScript', 'Build a simple web portfolio', 'Start competitive programming'], links: [{ label: 'NeetCode', url: 'https://neetcode.io/' }] },
    { year: '3rd Year', focus: 'Frameworks & Internships', details: ['Learn React or Node.js', 'Build a full-stack project', 'Study DBMS & OS', 'Apply for summer internships'], links: [{ label: 'The Odin Project', url: 'https://www.theodinproject.com/' }] },
    { year: '4th Year', focus: 'Placements & System Design', details: ['Practice mock interviews', 'Learn basic System Design', 'Apply for full-time roles', 'Contribute to open source'], links: [{ label: 'LeetCode', url: 'https://leetcode.com/' }] }
  ],
  'Data Science': [
    { year: '1st Year', focus: 'Math & Python Foundations', details: ['Learn Python basics', 'Study Statistics and Probability', 'Learn Linear Algebra', 'Use Jupyter Notebooks'], links: [{ label: 'Kaggle Learn', url: 'https://www.kaggle.com/learn' }] },
    { year: '2nd Year', focus: 'Data Wrangling & EDA', details: ['Master Pandas & NumPy', 'Learn Data Visualization (Matplotlib)', 'SQL & Database Basics', 'Analyze public datasets'], links: [{ label: 'DataCamp Free', url: 'https://www.datacamp.com/' }] },
    { year: '3rd Year', focus: 'Machine Learning Core', details: ['Learn Scikit-Learn', 'Understand Regression & Classification', 'Build 2 ML models', 'Apply for Data Analyst internships'], links: [{ label: 'Google ML Course', url: 'https://developers.google.com/machine-learning' }] },
    { year: '4th Year', focus: 'Deep Learning & MLOps', details: ['Learn PyTorch or TensorFlow', 'Basic NLP or Computer Vision', 'Deploy models with FastAPI/Docker', 'Apply for Data Scientist roles'], links: [{ label: 'DeepLearning.AI', url: 'https://www.deeplearning.ai/' }] }
  ]
};

function RoadmapPage() {
  const [track, setTrack] = useState('Software Engineering');
  const plans = trackPlans[track];

  return (
    <div className="page-content">
      <div className="section-heading">
        <p className="eyebrow">Roadmap</p>
        <h2>Your guided path from student to hired professional</h2>
      </div>
      
      <div className="track-selector" style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        {Object.keys(trackPlans).map(t => (
          <button 
            key={t} 
            onClick={() => setTrack(t)}
            className={track === t ? 'primary-btn' : 'secondary-btn'}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="year-grid roadmap-grid">
        {plans.map((plan) => (
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
        <h3>Weekly plan for {track}</h3>
        <ul>
          <li>Practice 3 domain-specific questions</li>
          <li>Build one project or improve a portfolio repository</li>
          <li>Apply to one internship or open source opportunity</li>
          <li>Use AI feedback to improve communication and resume</li>
        </ul>
        <Link className="primary-btn inline-btn" to="/practice">Start practice</Link>
      </div>
    </div>
  );
}

export default RoadmapPage;
