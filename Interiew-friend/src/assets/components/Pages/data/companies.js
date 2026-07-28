function SkillCard({ skill }) {
  return (
    <div className="bg-blue-600 text-white rounded-lg px-5 py-3 text-center font-semibold hover:bg-blue-700 transition">
      {skill}
    </div>
  );
}

export default SkillCard;