import { Router } from "express";
import { borrarTarea, crearTarea, listarTarea } from "../controllers/productos.controllers";


const router = Router();

router.route("/prueba").get(listarTarea).post(crearTarea)
router.route("/prueba/:id").delete(borrarTarea)

// app.get("/prueba",(req,res)=>{
//     res.send("esta es una prueba get")
// })

export default router;