import { FaYoutube, FaPlay, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

const VideoCard = ({ video }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-red-500"
    >
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">

        <div className="flex justify-between items-center mb-4">

          <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm flex items-center gap-2">
            <FaYoutube />
            YouTube
          </span>

          <span className="text-slate-400 flex items-center gap-2">
            <FaClock />
            {video.duration}
          </span>

        </div>

        <h2 className="text-white text-xl font-semibold">
          {video.title}
        </h2>

        <p className="text-slate-400 mt-3 line-clamp-2">
          {video.description}
        </p>

        <a
          href={video.link}
          target="_blank"
          rel="noreferrer"
          className="mt-6 flex justify-center items-center gap-3 bg-red-600 py-3 rounded-xl text-white font-semibold hover:bg-red-500 transition"
        >
          <FaPlay />
          Watch Video
        </a>

      </div>
    </motion.div>
  );
};

export default VideoCard;