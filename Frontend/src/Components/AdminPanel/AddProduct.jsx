import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: '',
    instock: '',
    image: null,
    category: '', // Add a category field
  });

  const [categories, setCategories] = useState([]); // State to store categories

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/category/getcategory'); // Adjust the endpoint as needed
        setCategories(response.data.data.category);
      } catch (error) {
        console.error('Error fetching categories:', error.response?.data || error.message);
      }
    };

    fetchCategories();
  }, []);
  console.log(categories)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', product.title);
    formData.append('description', product.description);
    formData.append('price', product.price);
    formData.append('instock', product.instock);
    formData.append('category', product.category); // Include category
    if (product.image) {
      formData.append('myfile', product.image);
    }

    try {
      const response = await axios.post('http://localhost:8000/api/product/addproduct', formData, {
        headers: {
          'auth-token': localStorage.getItem('token'), // Authentication token
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Product added successfully:', response.data);

      // Reset form
      setProduct({
        title: '',
        description: '',
        price: '',
        instock: '',
        image: null,
        category: '',
      });
    } catch (error) {
      console.error('Error adding product:', error.response?.data || error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image') {
      setProduct((prevState) => ({
        ...prevState,
        image: files[0], // Set the first selected file
      }));
    } else {
      setProduct((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  return (
    <div className="add-product-background">
      <div className="container d-flex justify-content-center mt-5">
        <div
          className="card p-4 shadow-lg"
          style={{ maxWidth: '600px', width: '100%', backgroundColor: '#2C2C2C', color: '#E0E0E0' }}
        >
          <h2 className="text-center mb-4">Add Product</h2>
          <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input
                type="text"
                className="form-control bg-dark text-light border-0"
                id="title"
                name="title"
                value={product.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <input
                type="text"
                className="form-control bg-dark text-light border-0"
                id="description"
                name="description"
                value={product.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">Price</label>
              <input
                type="number"
                className="form-control bg-dark text-light border-0"
                id="price"
                name="price"
                value={product.price}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="instock" className="form-label">In Stock</label>
              <input
                type="number"
                className="form-control bg-dark text-light border-0"
                id="instock"
                name="instock"
                value={product.instock}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">Category</label>
              <select
                name="category"
                id="category"
                className="form-control bg-dark text-light border-0"
                value={product.category}
                onChange={handleChange}
                required
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">Choose Image</label>
              <input
                type="file"
                className="form-control bg-dark text-light border-0"
                id="image"
                name="image"
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
