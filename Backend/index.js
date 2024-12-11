const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8000;
const dbConnect = require("./db");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const authenticateUser = require("./Middleware/authenticateUser.js");

app.use(cors()); // Enable CORS

// Middleware for parsing JSON
app.use(express.json());

// Database connection
dbConnect()
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
  });

// Ensure uploads directory exists
const ensureUploadsDirectoryExists = () => {
  const dir = path.join(__dirname, "uploads");
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Configure Multer for file uploads
ensureUploadsDirectoryExists();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    ensureUploadsDirectoryExists();
    cb(null, path.join(__dirname, "uploads"));
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9) + ext;
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage });

// Serve static files from the 'uploads' directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Basic route
app.get("/", (req, res) => {
  res.send("Hello, Node.js Backend!");
});

// Authorization routes
app.use("/api/auth", require("./Route/auth.js"));

// Product routes
app.use("/api/product", require("./Route/productRoute.js"));

//category routes
app.use("/api/category", require("./Route/categoryRoute.js"));

// Upload endpoint for single file upload
app.post("/upload",authenticateUser, upload.single("file"), (req, res) => {
  res.send({ filePath: `/uploads/${req.file.filename}` });
});
