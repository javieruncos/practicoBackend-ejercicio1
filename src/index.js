import  Express  from "express";
import cors from "cors"
import morgan from "morgan";
import path from "path"

import './database'

const app = Express();

app.set("port",process.env.PORT || 4002)
app.listen(app.get("port"),()=>{
    console.log("estoy en el puerto" + app.get("port"))
})


app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({extended:true}))
app.use(morgan("dev"))
app.use(Express.static(path.join(__dirname,"../public")))