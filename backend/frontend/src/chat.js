import React, { useState } from "react";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!message.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      setReply(data.reply || data.details || "No reply received.");
    } catch (err) {
      setReply("Error: " + (err.message || err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ minHeight: "100vh", padding: 24, background: "#071017", color: "#eafaf6", fontFamily: "Inter, system-ui, sans-serif" }}>
      <header style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <img src="/logo.png" alt="MyCompanio" style={{ height: 48 }} />
        <h1 style={{ margin: 0 }}>MyCompanio</h1>
        <div style={{ marginLeft: "auto" }}>
          <button id="theme-toggle" onClick={() => {
            const html = document.documentElement;
            const cur = html.getAttribute("data-theme") || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark":"light");
            const next = cur === "dark" ? "light" : "dark";
            html.setAttribute("data-theme", next);
            localStorage.setItem("mycomp-theme", next);
          }} style={{ padding: "8px 10px", borderRadius: 8, border: "none", cursor: "pointer" }}>
            Toggle theme
          </button>
        </div>
      </header>

      <main style={{ maxWidth: 900, margin: "20px auto", background: "var(--card)", padding: 20, borderRadius: 12 }}>
        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Type your message..."
          rows={5}
          style={{ width: "100%", padding: 12, borderRadius: 8, border: "1px solid rgba(255,255,255,0.06)", resize: "vertical" }}
        />
        <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
          <button onClick={sendMessage} disabled={loading} style={{ padding: "10px 16px", borderRadius: 10, border: "none", background: "linear-gradient(90deg,#33d4c7,#89f3b7)", color: "#002", fontWeight: 700 }}>
            {loading ? "Thinking..." : "Send"}
          </button>
          <button onClick={() => { setMessage(""); setReply(""); }} style={{ padding: "10px 12px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)", background: "transparent", color: "var(--text)" }}>
            Clear
          </button>
        </div>

        <section style={{ marginTop: 20 }}>
          <h3>Assistant</h3>
          <div style={{ whiteSpace: "pre-wrap", background: "rgba(0,0,0,0.15)", padding: 12, borderRadius: 8 }}>
            {reply || <i>No response yet.</i>}
          </div>
        </section>
      </main>
    </div>
  );
}
