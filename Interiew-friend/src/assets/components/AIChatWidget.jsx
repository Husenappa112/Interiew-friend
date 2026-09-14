import { useState } from "react";

const API = import.meta.env.VITE_API_URL || "http://localhost:5001/api";

export default function AIChatWidget() {
	const [open, setOpen] = useState(false);
	const [input, setInput] = useState("");
	const [loading, setLoading] = useState(false);
	const [messages, setMessages] = useState([
		{ role: "model", text: "Hello! I am your Gemma career advisor. Ask me anything about interviews." },
	]);

	async function send(event) {
		event.preventDefault();
		const text = input.trim();
		if (!text || loading) return;
		setInput("");
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
	}

	return <>
		<button className="gemma-launcher" onClick={() => setOpen(!open)}>{open ? "Close" : "Ask Gemma"}</button>
		{open && <section className="chat-widget glass-card">
			<header className="chat-header"><strong>Gemma AI Advisor</strong><button onClick={() => setOpen(false)} aria-label="Close chat">X</button></header>
			<div className="chat-messages">
				{messages.map((item, index) => <p className={`chat-message ${item.role}`} key={index}>{item.text}</p>)}
				{loading && <p className="chat-message model">Gemma is thinking...</p>}
			</div>
			<form onSubmit={send}><input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask about interviews..." /><button disabled={loading}>Send</button></form>
		</section>}
	</>;
}
