import Lista from "../models/producto";

export const listarTarea = (req,res)=>{
  res.send(" prueba de get")
}


export const crearTarea = async(req,res)=>{
  try{
    console.log(req.body)
    const nuevaTarea = new Lista(req.body)
    await nuevaTarea.save();
    res.status(201).json({
        mensaje:"tarea agregada"
    })
  }catch(error){
    console.log(error)
    res.status(404).json({
        mensaje:"ocurrio un error al cargar la tarea"
    })
  }
}