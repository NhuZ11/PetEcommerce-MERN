import React, { useState } from "react";
import axios from "axios";

const AddCategory = () => {
  const [category, setCategory] = useState({
    name: "",
    description: "",
    pet: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", category.name);
    formData.append("description", category.description);
    formData.append("pet", category.pet);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/category/addcategory",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Category added successfully:", response.data);
      alert("Category added successful");

      // Reset form
      setCategory({
        name: "",
        description: "",
        pet: "",
      });
    } catch (error) {
      console.error(
        "Error adding category:",
        error.response?.data || error.message
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCategory((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="add-product-background">
      <div className="container d-flex justify-content-center mt-5">
        <div
          className="card p-4 shadow-lg"
          style={{
            maxWidth: "600px",
            width: "100%",
            backgroundColor: "#2C2C2C",
            color: "#E0E0E0",
          }}
        >
          <h2 className="text-center mb-4">Add Category</h2>
          <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control bg-dark text-light border-0"
                id="name"
                name="name"
                value={category.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control bg-dark text-light border-0"
                id="description"
                name="description"
                value={category.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pet" className="form-label">
                Pet Type
              </label>
              <select
                name="pet"
                id="pet"
                className="form-control bg-dark text-light border-0"
                value={category.pet}
                onChange={handleChange} // Added onChange handler
                required
              >
                <option value="">Select a category</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Cat">Bird</option>
                <option value="Cat">Fish</option>
              </select>
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

export default AddCategory;
