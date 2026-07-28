const OpportunityCardSkeleton = () => {
  return (

    <div className="animate-pulse bg-slate-900 rounded-3xl p-6 border border-slate-800">

      <div className="h-6 bg-slate-700 rounded w-2/3"></div>

      <div className="h-4 bg-slate-700 rounded mt-4 w-1/2"></div>

      <div className="h-20 bg-slate-700 rounded mt-6"></div>

      <div className="grid grid-cols-2 gap-3 mt-6">

        <div className="h-10 bg-slate-700 rounded"></div>

        <div className="h-10 bg-slate-700 rounded"></div>

      </div>

      <div className="h-12 bg-slate-700 rounded mt-6"></div>

    </div>

  );
};

export default OpportunityCardSkeleton;