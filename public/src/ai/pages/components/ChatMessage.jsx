const ChatMessage = ({ message }) => {
  const isUser = message.sender === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      } mb-5`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-5 py-3 ${
          isUser
            ? "bg-cyan-600 text-white"
            : "bg-slate-800 text-gray-200"
        }`}
      >
        <p className="whitespace-pre-wrap">{message.text}</p>

        <span className="block text-xs mt-2 opacity-70">
          {message.time}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;