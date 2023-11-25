const router = require("express").Router();
const image = require("../model/imgSchema")


app.post('/postimg', upload.single('image'), (req, res, next) => {
    const obj = {
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join(__dirname, '/uploads/', req.file.filename)),
            contentType: 'image/png'
        }
    };

    imgSchema.create(obj)
        .then((item) => {
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        });
});


module.exports = router