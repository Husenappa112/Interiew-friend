import { FaSearch } from "react-icons/fa";

const OpportunitySearch = ({ value, onChange }) => {
  return (
    <div className="relative w-full">

      <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"/>

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search Google, Microsoft, AI, React..."
        className="w-full bg-slate-900 border border-slate-700 rounded-full px-14 py-4 text-white outline-none focus:border-cyan-500"
      />

    </div>
  );
};

export default OpportunitySearch;