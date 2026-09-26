import { Link } from 'react-router-dom';

const posts = [
  { title: 'Interview experience: Google', description: 'How I prepared for the DSA and HR rounds.' },
  { title: 'Open source starter guide', description: 'A beginner-friendly way to contribute safely.' },
  { title: 'Resume tips shared by seniors', description: 'Improvements that helped raise ATS scores.' },
];

const communities = [
  { title: 'Career mentor WhatsApp', text: 'Ask about internships, resumes, and placements.', url: 'https://wa.me/919686552895?text=Hi%20I%20need%20career%20guidance%20from%20Interview%20Friend.' },
  { title: 'Study accountability group', text: 'Find peers for daily DSA, aptitude, and project goals.', url: 'https://wa.me/919686552895?text=Hi%20please%20add%20me%20to%20the%20Interview%20Friend%20study%20community.' },
  { title: 'Project and open-source help', text: 'Share a GitHub issue or project idea and get support.', url: 'https://wa.me/919686552895?text=Hi%20I%20need%20help%20with%20a%20project%20or%20open-source%20contribution.' },
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

      <div className="section-heading community-heading">
        <p className="eyebrow">Connect with people</p>
        <h3>Mentor and peer communities</h3>
      </div>
      <div className="community-grid">
        {communities.map((community) => <a className="glass-card community-card community-link" href={community.url} target="_blank" rel="noreferrer" key={community.title}><h3>{community.title}</h3><p>{community.text}</p><span>Open WhatsApp ↗</span></a>)}
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
