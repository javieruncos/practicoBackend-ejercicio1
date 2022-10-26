import mongoose , {Schema} from "mongoose";

const productoSchema = new Schema({
    nombreTarea:{
        type:String,
        required:true
    }
})


const Lista = mongoose.model("tarea",productoSchema);


export default Lista;