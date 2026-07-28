import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <Link to="/" className="text-3xl font-bold text-blue-400">
          InterviewFriend
        </Link>

        <div className="hidden md:flex gap-8 text-lg">
          <Link to="/">Home</Link>

          <Link to="/roles">Roles</Link>

          <Link to="/questions">Question Bank</Link>

          <Link to="/mock">Mock Interview</Link>

          <Link to="/dashboard">Dashboard</Link>

          <Link to="/resume">Resume</Link>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
          <FaUserCircle />
          Login
        </button>

      </div>
    </nav>
  );
}

export default Navbar;