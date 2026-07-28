import SkillCard from "../components/SkillCard";

const skills = [
  {
    title: "Frontend",
    current: 70,
    target: 100,
  },
  {
    title: "Backend",
    current: 45,
    target: 100,
  },
  {
    title: "DSA",
    current: 60,
    target: 100,
  },
  {
    title: "System Design",
    current: 20,
    target: 100,
  },
];

const AISkillGap = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-5xl font-bold">
        AI Skill Gap Analysis
      </h1>

      <div className="grid md:grid-cols-2 gap-8 mt-10">

        {skills.map((skill) => (
          <SkillCard
            key={skill.title}
            skill={skill}
          />
        ))}

      </div>

    </div>
  );
};

export default AISkillGap;