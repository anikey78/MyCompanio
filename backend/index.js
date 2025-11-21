// backend/index.js

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
require("dotenv").config();

// node-fetch dynamic import
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();
const PORT = process.env.PORT || 5000;

// ---------- Middlewares ----------
app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*",
    credentials: true,
  })
);
app.use(express.json({ limit: "1mb" }));
app.use(cookieParser());

// ---------- Database Connection ----------
if (!process.env.MONGO_URI) {
  console.warn("⚠️ MONGO_URI not set. Auth routes will fail without a database.");
} else {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));
}

// ---------- Health Check ----------
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "mycompanio-backend" });
});

// ---------- Auth Routes ----------
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// ---------- Chat Route (Gemini) ----------
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body || {};
    if (!message) {
      return res.status(400).json({ error: "message required" });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "GEMINI_API_KEY not set" });
    }

    const url =
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" +
      apiKey;

    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: message }] }],
      }),
    });

    const text = await resp.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = null;
    }

    console.log("Gemini status:", resp.status);
    console.log("Gemini body (raw):", text);

    if (!resp.ok) {
      return res
        .status(502)
        .json({ error: "Gemini API error", details: text });
    }

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No reply from Gemini.";
    res.json({ reply });
  } catch (err) {
    console.error("Server error in /api/chat:", err);
    res.status(500).json({ error: "internal_server_error" });
  }
});

// ---------- Start Server ----------
app.listen(PORT, () => {
  console.log(`✅ MyCompanio backend running on port ${PORT}`);
});

module.exports = app;
