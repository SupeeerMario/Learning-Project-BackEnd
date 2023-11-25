const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Getroute = require("./routes/get");
const submitroute = require("./routes/submit");


mongoose.connect(
    process.env.MONGO_URL
    )
        .then(()=>
        console.log("DBConnected!"))
        .catch((err)=>{
            console.log(err);
        });


app.use("/api/khaled", Getroute);
app.use("/api/khaled", submitroute );





app.listen(5000,()=>{
    console.log("Backend is running")
});

