import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen bg-slate-950 flex items-center relative overflow-hidden">

      <div className="absolute w-96 h-96 bg-cyan-500 blur-[180px] opacity-20 rounded-full top-0 left-0"></div>

      <div className="absolute w-96 h-96 bg-purple-500 blur-[180px] opacity-20 rounded-full bottom-0 right-0"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-cyan-400 font-semibold mb-5">

            AI Powered Career Platform

          </p>

          <h1 className="text-6xl lg:text-7xl font-black leading-tight text-white">

            Master Every

            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">

              Interview

            </span>

          </h1>

          <p className="text-slate-400 mt-8 text-lg leading-8">

            Practice AI interviews, learn from curated YouTube videos, prepare company-wise questions, analyze resumes and receive personalized career guidance—all in one platform.

          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <Link
              to="/mock-interview"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full text-white font-semibold"
            >
              Start AI Interview
            </Link>

            <Link
              to="/roles"
              className="border border-cyan-500 px-8 py-4 rounded-full text-cyan-400 font-semibold"
            >
              Explore Roles
            </Link>

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="w-80 h-80 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex justify-center items-center shadow-[0_0_80px_rgba(34,211,238,.4)]">

              <FaRobot className="text-white text-9xl" />

            </div>

            <div className="absolute -top-8 -left-8 bg-slate-900 border border-slate-700 rounded-xl p-4">

              <h3 className="text-cyan-400 text-2xl font-bold">
                100+
              </h3>

              <p className="text-slate-400">
                Career Roles
              </p>

            </div>

            <div className="absolute -bottom-8 -right-8 bg-slate-900 border border-slate-700 rounded-xl p-4">

              <h3 className="text-cyan-400 text-2xl font-bold">
                AI
              </h3>

              <p className="text-slate-400">
                Career Advisor
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;