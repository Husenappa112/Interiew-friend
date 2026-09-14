import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchRoles } from '../service/api';

const roleChannels = {
  'Frontend Developer': [
    'freeCodeCamp',
    'Traversy Media',
    'The Net Ninja',
    'Web Dev Simplified',
  ],
  'Backend Developer': [
    'Hitesh Choudhary',
    'CodeWithHarry',
    'Java Brains',
    'Traversy Media',
  ],
  'Java Engineer': [
    'Java Brains',
    'Coding Ninjas',
    'Kunal Kushwaha',
    'Telusko',
  ],
  'Python Engineer': [
    'Krish Naik',
    'freeCodeCamp',
    'CodeWithHarry',
    'Alex The Analyst',
  ],
  'Cloud Engineer': [
    'AWS Skill Builder',
    'Tech With Nana',
    'KodeKloud',
    'Gaurav Sen',
  ],
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

  return (
    <div className="page-content">
      <div className="section-heading">
        <p className="eyebrow">Roles</p>
        <h2>Choose your next career path</h2>
      </div>

      <div className="role-grid">
        {loading ? (
          <div className="glass-card role-card"><h4>Loading roles...</h4></div>
        ) : roles.map((role) => (
          <article className="glass-card role-card" key={role.slug || role.title}>
            <h4>{role.title}</h4>
            <p>{role.overview}</p>
            <span>{role.skills?.join(' • ')}</span>
            <div className="mini-list">
              {(roleChannels[role.title] || ['freeCodeCamp', 'Hitesh Choudhary', 'Krish Naik']).map((channel) => (
                <span key={channel}>{channel}</span>
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
