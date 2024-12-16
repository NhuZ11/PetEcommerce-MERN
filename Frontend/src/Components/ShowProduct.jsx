import React, { useEffect, useState } from "react";
import axios from "axios";

const ShowProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product/getallproducts")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  return (
    <section id="products" className="my-5 overflow-hidden">
      <div className="container pb-5">
        <div className="section-header d-md-flex justify-content-between align-items-center mb-4">
          <h2 className="display-3 fw-normal">Our Products</h2>
        </div>

        <div className="row">
          {products.map((product, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card position-relative h-100 shadow-sm">
                <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle bg-light">
                  {product.isNew ? "New" : ""}
                </div>
                <a href={`/product/${product._id}`}>
                  <img
                    src={`http://localhost:8000/uploads/${product.images[0]}`}
                    className="card-img-top img-fluid rounded-4"
                    alt={product.title}
                    style={{ objectFit: "cover", height: "250px" }}
                  />
                </a>
                <div className="card-body p-0">
                  <a href={`/product/${product._id}`}>
                    <h3 className="card-title pt-4 m-0 text-truncate">
                      {product.title}
                    </h3>
                  </a>
                  <div className="card-text">
                    <span className="rating secondary-font">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`${
                            i < product.rating
                              ? "text-primary bi bi-star-fill"
                              : "text-muted bi bi-star"
                          }`}
                        ></i>
                      ))}{" "}
                      {product.rating}
                    </span>
                    <h3 className="secondary-font text-primary mt-2">
                      ${product.price}
                    </h3>
                    <p className="text-muted">
                      {product.description.length > 100
                        ? `${product.description.substring(0, 100)}...`
                        : product.description}
                    </p>
                    <div className="d-flex flex-wrap mt-3">
                      <button className="btn btn-primary me-3 px-4 pt-3 pb-3">
                        <h5 className="text-uppercase m-0">Add to Cart</h5>
                      </button>
                      <button className="btn btn-outline-secondary px-4 pt-3">
                        <i className="bi bi-heart-fill fs-5"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-footer text-center bg-light border-0 mt-3">
                  <a href={`/product/${product._id}`} className="btn btn-outline-dark">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowProduct;
