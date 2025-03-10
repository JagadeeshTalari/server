const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: ["https://client-steel-gamma.vercel.app/api"],
  })
);

app.get("/", (req, res) => {
  res.send("Hi Now you are seeing home page on server side");
});

app.get("/api/auth", (req, res) => {
  res.send("Now this is auth route");
});

app.listen(4000, () => {
  console.log(`Server is listening on port 4000`);
});

module.exports = app;
