const express = require('express')
const Product = require('../Model/Product.model')
const authenticateUser = require('../Middleware/authenticateUser')
const { body, validationResult } = require('express-validator')
const router = express.Router()

const fs = require('fs');
const path = require('path');

router.post(
  '/addproduct',
  authenticateUser,
  [
    body('title').isLength({ min: 3 }),
    body('description').isLength({ min: 5 })
  ],
  async (req, res) => {
    console.log('req.body', req.body);
    try {
      const { title, description, price, instock, images } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log(errors);
        return res.status(400).json({ errors: errors.array() });
      }

      // Decode and save images
      const imageFilenames = images.map((base64Image, index) => {
        const buffer = Buffer.from(base64Image.split(',')[1], 'base64');
        const filename = `image_${Date.now()}_${index}.jpg`;
        const filepath = path.join(__dirname, 'uploads', filename);
        fs.writeFileSync(filepath, buffer);
        return filename;
      });

      const product = new Product({
        title,
        description,
        price,
        instock,
        images: imageFilenames,
        user: req.user.id
      });

      const savedProduct = await product.save();
      res.json(savedProduct);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Internal server error');
    }
  }
);



module.exports = router