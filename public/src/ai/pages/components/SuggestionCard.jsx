const SuggestionCard = ({
  title,
  suggestions = [],
}) => {
  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

      <h2 className="text-xl font-bold text-white">
        {title}
      </h2>

      <ul className="mt-5 space-y-3">

        {suggestions.map((item, index) => (

          <li
            key={index}
            className="bg-slate-800 rounded-xl p-3 text-gray-300"
          >
            {item}
          </li>

        ))}

      </ul>

    </div>
  );
};

export default SuggestionCard;