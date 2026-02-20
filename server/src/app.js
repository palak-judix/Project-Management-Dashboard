const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

const projectRoutes = require("./routes/projectRoutes");
const healthRoutes = require("./routes/healthroutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(helmet());
app.use(express.json());
app.use(cookieParser());

app.use("/health", healthRoutes);
app.use("/api", authRoutes);
app.use("/api", projectRoutes);

module.exports = app;
