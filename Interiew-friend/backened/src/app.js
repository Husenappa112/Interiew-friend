const express = require("express");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const contentRoutes = require("./routes/contentRoutes");
const chatRoutes = require("./routes/chatRoutes");
const errorMiddleware = require("./middlewares/errorMiddleware");

const app = express();

// Middleware
// Keep the API usable from the Vite app and a separately deployed frontend
// without requiring a browser extension or an undeclared npm dependency.
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin) res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Interview Friend API is running...",
  });
});

app.get("/health", (req, res) => res.json({ ok: true, service: "interview-friend-api" }));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/content", contentRoutes);
app.use("/api/chat", chatRoutes);

// Handle Unknown Routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Global Error Handler (Always Last)
app.use(errorMiddleware);

module.exports = app;
