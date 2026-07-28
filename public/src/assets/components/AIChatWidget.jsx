import { useState } from "react";
import {
  FaRobot,
  FaPaperPlane,
  FaTimes,
} from "react-icons/fa";

const AIChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <>

      {/* Floating Button */}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 shadow-[0_0_35px_rgba(34,211,238,.5)] text-white text-2xl flex items-center justify-center hover:scale-110 transition"
      >
        {open ? <FaTimes /> : <FaRobot />}
      </button>

      {/* Chat Window */}

      {open && (
        <div className="fixed bottom-28 right-8 w-[380px] h-[550px] bg-slate-950 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden z-50">

          {/* Header */}

          <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-5">

            <div className="flex items-center gap-3">

              <FaRobot className="text-3xl text-white" />

              <div>

                <h2 className="text-white font-bold text-lg">

                  M AI Advisor

                </h2>

                <p className="text-white/80 text-sm">

                  Ask anything about interviews

                </p>

              </div>

            </div>

          </div>

          {/* Messages */}

          <div className="h-[380px] overflow-y-auto p-5 space-y-4">

            <div className="bg-slate-900 rounded-xl p-4">

              <p className="text-white">

                👋 Hello! I'm your AI Career Advisor.

              </p>

            </div>

            <div className="bg-cyan-500/20 rounded-xl p-4">

              <p className="text-cyan-300">

                Try asking...

              </p>

              <ul className="mt-3 space-y-2 text-slate-300 text-sm">

                <li>• Prepare for Google Interview</li>

                <li>• React Roadmap</li>

                <li>• Java DSA Questions</li>

                <li>• Resume Review</li>

                <li>• HR Interview Tips</li>

              </ul>

            </div>

          </div>

          {/* Input */}

          <div className="absolute bottom-0 w-full border-t border-slate-800 bg-slate-950 p-4">

            <div className="flex gap-3">

              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask AI..."
                className="flex-1 bg-slate-900 rounded-xl px-4 py-3 text-white outline-none border border-slate-700"
              />

              <button className="w-14 rounded-xl bg-cyan-500 flex items-center justify-center text-white">

                <FaPaperPlane />

              </button>

            </div>

          </div>

        </div>
      )}

    </>
  );
};

export default AIChatWidget;