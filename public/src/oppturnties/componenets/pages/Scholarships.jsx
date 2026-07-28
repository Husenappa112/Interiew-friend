import OpportunityCard from "../components/OpportunityCard";
import { scholarships } from "../data/scholarships";

const Scholarships = () => {

  return (

    <div className="min-h-screen bg-slate-950 pt-32 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-white">

          Scholarships

        </h1>

        <p className="text-slate-400 mt-5">

          Find scholarships based on country, university, eligibility and degree.

        </p>

        <div className="grid lg:grid-cols-3 gap-8 mt-14">

          {scholarships.map((item)=>(

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

export default Scholarships;