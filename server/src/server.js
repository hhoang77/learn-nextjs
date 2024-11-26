import express from "express";

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World!!!!!!!!!222222");
});
app.listen(3009, function () {
  console.log("Example app listening on port 3000!");
});
