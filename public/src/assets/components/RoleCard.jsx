import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCode,
  FaClock,
  FaYoutube
} from "react-icons/fa";

const RoleCard = ({ role }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: .3 }}
      className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-400"
    >

      <img
        src={role.image}
        alt={role.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-6">

        <h2 className="text-2xl font-bold text-white">
          {role.title}
        </h2>

        <p className="text-slate-400 mt-3 line-clamp-3">
          {role.description}
        </p>

        <div className="flex justify-between mt-6 text-sm">

          <div className="flex items-center gap-2 text-cyan-400">
            <FaCode />
            {role.questions}+ Questions
          </div>

          <div className="flex items-center gap-2 text-purple-400">
            <FaYoutube />
            {role.videos} Videos
          </div>

        </div>

        <div className="flex items-center gap-2 text-green-400 mt-3">

          <FaClock />

          {role.duration}

        </div>

        <Link
          to={`/roles/${role.id}`}
          className="mt-8 flex justify-center items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl py-3 text-white font-semibold"
        >

          Explore

          <FaArrowRight />

        </Link>

      </div>

    </motion.div>
  );
};

export default RoleCard;