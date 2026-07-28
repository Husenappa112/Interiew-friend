import {
  FaRobot,
  FaYoutube,
  FaFileAlt,
  FaChartLine,
  FaBrain,
  FaLaptopCode,
} from "react-icons/fa";

import FeatureCard from "./FeatureCard";

const Features = () => {

  const features = [

    {
      icon: <FaRobot />,
      title: "AI Mock Interview",
      description:
        "Practice interviews with an AI interviewer that asks real technical and HR questions."
    },

    {
      icon: <FaBrain />,
      title: "AI Career Advisor",
      description:
        "Ask career questions and receive personalized learning roadmaps and interview guidance."
    },

    {
      icon: <FaYoutube />,
      title: "Role-Based Videos",
      description:
        "Watch curated YouTube playlists for Frontend, Backend, Java, Cloud, AI, DevOps and more."
    },

    {
      icon: <FaFileAlt />,
      title: "Resume Analyzer",
      description:
        "Upload your resume and receive ATS score, improvements and missing skills."
    },

    {
      icon: <FaLaptopCode />,
      title: "Coding Practice",
      description:
        "Solve coding questions and prepare for DSA interviews from beginner to advanced."
    },

    {
      icon: <FaChartLine />,
      title: "Progress Tracking",
      description:
        "Monitor interview scores, completed questions and daily preparation streaks."
    }

  ];

  return (

    <section className="py-24 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-bold text-white">

          Everything You Need

        </h2>

        <p className="text-center text-slate-400 mt-5 max-w-3xl mx-auto">

          One platform to learn, practice, improve and crack technical interviews with AI assistance.

        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((feature, index) => (

            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />

          ))}

        </div>

      </div>

    </section>

  );
};

export default Features;