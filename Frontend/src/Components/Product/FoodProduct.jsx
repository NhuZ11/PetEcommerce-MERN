import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const FoodProduct = () => {
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
          <h2 className="display-3 fw-normal hero-title">Food Products</h2>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          
          spaceBetween={20}
          slidesPerView={3}
    
        
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {products
            .filter((product) => product.category === "Food")
            .map((product) => (
              <SwiperSlide key={product._id}>
                <div className="card position-relative h-100 shadow-sm">
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
                    <p className="text-muted">{product.description}</p>
                    <h3 className="text-primary">${product.price}</h3>
                    <p className="text-muted">Stock: {product.instock}</p>
                  </div>
                  <div className="card-footer text-center bg-light border-0 mt-3">
                    <a href={`/product/${product._id}`} className="btn btn-outline-dark">
                      View Details
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FoodProduct;
