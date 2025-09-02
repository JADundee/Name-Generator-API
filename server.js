const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();
const PORT = 3001;

// ✅ enable CORS for local frontend
app.use(cors({
  origin: "http://127.0.0.1:5501" // adjust to match your dev frontend
}));

app.get("/api/token", (req, res) => {
  const token = process.env.BLIZZ_ACCESS_TOKEN;
  if (!token) {
    return res.status(500).json({ error: "No token found in .env" });
  }
  res.json({ token });
});

app.listen(PORT, () =>
  console.log(`✅ Token server running at http://localhost:${PORT}`)
);
