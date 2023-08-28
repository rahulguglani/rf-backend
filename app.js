// importing necessary libraries
const express = require('express');
const multer = require('multer');

// using express for backend 
const app = express();
const PORT = 3000;

// Using Multer library for storage of files 
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


// Seting up CORS for allowing Communication from cross origin
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Main API for handling the file upload and returning , file info as response
app.post('/upload', upload.single('file'), (req, res) => {
  const recFile = req.file;

  //if unable to access file return error
  if (!recFile) {
    return res.status(400).send('No file uploaded.');
  }
  
  // if there are error related to file processing
  if (recFile.truncated) {
    return res.status(400).json({ error: 'File size exceeds limit.' });
  }

  // if there are error related to file upload with multer
  if (recFile instanceof multer.MulterError) {
    return res.status(400).json({ error: recFile.message });
  }

  // storing information of the file to return
  const details = {
    originalName: recFile.originalname,
    size: recFile.size,
    mimeType: recFile.mimetype
  };

  res.status(200).json({ message: 'File uploaded successfully.', details });
});

// an get api just to check at root if the api is working or not
app.get('/', (req, res) => {
  res.send('Welcome to backend --submited by : rahul guglani');
});

// an api for returning sample api
app.get('/info', (req, res) => {
  const myInfo = {
    name: 'Rahul Guglani',
    email: 'rahulguglani75000@gmail.com',
    github: 'https://github.com/rahulguglani',
    rollno: '20103116',
    phoneno: '9548408715'
  };
  res.json(myInfo);
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${PORT}`);
});
