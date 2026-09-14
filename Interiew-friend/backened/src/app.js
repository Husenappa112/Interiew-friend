const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const contentRoutes = require("./routes/contentRoutes");
const chatRoutes = require("./routes/chatRoutes");
const errorMiddleware = require("./middlewares/errorMiddleware");

const app = express();

// Middleware
app.use(cors());
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