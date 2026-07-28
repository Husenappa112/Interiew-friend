import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 transition-all"
    >
      <div className="text-cyan-400 text-4xl mb-5">
        {icon}
      </div>

      <h3 className="text-white text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-slate-400 leading-7">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;