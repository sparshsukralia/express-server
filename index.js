// importing express from the modules
const express = require("express");
const path = require("path");
const members = require("./Members");
const logger = require("./middleware/logger");

// initializing express app
const app = express();

// Serving a static page to the server
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// Init middleware
// app.use(logger);

// get all members
app.get("/api/members", (req, res) => res.json(members));

// get single member
app.get("/api/members/:id", (req, res) => {
  res.json(members.filter((member) => member.id === parseInt(req.params.id)));
});

// setting a static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
