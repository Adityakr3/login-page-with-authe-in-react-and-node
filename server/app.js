require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3030;



//MIDDLEWARE
app.use(express.json());
app.use(cors());

app.get("/",(req , res)=>{
   res.status(200).json("server is start")
})

app.listen( PORT , ()=>{
    console.log(`SERVER IS RUNNING AT PORT ${PORT}`);
})