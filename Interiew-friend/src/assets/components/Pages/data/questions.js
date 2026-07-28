import { FaCheckCircle } from "react-icons/fa";

function QuestionCard({ question }) {
  return (
    <div className="bg-slate-800 p-5 rounded-xl flex items-center gap-4 hover:bg-slate-700 transition">
      <FaCheckCircle className="text-green-400 text-xl" />

      <p className="text-white">{question}</p>
    </div>
  );
}

export default QuestionCard;