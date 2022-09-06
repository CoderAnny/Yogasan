
const express = require("express");
const app = express();
const cors = require("cors");
const conn = require("./db");
const PORT = 5500;

conn.connection.on("connected",(err)=>{

    if(!err)
    {
        console.log("Database connected sucessfully!");
    }
    else
    {
        console.log("Something Went Wrong");
    }

})


app.use(cors());
app.use(express.json());
app.use("/myapp",require("./routes/user"));


app.listen(PORT,()=>{
    console.log("Server is Started....");
})