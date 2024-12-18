import React from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../../assets/banner-img.png";
import img2 from "../../assets/banner-img2.png";
import img3 from "../../assets/banner-img3.png";

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const HeroSlider = () => {
  return (
    <section style={{ background: "#F9F3EC" }}>
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide py-5">
            <div className="d-flex flex-row justify-content-center align-items-center gap-5">
              <img src={img1} alt="" />
              <div className="d-flex flex-column">
                <p className="hero-subtitle">Save 10 - 20 % off</p>
                <h1 className="hero-title">Best Destination</h1>
                <h1 className="hero-title">
                  {" "}
                  For <span style={{ color: "#DEAD6F" }}>Your Pets</span>
                </h1>
                <a
                  href="#"
                  className="btn btn-outline-dark btn-lg text-uppercase fs-6  rounded-1"
                >
                  shop now
                </a>
              </div>
            </div>
          </div>
          <div className="swiper-slide py-5">
            <div className="d-flex flex-row justify-content-center align-items-center gap-5">
              <img src={img2} alt="" />
              <div className="d-flex flex-column">
                <p className="hero-subtitle">Save 10 - 20 % off</p>
                <h1 className="hero-title">Best Destination</h1>
                <h1 className="hero-title">
                  {" "}
                  For <span style={{ color: "#DEAD6F" }}>Your Pets</span>
                </h1>
                <a
                  href="#"
                  className="btn btn-outline-dark btn-lg text-uppercase fs-6  rounded-1"
                >
                  shop now
                </a>
              </div>
            </div>
          </div>
          <div className="swiper-slide py-5">
            <div className="d-flex flex-row justify-content-center align-items-center gap-5">
              <img src={img3} alt="" />
              <div className="d-flex flex-column">
                <p className="hero-subtitle">Save 10 - 20 % off</p>
                <h1 className="hero-title">Best Destination</h1>
                <h1 className="hero-title">
                  {" "}
                  For <span style={{ color: "#DEAD6F" }}>Your Pets</span>
                </h1>
                <a
                  href="#"
                  className="btn btn-outline-dark btn-lg text-uppercase fs-6  rounded-1"
                >
                  shop now
                </a>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>

          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
