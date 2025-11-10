const express = require("express");
const app = express();
const port = 3000;

// Simple middleware for logging
app.use((req, res, next) => {
  console.log(`[INFO] Request received: ${req.method} ${req.url}`);
  next();
});

// Root route
app.get("/", (req, res) => {
  res.send("Hello from DevSecOps Demo App 🚀");
});

// Health check route
app.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
