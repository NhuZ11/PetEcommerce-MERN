import React from "react";

const categories = [
  { icon: "ph:bowl-food", label: "Foodies" },
  { icon: "ph:bird", label: "Bird Shop" },
  { icon: "ph:dog", label: "Dog Shop" },
  { icon: "ph:fish", label: "Fish Shop" },
  { icon: "ph:cat", label: "Cat Shop" },
];

const Categories = () => {
  return (
    <section id="categories">
      <div className="container my-3 py-5">
        <div className="row my-5">
          {categories.map((category, index) => (
            <div key={index} className="col text-center">
              <a href="#" className="categories-item">
                <iconify-icon
                  class="category-icon"
                  icon={category.icon}
                  style={{ fontSize: "160px" }}
                ></iconify-icon>
                <h5>{category.label}</h5>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
