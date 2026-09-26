import { useState } from "react";
import { apiRequest } from "../../service/api";


export default function AIChatWidget() {
	const [open, setOpen] = useState(false);
	const [input, setInput] = useState("");
	const [loading, setLoading] = useState(false);
	const [messages, setMessages] = useState([
		{ role: "model", text: "Hello! I am Interview Friend AI. Ask about programming, projects, interviews, careers, or a concept you want explained." },
	]);

	async function send(event) {
		event.preventDefault();
		const text = input.trim();
		if (!text || loading) return;
		setInput("");
		setMessages((items) => [...items, { role: "user", text }]);
		setLoading(true);
		try {
			const data = await apiRequest("/chat/converse", {
				method: "POST",
				body: JSON.stringify({ message: text }),
			});
			setMessages((items) => [...items, { role: "model", text: data.reply }]);
		} catch (error) {
			setMessages((items) => [...items, { role: "model", text: error.message || "AI is unavailable. Check the AI setup guide and backend status." }]);
		} finally {
			setLoading(false);
		}
	}

	return <>
		<button className="gemma-launcher" onClick={() => setOpen(!open)}>{open ? "Close" : "Ask AI"}</button>
		{open && <section className="chat-widget glass-card">
			<header className="chat-header"><strong>Interview Friend AI</strong><button onClick={() => setOpen(false)} aria-label="Close chat">X</button></header>
			<div className="chat-messages">
				{messages.map((item, index) => <p className={`chat-message ${item.role}`} key={index}>{item.text}</p>)}
				{loading && <p className="chat-message model">AI is thinking...</p>}
			</div>
			<form onSubmit={send}><input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask about interviews..." /><button disabled={loading}>Send</button></form>
		</section>}
	</>;
}
