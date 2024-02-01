const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectToMongo = require("./db");
const userRoutes = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();
const port =  process.env.PORT || 5005;






// MIDDLEWARES
connectToMongo();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
app.use(
  helmet.crossOriginResourcePolicy({
    policy: "cross-origin",
  })
);




// ----------------------------------Define a custom morgan format ----------------------------------------
morgan.token("color-status", (req, res) => {
  const status = res.statusCode;
  let color;
  if (status >= 500) {
    color = "\x1b[31m";
  } else if (status >= 400) {
    color = "\x1b[33m";
  } else if (status >= 300) {
    color = "\x1b[36m";
  } else {
    color = "\x1b[32m";
  }
  return color + status + "\x1b[0m";
});

const customFormat = ":method :url :color-status :response-time ms";


app.use(morgan(customFormat));


app.use(cors());




// Routes Middleware
app.use("/user" , userRoutes)

// O5sjrqzt4ioURKou




// ROUTES
app.get("/", (req, res) => {
  res.send("Home Page");
});
app.listen(port, () => {
  console.log("Server Started on", port);
});
