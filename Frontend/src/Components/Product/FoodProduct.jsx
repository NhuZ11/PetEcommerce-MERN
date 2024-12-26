import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaHeart } from "react-icons/fa";


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
                    
                      <h3 className="card-title pt-4 m-0 text-truncate title pb-2">
                        {product.title}
                      </h3>
                   
                    
                    <h3 className="subtitle">${product.price}</h3>
                    <p className="text-muted">Stock: {product.instock}</p>
                  </div>
                 <div>
                  <button className="px-5 py-2 rounded "><span className="title">Add To Cart</span></button>
                  <button className="py-2 px-3 rounded"><FaHeart /></button>
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
