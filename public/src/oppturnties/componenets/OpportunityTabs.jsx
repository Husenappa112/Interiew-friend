import { NavLink } from "react-router-dom";

const tabs = [
  {
    name: "All",
    path: "/opportunities",
  },
  {
    name: "Internships",
    path: "/opportunities/internships",
  },
  {
    name: "Hackathons",
    path: "/opportunities/hackathons",
  },
  {
    name: "Open Source",
    path: "/opportunities/opensource",
  },
  {
    name: "Scholarships",
    path: "/opportunities/scholarships",
  },
  {
    name: "Fellowships",
    path: "/opportunities/fellowships",
  },
];

const OpportunityTabs = () => {
  return (
    <div className="flex gap-4 overflow-x-auto py-4 scrollbar-hide">

      {tabs.map((tab) => (

        <NavLink
          key={tab.name}
          to={tab.path}
          className={({ isActive }) =>
            `px-6 py-3 rounded-full whitespace-nowrap transition ${
              isActive
                ? "bg-cyan-500 text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`
          }
        >
          {tab.name}
        </NavLink>

      ))}

    </div>
  );
};

export default OpportunityTabs;