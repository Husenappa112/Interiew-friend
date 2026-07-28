const RoadmapCard = ({ roadmap }) => {
  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

      <h2 className="text-2xl font-bold text-white">
        {roadmap.role}
      </h2>

      <p className="text-gray-400 mt-2">
        Duration : {roadmap.duration}
      </p>

      <div className="mt-6 space-y-3">

        {roadmap.steps.map((step, index) => (

          <div
            key={index}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center text-white">

              {index + 1}

            </div>

            <span className="text-gray-300">
              {step}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
};

export default RoadmapCard;