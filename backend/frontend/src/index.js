// backend/index.js

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// ---------- Middlewares ----------
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// ---------- MongoDB Connection ----------
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// ---------- Routes ----------
app.get("/", (req, res) => {
  res.send("MyCompanio backend is running 🚀");
});

// Auth route enable here:
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// ---------- Start Server ----------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
