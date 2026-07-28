const SkillCard = ({ skill }) => {
  const percentage = Math.min(
    (skill.current / skill.target) * 100,
    100
  );

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">

      <div className="flex justify-between items-center">

        <h2 className="text-xl font-semibold text-white">
          {skill.name}
        </h2>

        <span className="text-cyan-400 font-bold">
          {skill.current}/{skill.target}
        </span>

      </div>

      <div className="w-full h-3 bg-slate-700 rounded-full mt-5">

        <div
          className="h-3 rounded-full bg-cyan-500"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      <p className="text-gray-400 mt-4">
        {percentage.toFixed(0)}% Completed
      </p>

    </div>
  );
};

export default SkillCard;