import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="bg-slate-950 text-white min-h-screen flex items-center">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h1 className="text-6xl font-bold leading-tight">

            Crack Your

            <span className="text-blue-400">

              {" "}Dream Interview

            </span>

          </h1>

          <p className="mt-8 text-xl text-gray-300">

            Practice AI interviews, solve interview questions,
            learn from YouTube, and become interview ready.

          </p>

          <div className="mt-10 flex gap-5">

            <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">

              Start Interview

            </button>

            <button className="border border-blue-500 px-6 py-3 rounded-lg">

              Explore Roles

            </button>

          </div>

        </motion.div>

        <motion.div

          initial={{ opacity: 0, x: 80 }}

          animate={{ opacity: 1, x: 0 }}

          transition={{ duration: 1 }}

        >

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Interview"
            className="rounded-xl"
          />

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;