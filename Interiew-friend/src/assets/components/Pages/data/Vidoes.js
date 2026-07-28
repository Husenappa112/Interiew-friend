import { FaYoutube } from "react-icons/fa";

function VideoCard({ video }) {

  return (

    <div className="bg-slate-800 rounded-xl p-5">

      <FaYoutube className="text-red-500 text-4xl" />

      <h2 className="text-white mt-4">

        {video.title}

      </h2>

      <p className="text-gray-400 mt-2">

        {video.channel}

      </p>

      <button className="mt-4 bg-red-600 px-5 py-2 rounded">

        Watch

      </button>

    </div>

  );

}

export default VideoCard;