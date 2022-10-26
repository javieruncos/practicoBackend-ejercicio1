import mongoose from "mongoose";

const url = "mongodb://localhost:27017/lista-tarea";
mongoose.connect(url);

const conexion = mongoose.connection;

conexion.once('open',()=>{
  console.log("BD conectada")
})