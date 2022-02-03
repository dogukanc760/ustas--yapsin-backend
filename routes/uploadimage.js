const router = require("express").Router();
const multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './routes/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
 
var upload = multer({ storage: storage })

// For Single image upload
router.post('/', upload.single('myFile'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send(file)
  
});



router.get('/get-image/:name', (req, res, next) => {
  var filename = req.params.name;
  console.log(filename)
  
  
    res.set({'Content-Type': 'image/jpg'});
    res.contentType('image/png');
    res.contentType('image/jpg');
    res.sendFile(__dirname+'/images/'+req.params.name);
  
  

});

module.exports = router;