const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;
app.use(cors());

app.get("/", (req, res) => {
  res.send("That was served from the backend server! that means that HaProxy is working ");
});
app.get("/flatTeamPortal", (req, res) => {
  res.status(200).send("flatTeamPortal" + req.socket.localAddress);
});
app.get("/hapinessAndEntertainement", (req, res) => {
  res.send("hapinessAndEntertainement");
});
app.get("/businessParteners", (req, res) => {
  res.send("businessParteners");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
