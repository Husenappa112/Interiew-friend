const ATSScoreCard = ({ score }) => {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">

      <h2 className="text-xl font-bold text-white">
        ATS Score
      </h2>

      <div className="mt-6 flex justify-center">

        <div className="w-32 h-32 rounded-full border-8 border-cyan-500 flex items-center justify-center">

          <span className="text-4xl font-bold text-white">
            {score}
          </span>

        </div>

      </div>

    </div>
  );
};

export default ATSScoreCard;