import {
  FaMapMarkerAlt,
  FaLaptopHouse,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaCode,
  FaCheckCircle,
  FaExternalLinkAlt,
} from "react-icons/fa";

const OpportunityDetails = ({ opportunity }) => {

  return (

    <div className="bg-slate-900 rounded-3xl border border-slate-800 p-10">

      <h1 className="text-5xl font-bold text-white">

        {opportunity.title}

      </h1>

      <h2 className="text-cyan-400 text-2xl mt-4">

        {opportunity.organization}

      </h2>

      <p className="text-slate-400 mt-8 leading-8">

        {opportunity.description}

      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-10">

        <div className="flex gap-3 text-white">

          <FaMapMarkerAlt />

          {opportunity.location}

        </div>

        <div className="flex gap-3 text-white">

          <FaLaptopHouse />

          {opportunity.mode}

        </div>

        <div className="flex gap-3 text-white">

          <FaMoneyBillWave />

          {opportunity.stipend}

        </div>

        <div className="flex gap-3 text-white">

          <FaCalendarAlt />

          {opportunity.deadline}

        </div>

      </div>

      <div className="mt-12">

        <h2 className="text-3xl font-bold text-white">

          Required Skills

        </h2>

        <div className="flex flex-wrap gap-3 mt-6">

          {opportunity.skills?.map((skill) => (

            <span
              key={skill}
              className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full"
            >

              <FaCode className="inline mr-2" />

              {skill}

            </span>

          ))}

        </div>

      </div>

      <div className="mt-12">

        <h2 className="text-3xl font-bold text-white">

          Eligibility

        </h2>

        <ul className="mt-6 space-y-4">

          {opportunity.eligibility?.map((item) => (

            <li
              key={item}
              className="text-slate-300 flex gap-3"
            >

              <FaCheckCircle className="text-green-400 mt-1" />

              {item}

            </li>

          ))}

        </ul>

      </div>

      <a
        href={opportunity.link}
        target="_blank"
        rel="noreferrer"
        className="mt-12 inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-xl text-white font-semibold"
      >

        Apply Now

        <FaExternalLinkAlt />

      </a>

    </div>

  );

};

export default OpportunityDetails;