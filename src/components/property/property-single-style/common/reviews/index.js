import React from "react";
import SingleReview from "./SingleReview";

const sortOptions = [
"Más reciente",
"Más vendido",
"Mejor coincidencia",
"Precio bajo",
"Precio alto",

];

const AllReviews = () => {
  return (
    <div className="product_single_content mb50">
      <div className="mbp_pagination_comments">
        <div className="row">
          <div className="col-lg-12">
            <div className="total_review d-flex align-items-center justify-content-between mb20">
              <h6 className="fz17 mb15">
                <i className="fas fa-star fz12 pe-2" />
                5.0 · 3 reseñas
              </h6>
              <div className="page_control_shorting d-flex align-items-center justify-content-center justify-content-sm-end">
                <div className="pcs_dropdown mb15 d-flex align-items-center">
                  <span style={{ minWidth: "60px" }}>Orden</span>
                  <select className="form-select">
                    {sortOptions.map((option, index) => (
                      <option key={index}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/* End review filter */}

          <SingleReview />
          {/* End reviews */}
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
