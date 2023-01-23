const multer = require('multer');
const path = require('path')
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads');
  },
  filename: function(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const fileFilter = (req, file, cb) => {
   
  const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
  if (!allowedTypes.includes(file.mimetype)) {
    cb(new Error('Invalid file type. Only JPG, PNG, and PDF files are allowed.'), false);
  } else {
    cb(null, true);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter
});

const fileUploadMiddleware = (req, res, next) => {
    console.log(req.files)
  upload.array('data',2)(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    next();
  });
};

module.exports= {fileUploadMiddleware};