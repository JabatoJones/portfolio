const multer = require('multer');
 
var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './src/assets/img')
		//src/assets/img
		//dist\App\assets\img
		//back-end/uploads
	},
	filename: (req, file, cb) => {
	  cb(null, file.originalname)
	}
});
 
var upload = multer({storage: storage});
 
module.exports = upload;