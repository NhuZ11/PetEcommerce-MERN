import React from "react";
import "iconify-icon";
import { IoPersonSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ cartCount = 0 }) => {
  const menuItems = [
    { href: "index.html", label: "Home" },
    { href: "shop.html", label: "Shop" },
    { href: "blog.html", label: "Blog" },
    { href: "contact.html", label: "Contact" },
  ];

  return (
    <header>
      <div className="container py-2">
        <div className="row py-4 pb-0 pb-sm-4 align-items-center">
          {/* Logo Section */}
          <div className="col-sm-4 col-lg-3 text-center text-sm-start">
            <div className="main-logo">
              <a href="index.html">
                <img
                  src="images/logo.png"
                  alt="Company Logo"
                  className="img-fluid"
                />
              </a>
            </div>
          </div>

          {/* Search Bar */}
          <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block">
            <div className="search-bar border rounded-2 px-3 border-dark-subtle">
              <form
                id="search-form"
                className="text-center d-flex align-items-center"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="text"
                  className="form-control border-0 bg-transparent"
                  placeholder="Search for more than 10,000 products"
                />
                <iconify-icon
                  icon="mdi:magnify"
                  width="24"
                  height="24"
                ></iconify-icon>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-sm-8 col-lg-4 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end font-style">
            <div className="support-box text-end d-none d-xl-block">
              <span className="fs-6 secondary-font text-muted">Phone</span>
              <h5 className="mb-0">+980-34984089</h5>
            </div>
            <div className="support-box text-end d-none d-xl-block">
              <span className="fs-6 secondary-font text-muted">Email</span>
              <h5 className="mb-0">waggy@gmail.com</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <hr className="m-0" />
      </div>

      {/* Navigation */}
      <div className="container">
        <nav className="main-menu d-flex navbar navbar-expand-lg">
          {/* Mobile Menu */}
          <div className="d-flex d-lg-none align-items-end mt-3">
            <ul className="d-flex justify-content-end list-unstyled m-0">
              <li>
                <a href="account.html" className="mx-3">
                  <iconify-icon icon="healthicons:person"></iconify-icon>
                </a>
              </li>
              <li>
                <a href="wishlist.html" className="mx-3">
                  <iconify-icon icon="mdi:heart"></iconify-icon>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mx-3"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasCart"
                >
                  <iconify-icon icon="mdi:cart"></iconify-icon>
                  <span className="position-absolute translate-middle badge rounded-circle bg-primary pt-2">
                    {cartCount}
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Navbar Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Offcanvas Navigation */}
          <div className="offcanvas offcanvas-end" id="offcanvasNavbar">
            <div className="offcanvas-header justify-content-center">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
              ></button>
            </div>
            <div className="offcanvas-body justify-content-between">
              <select className="filter-categories border-0 mb-0 me-5">
                <option>Shop by Category</option>
                <option>Clothes</option>
                <option>Food</option>
                <option>Toy</option>
              </select>

              <ul
                className="navbar-nav menu-list list-unstyled d-flex gap-md-3 mb-0"
                style={{ listStyleType: "none", paddingLeft: 0 }}
              >
                {menuItems.map((item, index) => (
                  <li key={index} className="nav-item fs-4">
                    <a href={item.href} className="nav-link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-2">
                <Link to="/login" type="button" class="btn btn-primary px-3 py-1 me-4">
                  Login
                </Link>
                <Link to="/register" type="button" class="btn btn-success px-3 py-1">
                  Register
                </Link>
              </div>

              <div className="d-flex gap-md-4 mb-1 mt-3">
                <div className="dropdown ">
                  <IoPersonSharp
                    size={22}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className="cursor-pointer mb-1"
                  />
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
                <FaHeart size={20} />
                <FaShoppingCart size={20} />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
