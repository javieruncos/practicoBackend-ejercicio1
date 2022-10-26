import { Router } from "express";

const router = Router();

router.route("/prueba").get((req,res)=>{
         res.send("esta es una prueba get")
     })

// app.get("/prueba",(req,res)=>{
//     res.send("esta es una prueba get")
// })

export default router;