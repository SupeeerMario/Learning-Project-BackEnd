const router = require("express").Router();

router .get("/get" , (req,res)=>{
    res.send("Get is successfull");
});

module.exports = router