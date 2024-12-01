import React from 'react';

const Header = () => {
  return (
    <div>
      <header>
        <div className="container py-2">
          <div className="row py-4 pb-0 pb-sm-4 align-items-center">
            {/* Logo Section */}
            <div className="col-sm-4 col-lg-3 text-center text-sm-start">
              <div className="main-logo">
                <a href="index.html">
                  <img src="images/logo.png" alt="Company Logo" className="img-fluid" />
                </a>
              </div>
            </div>

            {/* Search Bar */}
            <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block">
              <div className="search-bar border rounded-2 px-3 border-dark-subtle">
                <form id="search-form" className="text-center d-flex align-items-center">
                  <input
                    type="text"
                    className="form-control border-0 bg-transparent"
                    placeholder="Search for more than 10,000 products"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"
                    />
                  </svg>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="col-sm-8 col-lg-4 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end">
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

        {/* Horizontal Divider */}
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
                    <span className="iconify" data-icon="healthicons:person"></span>
                  </a>
                </li>
                <li>
                  <a href="wishlist.html" className="mx-3">
                    <span className="iconify" data-icon="mdi:heart"></span>
                  </a>
                </li>
                <li>
                  <a href="#" className="mx-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart">
                    <span className="iconify" data-icon="mdi:cart"></span>
                    <span className="position-absolute translate-middle badge rounded-circle bg-primary pt-2">03</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Navbar Toggler */}
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Offcanvas Navigation */}
            <div className="offcanvas offcanvas-end" id="offcanvasNavbar">
              <div className="offcanvas-header justify-content-center">
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
              </div>
              <div className="offcanvas-body justify-content-between">
                <select className="filter-categories border-0 mb-0 me-5">
                  <option>Shop by Category</option>
                  <option>Clothes</option>
                  <option>Food</option>
                  <option>Toy</option>
                </select>

                <ul className="navbar-nav menu-list list-unstyled d-flex gap-md-3 mb-0">
                  <li className="nav-item">
                    <a href="index.html" className="nav-link active">Home</a>
                  </li>
                  <li className="nav-item">
                    <a href="shop.html" className="nav-link">Shop</a>
                  </li>
                  <li className="nav-item">
                    <a href="blog.html" className="nav-link">Blog</a>
                  </li>
                  <li className="nav-item">
                    <a href="contact.html" className="nav-link">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
