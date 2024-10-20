import React from "react";

const Category = () => {
  const categories = ["Casas", "Pisos", "Oficina", "Villas", "Casas de Campo"];

  return (
    <div className="sidebar-widget mb30">
      <h6 className="widget-title">Categories</h6>
      <div className="category-list d-flex flex-column mt20">
        {categories.map((category, index) => (
          <a href="#" key={index}>
            {category}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Category;
