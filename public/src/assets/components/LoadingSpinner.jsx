import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col justify-center items-center py-24">

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
        className="w-24 h-24 rounded-full border-4 border-cyan-500 border-t-transparent flex justify-center items-center"
      >

        <FaRobot className="text-cyan-400 text-4xl" />

      </motion.div>

      <motion.h2
        animate={{
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="text-white text-2xl mt-8 font-semibold"
      >

        AI is Thinking...

      </motion.h2>

      <p className="text-slate-400 mt-3">

        Preparing your personalized interview guidance

      </p>

    </div>
  );
};

export default LoadingSpinner;