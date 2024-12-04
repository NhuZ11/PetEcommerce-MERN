import React, { useState } from "react";
import img1 from "../assets/banner-img.png";
import img2 from "../assets/banner-img2.png";
import img3 from "../assets/banner-img3.png";

const Hero = () => {
  const slides = [
    {
      img: img1,
      title: "Best destination for your pets",
      subtitle: "Save 10 - 20 % off",
    },
    {
      img: img2,
      title: "Best care for your furry friends",
      subtitle: "Save 10 - 20 % off",
    },
    {
      img: img3,
      title: "Everything your pets need",
      subtitle: "Save 10 - 20 % off",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="banner" style={{ background: "#F9F3EC" }}>
      <div className="container">
        <div className="carousel">
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-item ${
                  index === currentSlide ? "active" : "inactive"
                }`}
                style={{
                  display: index === currentSlide ? "block" : "none",
                }}
              >
                <div className="row banner-content align-items-center py-5">
                  <div className="img-wrapper col-md-5">
                    <img src={slide.img} className="img-fluid" alt={`banner-${index + 1}`} />
                  </div>
                  <div className="content-wrapper col-md-7 p-5 mb-5">
                    <div className="secondary-font text-primary text-uppercase mb-4">
                      {slide.subtitle}
                    </div>
                    <h2 className="banner-title display-1 fw-normal">
                      {slide.title}
                    </h2>
                    <a
                      href="#"
                      className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
                    >
                      shop now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="btn btn-dark" onClick={prevSlide}>
            Previous
          </button>
          <button className="btn btn-dark" onClick={nextSlide}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
