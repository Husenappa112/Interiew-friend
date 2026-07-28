import ChatMessage from "./ChatMessage";

const ChatWindow = ({ messages }) => {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 h-[550px] overflow-y-auto">

      {messages.length === 0 ? (

        <div className="flex items-center justify-center h-full text-gray-500">

          Start chatting with AI...

        </div>

      ) : (

        messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message}
          />
        ))

      )}

    </div>
  );
};

export default ChatWindow;