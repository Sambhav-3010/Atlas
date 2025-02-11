const express = require("express");
const groq = require("./chatGroq");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173","https://atlas-frontend-delta.vercel.app"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
require("dotenv").config();
app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/chatbot", groq);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});