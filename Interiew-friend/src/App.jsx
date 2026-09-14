import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import PracticePage from './pages/PracticePage';
import RolesPage from './pages/RolesPage';
import OpportunitiesPage from './pages/OpportunitiesPage';
import RoadmapPage from './pages/RoadmapPage';
import CommunityPage from './pages/CommunityPage';
import AIAssistantPage from './pages/AIAssistantPage';

function App() {
  return (
    <Router>
      <div className="app-shell">
        <header className="topbar">
          <Link className="brand" to="/">
            <span className="brand-mark" aria-label="M logo">M</span>
            <span>
              <strong>M AI Career Platform</strong>
              <small>One platform for learning, practicing, building, and getting hired.</small>
            </span>
          </Link>

          <nav className="nav-links" aria-label="Primary navigation">
            <NavLink to="/roles">Roles</NavLink>
            <NavLink to="/practice">Practice</NavLink>
            <NavLink to="/opportunities">Opportunities</NavLink>
            <NavLink to="/roadmap">Roadmap</NavLink>
            <NavLink to="/community">Community</NavLink>
            <NavLink to="/ai-advisor">AI</NavLink>
          </nav>

          <div className="topbar-actions">
            <NavLink className="secondary-btn" to="/login">Login</NavLink>
            <NavLink className="primary-btn" to="/dashboard">Dashboard</NavLink>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/practice" element={<PracticePage />} />
            <Route path="/roles" element={<RolesPage />} />
            <Route path="/opportunities" element={<OpportunitiesPage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/ai-advisor" element={<AIAssistantPage />} />
          </Routes>
        </main>

        <Link className="floating-assistant" to="/ai-advisor">
          <span className="assistant-pill">Ask AI</span>
          <strong>How do I prepare for Infosys?</strong>
        </Link>

        <footer className="footer">
          <p>© 2026 M AI Career Platform</p>
          <p>Developed by Husenappa H.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
