import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="footer" className=" my-5">
        <div className="container py-5 my-5">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-menu">
                <img src="images/logo.png" alt="logo" />
                <p className="blog-paragraph fs-6 mt-3">
                  Subscribe to our newsletter to get updates about our grand offers.
                </p>
                <div className="social-links">
                  <ul className="d-flex list-unstyled gap-2">
                    {[
                      "ri:facebook-fill",
                      "ri:twitter-fill",
                      "ri:pinterest-fill",
                      "ri:instagram-fill",
                      "ri:youtube-fill",
                    ].map((icon, index) => (
                      <li key={index} className="social">
                        <a href="#">
                          <iconify-icon className="social-icon" icon={icon}></iconify-icon>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="footer-menu">
                <h3>Quick Links</h3>
                <ul className="menu-list list-unstyled">
                  {["Home", "About us", "Offer", "Services", "Contact Us"].map((item, index) => (
                    <li key={index} className="menu-item">
                      <a href="#" className="nav-link">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <div className="footer-menu">
                <h3>Help Center</h3>
                <ul className="menu-list list-unstyled">
                  {[
                    "FAQs",
                    "Payment",
                    "Returns & Refunds",
                    "Checkout",
                    "Delivery Information",
                  ].map((item, index) => (
                    <li key={index} className="menu-item">
                      <a href="#" className="nav-link">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <div>
                <h3>Our Newsletter</h3>
                <p className="blog-paragraph fs-6">
                  Subscribe to our newsletter to get updates about our grand offers.
                </p>
                <div className="search-bar border rounded-pill border-dark-subtle px-2">
                  <form className="text-center d-flex align-items-center" action="" method="">
                    <input
                      type="text"
                      className="form-control border-0 bg-transparent"
                      placeholder="Enter your email here"
                    />
                    <iconify-icon className="send-icon" icon="tabler:location-filled"></iconify-icon>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>


    </>
  );
};

export default Footer;
