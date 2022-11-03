import Lista from "../models/producto";

export const listarTarea = async(req,res)=>{
    try {
      const listaTarea = await Lista.find()
      res.status(200).json(listaTarea)
    } catch (error) {
      res.status(404).json({
        mensaje:"no se pudo obtener la lista"
      })
    }
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


export const borrarTarea = async(req,res)=>{
  try {
     await Lista.findByIdAndDelete(req.params.id)
     res.status(200).json({
      mensaje:"la tarea se elimino correctamente"
     })
  } catch (error) {
    res.status(404).json({
      mensaje:"no se pudo borrar la tarea"
    })
  }
}