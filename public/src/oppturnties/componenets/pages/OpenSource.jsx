import { opensource } from "../data/opensource";
import OpportunityCard from "../components/OpportunityCard";

const OpenSource = () => {
  return (
    <div className="min-h-screen bg-slate-950 pt-32 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-white">
          Open Source Programs
        </h1>

        <p className="text-slate-400 mt-5">
          Contribute to real-world projects and participate in global open-source programs.
        </p>

        <div className="grid lg:grid-cols-3 gap-8 mt-14">

          {opensource.map((program) => (
            <OpportunityCard
              key={program.id}
              opportunity={program}
            />
          ))}

        </div>

      </div>

    </div>
  );
};

export default OpenSource;