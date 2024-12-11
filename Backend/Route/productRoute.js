const express = require('express');
const Product = require('../Model/Product.model');
const authenticateUser = require('../Middleware/authenticateUser');
const multer = require('multer');
const path = require('path');

const router = express.Router();

// Configure Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '../uploads');
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });


router.post('/addproductbyadmin',upload.single('myfile'),async (req, res) => {
  try {
    const { title, description, price, instock } = req.body;

    // Validation
    if (!title || title.length < 3) {
      return res.status(400).json({ error: 'Title must be at least 3 characters long' });
    }
    if (!description || description.length < 5) {
      return res.status(400).json({ error: 'Description must be at least 5 characters long' });
    }
    if (!price || price <= 0) {
      return res.status(400).json({ error: 'Price must be a positive number' });
    }
    if (!instock || instock <= 0) {
      return res.status(400).json({ error: 'In-stock quantity must be a positive integer' });
    }

    // Save product to DB
    const product = new Product({
      title,
      description,
      price,
      instock,
      images: req.file ? [req.file.filename] : [],
    });

    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error('Error adding product:', error.message);
    res.status(500).send('Internal server error');
  }
} )


// Add product route
router.post('/addproduct', authenticateUser, upload.single('myfile'), async (req, res) => {
  try {
    const { title, description, price, instock } = req.body;

    // Validation
    if (!title || title.length < 3) {
      return res.status(400).json({ error: 'Title must be at least 3 characters long' });
    }
    if (!description || description.length < 5) {
      return res.status(400).json({ error: 'Description must be at least 5 characters long' });
    }
    if (!price || price <= 0) {
      return res.status(400).json({ error: 'Price must be a positive number' });
    }
    if (!instock || instock <= 0) {
      return res.status(400).json({ error: 'In-stock quantity must be a positive integer' });
    }

    // Save product to DB
    const product = new Product({
      title,
      description,
      price,
      instock,
      images: req.file ? [req.file.filename] : [],
      user: req.user.id,
    });

    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error('Error adding product:', error.message);
    res.status(500).send('Internal server error');
  }
});




router.get('/getallproducts', authenticateUser, async (req, res) => {
  try {
    // Fetch products for the authenticated user
    const products = await Product.find({ user: req.user.id });

    if (products.length === 0) {
      return res.status(404).json({ message: 'No products found for this user.' });
    }

    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error.message);
    res.status(500).send('Internal server error');
  }
});

module.exports = router;
