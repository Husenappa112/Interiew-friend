import { useState } from "react";
import ChatWindow from "../components/ChatWindow";
import PromptCard from "../components/PromptCard";

const prompts = [
  {
    title: "Career Advice",
    prompt: "Suggest the best roadmap for becoming a Software Engineer."
  },
  {
    title: "Interview",
    prompt: "Start a Java backend interview."
  },
  {
    title: "Resume",
    prompt: "Review my resume and suggest improvements."
  },
  {
    title: "Skills",
    prompt: "What skills should I learn for AI Engineering?"
  }
];

const AIAdvisor = () => {
  const [messages, setMessages] = useState([]);

  const handlePrompt = (prompt) => {
    const newMessage = {
      sender: "user",
      text: prompt,
      time: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-5xl font-bold">
        AI Career Advisor
      </h1>

      <p className="text-gray-400 mt-4">
        Ask AI anything about careers, interviews and learning.
      </p>

      <div className="grid lg:grid-cols-4 gap-8 mt-10">

        <div className="space-y-4">

          {prompts.map((item) => (
            <PromptCard
              key={item.title}
              title={item.title}
              prompt={item.prompt}
              onClick={handlePrompt}
            />
          ))}

        </div>

        <div className="lg:col-span-3">

          <ChatWindow messages={messages} />

        </div>

      </div>

    </div>
  );
};

export default AIAdvisor;