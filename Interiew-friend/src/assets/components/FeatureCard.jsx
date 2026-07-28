function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition">

      <div className="text-5xl text-blue-400">

        {icon}

      </div>

      <h2 className="text-2xl font-bold mt-5">

        {title}

      </h2>

      <p className="text-gray-300 mt-3">

        {description}

      </p>

    </div>
  );
}

export default FeatureCard;