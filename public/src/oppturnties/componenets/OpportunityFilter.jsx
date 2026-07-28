const OpportunityFilter = ({
  filters,
  onChange,
}) => {
  return (

    <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">

      {[
        "Category",
        "Mode",
        "Location",
        "Difficulty",
        "Organization",
        "Skills",
      ].map((item) => (

        <select
          key={item}
          name={item.toLowerCase()}
          value={filters[item.toLowerCase()] || ""}
          onChange={onChange}
          className="bg-slate-900 border border-slate-700 rounded-xl p-3 text-white"
        >

          <option value="">

            {item}

          </option>

        </select>

      ))}

    </div>

  );
};

export default OpportunityFilter;