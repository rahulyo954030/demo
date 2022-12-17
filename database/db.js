import mongoose  from "mongoose"

export default  mongoose.connect("mongodb+srv://rahulsingh:rahulsingh@cluster0.x4uxcfi.mongodb.net/mock?retryWrites=true&w=majority")

mongoose.connection.on("connected",()=>{
    console.log("connected to database successfully,");
})

mongoose.connection.on("error",(err)=>{
    console.log("Error while connection to database:" + err );
})

mongoose.connection.on("disconnected",(err)=>{
    console.log("Mongodb connection disconnected");
})