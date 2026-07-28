import { Link, NavLink } from "react-router-dom";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { FaRobot } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Roles", path: "/roles" },
    { name: "Questions", path: "/questions" },
    { name: "Videos", path: "/videos" },
    { name: "Resume", path: "/resume" },
    { name: "AI Coach", path: "/mock-interview" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 flex justify-center items-center text-white font-bold text-2xl shadow-lg shadow-cyan-500/30">

            M

          </div>

          <div>

            <h1 className="text-white text-xl font-bold tracking-wide">
              Interview Friend
            </h1>

            <p className="text-slate-400 text-xs">
              AI Career Platform
            </p>

          </div>

        </Link>

        {/* Desktop */}

        <div className="hidden lg:flex items-center gap-8">

          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `transition font-medium ${
                  isActive
                    ? "text-cyan-400"
                    : "text-slate-300 hover:text-cyan-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

        </div>

        {/* Right */}

        <div className="hidden lg:flex items-center gap-4">

          <button className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 rounded-full text-white hover:scale-105 transition">

            <FaRobot />

            AI Advisor

          </button>

          <button className="border border-cyan-500 text-cyan-400 px-5 py-2 rounded-full hover:bg-cyan-500 hover:text-white transition">

            Login

          </button>

        </div>

        {/* Mobile */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white text-3xl"
        >
          <HiOutlineBars3BottomRight />
        </button>

      </div>

      {menuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 px-6 py-6 space-y-5">

          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className="block text-slate-300 hover:text-cyan-400"
            >
              {item.name}
            </NavLink>
          ))}

          <button className="w-full bg-cyan-500 py-3 rounded-lg text-white">

            AI Advisor

          </button>

        </div>
      )}
    </nav>
  );
};

export default Navbar;