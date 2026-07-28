import { FiSearch } from "react-icons/fi";

const SearchBar = ({ placeholder, value, onChange }) => {
  return (
    <div className="w-full max-w-3xl mx-auto relative">

      <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400 text-xl" />

      <input
        type="text"
        placeholder={placeholder || "Search Role..."}
        value={value}
        onChange={onChange}
        className="w-full bg-slate-900 border border-slate-700 rounded-full py-4 pl-14 pr-6 text-white outline-none focus:border-cyan-400 transition"
      />

    </div>
  );
};

export default SearchBar;