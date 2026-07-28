import { useState } from "react";

const ChatInput = ({ onSend, loading = false }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);
    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="flex gap-3 mt-6">
      <input
        type="text"
        value={message}
        placeholder="Ask AI anything..."
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white outline-none focus:border-cyan-500"
      />

      <button
        onClick={handleSend}
        disabled={loading}
        className="px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 disabled:bg-slate-700"
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </div>
  );
};

export default ChatInput;