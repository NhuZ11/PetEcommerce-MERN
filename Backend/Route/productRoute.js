const express = require('express');
const Product = require('../Model/Product.model');
const authenticateUser = require('../Middleware/authenticateUser');
const { body, validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// Ensure the uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

router.post(
  '/addproduct',
  authenticateUser,
  [
    body('title', 'Title must be at least 3 characters long').isLength({ min: 3 }),
    body('description', 'Description must be at least 5 characters long').isLength({ min: 5 }),
    body('price', 'Price must be a positive number').isFloat({ gt: 0 }),
    body('instock', 'In-stock quantity must be a positive integer').isInt({ gt: 0 }),
    body('images', 'Images must be an array').isArray({ min: 1 })
  ],
  async (req, res) => {
    console.log('req.body:', req.body);

    try {
      const { title, description, price, instock, images } = req.body;

      // Validate the request body
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Decode and save images
      const imageFilenames = [];
      for (const [index, base64Image] of images.entries()) {
        try {
          const buffer = Buffer.from(base64Image.split(',')[1], 'base64');
          const filename = `image_${Date.now()}_${index}.jpg`;
          const filepath = path.join(uploadsDir, filename);
          fs.writeFileSync(filepath, buffer);
          imageFilenames.push(filename);
        } catch (err) {
          console.error(`Error processing image ${index}:`, err.message);
          return res.status(400).json({ error: 'Invalid image format' });
        }
      }

      // Create and save the product
      const product = new Product({
        title,
        description,
        price,
        instock,
        images: imageFilenames,
        user: req.user.id
      });

      const savedProduct = await product.save();
      res.status(201).json(savedProduct);
    } catch (error) {
      console.error('Error adding product:', error.message);
      res.status(500).send('Internal server error');
    }
  }
);

module.exports = router;
