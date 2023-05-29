require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", routes);

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});



app.listen(process.env.PORT, () => {
  console.log(`Server Started at ${process.env.PORT}`);
});
