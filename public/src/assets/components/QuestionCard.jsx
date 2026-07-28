import { motion } from "framer-motion";
import {
  FaBuilding,
  FaBrain,
  FaArrowRight
} from "react-icons/fa";

const QuestionCard = ({ question }) => {
  return (

    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 transition"
    >

      <div className="flex justify-between">

        <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full">

          {question.level}

        </span>

        <span className="flex items-center gap-2 text-purple-400">

          <FaBuilding />

          {question.company}

        </span>

      </div>

      <h3 className="text-white text-xl font-semibold mt-6">

        {question.title}

      </h3>

      <p className="text-slate-400 mt-4">

        {question.description}

      </p>

      <button className="mt-8 flex items-center gap-3 text-cyan-400 hover:text-cyan-300">

        <FaBrain />

        Ask AI

        <FaArrowRight />

      </button>

    </motion.div>
  );
};

export default QuestionCard;