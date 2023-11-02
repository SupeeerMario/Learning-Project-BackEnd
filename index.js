const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
<<<<<<< HEAD
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
=======
const Getroute = require("./routes/user/get");
const submitroute = require("./routes/user/submit");
const imgSchema = require("./model/imgSchema");
const multer = require('multer');
const fs = require('fs');
const path = require('path');
>>>>>>> parent of 1f56da2 (bad)


<<<<<<< HEAD
app.use("/api/khaled", Getroute);
app.use("/api/khaled", submitroute );
=======
app.use(express.json());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });
>>>>>>> parent of 1f56da2 (bad)





<<<<<<< HEAD
app.listen(5000,()=>{
    console.log("Backend is running")
=======
app.use("/api/khaled", Getroute);
app.use("/api/khaled", submitroute);

app.listen(5000, () => {
    console.log("Backend is running");
>>>>>>> parent of 1f56da2 (bad)
});

