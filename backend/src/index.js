const express = require ("express")
const cors = require("cors")

const app = express()
app.use(cors())
const port=process.env.PORT || 3000
app.use(express.json())

const connect=require("./configs/db")

const empolyeeController=require("./controllers/employee.controller")
app.use("/employee",empolyeeController)


app.listen(port,async function (req,res){
    try{
        await connect();
        console.log ("Listening Port 3000")
    }catch(err){
        console.log(err.message)
    }
})