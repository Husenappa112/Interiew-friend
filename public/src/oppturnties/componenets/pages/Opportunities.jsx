import { Link } from "react-router-dom";
import {
  FaBriefcase,
  FaLaptopCode,
  FaUsers,
  FaGraduationCap,
  FaTrophy,
  FaGlobe,
} from "react-icons/fa";

const cards = [
  {
    title: "Internships",
    icon: <FaBriefcase />,
    path: "/opportunities/internships",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Hackathons",
    icon: <FaLaptopCode />,
    path: "/opportunities/hackathons",
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "Open Source",
    icon: <FaUsers />,
    path: "/opportunities/opensource",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Scholarships",
    icon: <FaGraduationCap />,
    path: "/opportunities/scholarships",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Fellowships",
    icon: <FaTrophy />,
    path: "/opportunities/fellowships",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Competitions",
    icon: <FaGlobe />,
    path: "/opportunities/competitions",
    color: "from-indigo-500 to-violet-600",
  },
];

const Opportunities = () => {
  return (
    <div className="min-h-screen bg-slate-950 pt-32 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-white">
          Opportunities Hub
        </h1>

        <p className="text-slate-400 mt-5">
          Discover internships, hackathons, open-source programs,
          fellowships, scholarships and competitions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {cards.map((card) => (

            <Link
              key={card.title}
              to={card.path}
              className={`rounded-3xl p-8 bg-gradient-to-br ${card.color} hover:scale-105 transition duration-300`}
            >

              <div className="text-5xl text-white mb-6">
                {card.icon}
              </div>

              <h2 className="text-3xl font-bold text-white">
                {card.title}
              </h2>

              <p className="text-white/90 mt-4">
                Explore the latest {card.title.toLowerCase()}.
              </p>

            </Link>

          ))}

        </div>

      </div>
    </div>
  );
};

export default Opportunities;