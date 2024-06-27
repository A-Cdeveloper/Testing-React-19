const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

// Create the connection to database
const dbConfig = {
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_DB,
};

module.exports = dbConfig;
