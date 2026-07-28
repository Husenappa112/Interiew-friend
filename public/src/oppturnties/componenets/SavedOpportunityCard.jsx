import {
  FaBookmark,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const SavedOpportunityCard = ({ opportunity }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">

      <div className="flex justify-between">

        <div>

          <h2 className="text-xl font-bold text-white">
            {opportunity.title}
          </h2>

          <p className="text-cyan-400 mt-1">
            {opportunity.organization}
          </p>

        </div>

        <FaBookmark className="text-yellow-400 text-xl" />

      </div>

      <div className="mt-5 space-y-2 text-slate-300">

        <div className="flex items-center gap-2">

          <FaMapMarkerAlt />

          {opportunity.location}

        </div>

        <div className="flex items-center gap-2">

          <FaCalendarAlt />

          {opportunity.deadline}

        </div>

      </div>

      <button className="w-full mt-6 bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl">
        View Opportunity
      </button>

    </div>
  );
};

export default SavedOpportunityCard;