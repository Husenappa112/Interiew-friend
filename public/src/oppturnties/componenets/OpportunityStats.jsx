const stats = [
  {
    title: "Internships",
    value: "2500+",
  },
  {
    title: "Hackathons",
    value: "350+",
  },
  {
    title: "Scholarships",
    value: "500+",
  },
  {
    title: "Companies",
    value: "120+",
  },
];

const OpportunityStats = () => {
  return (

    <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      {stats.map((item) => (

        <div
          key={item.title}
          className="bg-slate-900 rounded-2xl p-8 border border-slate-800"
        >

          <h2 className="text-4xl font-bold text-cyan-400">

            {item.value}

          </h2>

          <p className="text-gray-400 mt-2">

            {item.title}

          </p>

        </div>

      ))}

    </section>

  );
};

export default OpportunityStats;