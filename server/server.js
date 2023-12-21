require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan")


//MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by')

const PORT = 3030;

app.get("/",(req , res)=>{
   res.status(200).json("server is start")
})
//******************* start server ******************** //
app.listen( PORT , ()=>{
    console.log(`SERVER IS RUNNING AT http://localhost:${PORT}`);
})