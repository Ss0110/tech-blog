const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3001;

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("home", { layout: "main" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
