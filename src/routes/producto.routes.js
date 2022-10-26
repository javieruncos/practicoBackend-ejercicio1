import { Router } from "express";
import { crearTarea, listarTarea } from "../controllers/productos.controllers";

const router = Router();

router.route("/prueba").get(listarTarea).post(crearTarea)

// app.get("/prueba",(req,res)=>{
//     res.send("esta es una prueba get")
// })

export default router;