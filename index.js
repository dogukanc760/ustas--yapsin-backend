const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

//api endpoint routes 
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const uploadImageRoute = require("./routes/uploadimage");
const categoryRoute = require("./routes/category");
const sectorRoute = require("./routes/sector");
const servicesectorRoute = require("./routes/servicesector");
const adressRoute = require("./routes/adress");
const serviceRoute = require("./routes/service");
const demandRoute = require("./routes/demand");
const sliderRoute = require("./routes/slider");
const questionRoute = require("./routes/question");
//app allow and json conf
dotenv.config();
app.use(cors());
  app.use(express.json());
  app.options('*', cors());

//mongodb connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connection successfully"))
  .catch((err) => {
    console.log(err);
  });
  
//test url
app.get("/", (req, res) => {
  try {
    res.status(200).json({message:"Api is working! Say hello"});
  } catch (error) {
    res.status(500).json({message: error})
  }
})

//add routes 
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/uploadImage", uploadImageRoute);
app.use("/api/category", categoryRoute);
app.use("/api/sector", sectorRoute);
app.use("/api/servicesector", servicesectorRoute);
app.use("/api/adressRoute", adressRoute);
app.use("/api/service", serviceRoute);
app.use("/api/demand", demandRoute);
app.use("/api/slider", sliderRoute);
app.use("/api/question", questionRoute);
//get images
app.use("/images", express.static(path.join(__dirname, "routes/images")));
//run at port
app.listen(process.env.PORT || 3000, () => {
    console.log("server running at "+ process.env.PORT);
  });