import { useState } from "react";
import { FaPaperPlane, FaRobot, FaTimes } from "react-icons/fa";

const API = import.meta.env.VITE_API_URL || "http://localhost:5001/api";

const AIChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { role: "model", text: "Hello! I am your Gemma career advisor. Ask me anything about interviews." },
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (event) => {
    event.preventDefault();
    const text = message.trim();
    if (!text || loading) return;

    setMessage("");
    setMessages((items) => [...items, { role: "user", text }]);
    setLoading(true);
    try {
      const response = await fetch(`${API}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Chat request failed");
      setMessages((items) => [...items, { role: "model", text: data.reply }]);
    } catch (error) {
      setMessages((items) => [...items, { role: "model", text: error.message }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 shadow-[0_0_35px_rgba(34,211,238,.5)] text-white text-2xl flex items-center justify-center hover:scale-110 transition"
      >
        {open ? <FaTimes /> : <FaRobot />}
      </button>

      {open && (
        <div className="fixed bottom-28 right-8 w-[380px] h-[550px] bg-slate-950 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden z-50">
          <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-5">
            <div className="flex items-center gap-3">
              <FaRobot className="text-3xl text-white" />
              <div>
              <div><h2 className="text-white font-bold text-lg">Gemma AI Advisor</h2><p className="text-white/80 text-sm">Ask anything about interviews</p></div>
            </div>
          </div>
          <div className="h-[380px] overflow-y-auto p-5 space-y-4">
            {messages.map((item, index) => <div key={index} className={`rounded-xl p-4 ${item.role === "user" ? "bg-cyan-500/20 text-cyan-300" : "bg-slate-900 text-white"}`}><p>{item.text}</p></div>)}
            {loading && <div className="bg-slate-900 rounded-xl p-4 text-slate-400">Gemma is thinking...</div>}
          </div>
          <form onSubmit={sendMessage} className="absolute bottom-0 w-full border-t border-slate-800 bg-slate-950 p-4 flex gap-3">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask AI..."
                className="flex-1 bg-slate-900 rounded-xl px-4 py-3 text-white outline-none border border-slate-700"
              />

              <button type="submit" disabled={loading} className="w-14 rounded-xl bg-cyan-500 flex items-center justify-center text-white disabled:opacity-50"><FaPaperPlane /></button>
          </form>
        </div>
      )}

    </>
  );
};

export default AIChatWidget;