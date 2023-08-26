const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Set up Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Serve static files from the "uploads" directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Set up CORS to allow requests from any origin
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Route to handle file uploads
app.post('/upload', upload.single('file'), (req, res) => {
  const uploadedFile = req.file;

  if (!uploadedFile) {
    return res.status(400).send('No file uploaded.');
  }

  const fileInfo = {
    originalName: uploadedFile.originalname,
    size: uploadedFile.size,
    mimeType: uploadedFile.mimetype,
    filePath: uploadedFile.path
  };

  res.json({ message: 'File uploaded successfully.', fileInfo });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
