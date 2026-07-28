import {
  FaBriefcase,
  FaLaptopCode,
  FaUsers,
  FaGraduationCap,
} from "react-icons/fa";

const OpportunityBanner = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-600 via-blue-700 to-indigo-800 rounded-3xl p-10 text-white">

      <h1 className="text-5xl font-bold">
        Discover Your Next Opportunity
      </h1>

      <p className="mt-4 text-lg text-gray-100 max-w-3xl">
        Find internships, hackathons, fellowships, scholarships,
        open-source programs and competitions from top companies
        around the world.
      </p>

      <div className="grid md:grid-cols-4 gap-5 mt-10">

        <div className="bg-white/10 rounded-xl p-5">
          <FaBriefcase className="text-3xl mb-3" />
          <h3 className="font-semibold">Internships</h3>
        </div>

        <div className="bg-white/10 rounded-xl p-5">
          <FaLaptopCode className="text-3xl mb-3" />
          <h3 className="font-semibold">Hackathons</h3>
        </div>

        <div className="bg-white/10 rounded-xl p-5">
          <FaUsers className="text-3xl mb-3" />
          <h3 className="font-semibold">Open Source</h3>
        </div>

        <div className="bg-white/10 rounded-xl p-5">
          <FaGraduationCap className="text-3xl mb-3" />
          <h3 className="font-semibold">Scholarships</h3>
        </div>

      </div>

    </section>
  );
};

export default OpportunityBanner;