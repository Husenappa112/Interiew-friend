const PromptCard = ({ title, prompt, onClick }) => {
  return (
    <button
      onClick={() => onClick(prompt)}
      className="bg-slate-900 border border-slate-700 hover:border-cyan-500 rounded-2xl p-5 text-left transition-all duration-300 hover:-translate-y-1"
    >
      <h3 className="text-white font-semibold text-lg">
        {title}
      </h3>

      <p className="text-gray-400 mt-3 text-sm">
        {prompt}
      </p>
    </button>
  );
};

export default PromptCard;