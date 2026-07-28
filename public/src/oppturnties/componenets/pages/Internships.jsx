import { internships } from "../data/internships";
import OpportunityCard from "../components/OpportunityCard";

const Internships = () => {

  return (

    <div className="min-h-screen bg-slate-950 pt-32 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-white">

          Internship Opportunities

        </h1>

        <p className="text-slate-400 mt-5">

          Discover paid, unpaid, remote and hybrid internships.

        </p>

        <div className="grid lg:grid-cols-3 gap-8 mt-14">

          {internships.map((item) => (

            <OpportunityCard
              key={item.id}
              opportunity={item}
            />

          ))}

        </div>

      </div>

    </div>

  );

};

export default Internships;