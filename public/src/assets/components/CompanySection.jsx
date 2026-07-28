import { motion } from "framer-motion";

const companies = [

  "Google",

  "Microsoft",

  "Amazon",

  "Adobe",

  "Oracle",

  "Netflix",

  "Meta",

  "Apple",

  "Infosys",

  "TCS",

  "Accenture",

  "IBM"

];

const CompanySection = () => {
  return (
    <section className="py-24 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-bold text-white">

          Prepare for Top Companies

        </h2>

        <p className="text-center text-slate-400 mt-5">

          Practice interview experiences, coding rounds, HR rounds and AI mock interviews.

        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16">

          {companies.map((company, index) => (

            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                y: -6,
              }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:border-cyan-400 cursor-pointer"
            >

              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold">

                {company.charAt(0)}

              </div>

              <h3 className="text-white text-2xl mt-6 font-semibold">

                {company}

              </h3>

              <p className="text-slate-400 mt-3">

                Interview Questions

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default CompanySection;