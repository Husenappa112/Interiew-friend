const filters = [
  {
    title: "Year",
    values: [
      "1st Year",
      "2nd Year",
      "3rd Year",
      "4th Year",
      "Graduate",
    ],
  },
  {
    title: "Mode",
    values: [
      "Remote",
      "Hybrid",
      "Offline",
    ],
  },
  {
    title: "Type",
    values: [
      "Paid",
      "Unpaid",
    ],
  },
  {
    title: "Location",
    values: [
      "India",
      "USA",
      "Europe",
      "Global",
    ],
  },
];

const OpportunitySidebar = () => {
  return (
    <aside className="bg-slate-900 rounded-3xl border border-slate-800 p-6">

      <h2 className="text-2xl font-bold text-white mb-8">
        Filters
      </h2>

      {filters.map((filter) => (

        <div key={filter.title} className="mb-8">

          <h3 className="text-cyan-400 font-semibold mb-3">
            {filter.title}
          </h3>

          <div className="space-y-2">

            {filter.values.map((value) => (

              <label
                key={value}
                className="flex items-center gap-3 text-slate-300"
              >
                <input
                  type="checkbox"
                  className="accent-cyan-500"
                />

                {value}

              </label>

            ))}

          </div>

        </div>

      ))}

    </aside>
  );
};

export default OpportunitySidebar;