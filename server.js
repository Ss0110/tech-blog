// Import necessary dependencies
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

// Configure the port
const PORT = process.env.PORT || 3001;

// Create an instance of the Express.js app
const app = express();

// Configure middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Configure session middleware
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

// Configure templating engine
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Set up route handlers
app.use("/", require("./routes/homeRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/posts", require("./routes/postRoutes"));
app.use("/api/comments", require("./routes/commentRoutes"));

// Sync the database and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
