const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const dbConfig = require("./db/connection");

const app = express();
app.use(cors());
app.use(express.json());

const messageRouter = require("./routes/messageRoutes");

// Middleware to establish a database connection
app.use(async (req, res, next) => {
  try {
    req.db = await mysql.createConnection(dbConfig);
    await req.db.connect();
    next();
  } catch (err) {
    console.error("Error connecting to the database:", err);
    res.status(500).json({
      status: "Database connection failed",
    });
  }
});

app.use("/messages", messageRouter);

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "failed",
    message: `Wrong route: ${req.originalUrl}!`,
  });
  next();
});

module.exports = app;
