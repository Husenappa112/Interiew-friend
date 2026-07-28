const roadmap = [
  {
    title: "Frontend Developer",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js"
    ]
  },
  {
    title: "Backend Developer",
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "SQL",
      "REST APIs"
    ]
  },
  {
    title: "AI Engineer",
    skills: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "LLMs",
      "Vector Databases"
    ]
  }
];

const AIRoadmap = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-5xl font-bold">
        AI Career Roadmaps
      </h1>

      <div className="grid lg:grid-cols-3 gap-8 mt-10">

        {roadmap.map((item) => (

          <div
            key={item.title}
            className="bg-slate-900 rounded-3xl border border-slate-800 p-6"
          >

            <h2 className="text-2xl font-bold">

              {item.title}

            </h2>

            <ul className="mt-6 space-y-3">

              {item.skills.map((skill) => (

                <li
                  key={skill}
                  className="bg-slate-800 rounded-xl px-4 py-3"
                >
                  {skill}
                </li>

              ))}

            </ul>

          </div>

        ))}

      </div>

    </div>
  );
};

export default AIRoadmap;