const mongoose = require ("mongoose")

module.exports= ()=>{
        return mongoose.connect("mongodb+srv://mubarak:mubarak_123@cluster0.pvaka.mongodb.net/digital_employees?retryWrites=true&w=majority")
}
   
