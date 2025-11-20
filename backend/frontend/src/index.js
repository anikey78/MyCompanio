// backend/index.js

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Example route to test
app.get("/", (req, res) => {
  res.send("MyCompanio backend is running 🚀");
});

// You can add your AI routes here
// const aiRouter = require("./routes/ai");
// app.use("/api/ai", aiRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
