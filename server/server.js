import express from "express";
import cors from "cors";
import morgan from "morgan";
import connect from "./database/connection.js";
import router from './router/router.js'
const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');

const PORT = 3030;



//hhtp get reqest //
app.get("/",(req , res)=>{
   res.status(201).json("server is start")
})

// api router 

app.use('/api',router)

//******************* start server ******************** //
connect().then(()=> {
    try {
        app.listen( PORT , ()=>{
            console.log(`SERVER IS RUNNING AT http://localhost:${PORT}`);
        }) 
    } catch (error) {
        console.log('can not connect with server ');
    }
}).catch(error => {
    console.log(error);
})
