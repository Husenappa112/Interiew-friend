import { Link } from 'react-router-dom';

const posts = [
  { title: 'Interview experience: Google', description: 'How I prepared for the DSA and HR rounds.' },
  { title: 'Open source starter guide', description: 'A beginner-friendly way to contribute safely.' },
  { title: 'Resume tips shared by seniors', description: 'Improvements that helped raise ATS scores.' },
];

function CommunityPage() {
  return (
    <div className="page-content">
      <div className="section-heading">
        <p className="eyebrow">Community</p>
        <h2>Share resources, ask doubts, and grow together</h2>
      </div>

      <div className="community-grid">
        {posts.map((post) => (
          <div className="glass-card community-card" key={post.title}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </div>
        ))}
      </div>

      <div className="glass-card panel-card community-panel">
        <h3>Join the next session</h3>
        <p>Weekly mock interviews, resume clinics, and roadmaps are available for members.</p>
        <Link className="primary-btn inline-btn" to="/dashboard">Go to dashboard</Link>
      </div>
    </div>
  );
}

export default CommunityPage;
