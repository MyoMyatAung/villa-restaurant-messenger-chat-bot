require("dotenv");
import express from "express";
import bodyParser from "body-parser";

import initWebRoutes from "./routes/web";
import configViewEngine from "./config/viewEngine";

const app = express();

// use body-parser to post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// config view engine
configViewEngine(app);

// init all web routes
initWebRoutes(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App is running on PORT: ${PORT}`);
})
