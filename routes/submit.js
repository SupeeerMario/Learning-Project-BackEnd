const router = require("express").Router();

router .get("/submit" , (req,res)=>{
    res.send("Submit is successfull");
});

router.post("khaledpost" , (req,res)=>{
   const name = req.body.name;
   console.log(name); 
});

module.exports = router