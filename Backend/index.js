const express = require("express");
require("dotenv").config();
const app = express();
const PORT = 8000;
const dbConnect = require("./db");
var cors = require("cors");
const path = require("path");
const fs = require("fs");
const multer = require("multer");

app.use(cors()); //using cors

//for database connection
dbConnect()
  .then(() => {
    app.listen(
      (PORT || 8000,
      () => {
        console.log("Server is running on port ", PORT);
      })
    );
  })
  .catch((err) => {
    console.log("Mongo db connection failed", err);
  });

const ensureUploadsDirectoryExists = () => {
  const dir = path.join(__dirname, "uploads");
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};



//for file uploads
// Call this to create the directory if it doesn't exist
ensureUploadsDirectoryExists();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    ensureUploadsDirectoryExists(); // Ensure the directory exists before saving the file
    cb(null, path.join(__dirname, "uploads")); // Use absolute path
  },
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname);
    const uniqueSuffix =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + ext;
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

// Serve static files from the 'uploads' directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Route to handle file uploads
app.post("/upload", upload.single("file"), (req, res) => {
  res.send({ filePath: `/uploads/${req.file.filename}` });
});

// Middleware for parsing JSON
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("Hello, Node.js Backend!");
});
// for authorization basic routes/middleware
app.use("/api/auth", require("./Route/auth.js"));

app.use(
  "/api/product",
  upload.array("myfile"),
  require("./Route/productRoute.js")
);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
