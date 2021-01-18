const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 7894;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//connect mongodb
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pw", {
  useNewUrlParser: true,
  useFindAndModify: false
  }
);

// routes
app.use(require("./routes/apiRoutes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});


