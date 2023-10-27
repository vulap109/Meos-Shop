require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import configCors from "./configs/cors";
import initApiRoutes from "./routes/api";
import callConnection from "./configs/connectDB";

const app = express();
const PORT = process.env.PORT || 8081;

// CORS middleware
configCors(app);

// config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// config cookie parser
app.use(cookieParser());

// // connect to DB
// callConnection();

//init route API
initApiRoutes(app);

// handle page not found
app.use((req, res) => {
  return res.send("404 not found");
});

app.listen(PORT, () => {
  console.log(">>> app running on Port: ", PORT);
});
