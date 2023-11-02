const router = require("express").Router();
const image = require("../model/imgSchema")


app.get('/getimg', (req, res) => {
    imgSchema.find({})
        .then((data) => {
            res.render('imagepage', { item: data });
        })
        .catch((err) => {
            console.log(err);
        });
});


module.exports = router