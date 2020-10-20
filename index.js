// importing express from the modules
const express = require("express");
const path = require("path");
const members = require("./Members");

// initializing express app
const app = express();

// Serving a static page to the server
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

const logger = (req, res, next) => {
  console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}`);
  next();
};

app.use(logger);

app.get("/api/members", (req, res) => res.json(members));

// setting a static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
