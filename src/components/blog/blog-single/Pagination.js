import React from "react";

const Pagination = () => {
  return (
    <div className="mbp_pagination_tab bdrb1">
      <div className="row justify-content-between pt45 pt30-sm pb45 pb30-sm">
        <div className="col-md-6">
          <div className="pag_prev">
            <a href="#">
              <h6>
                <span className="fas fa-chevron-left pe-2" /> Publicación Anterior
              </h6>
              <p className="fz13 text mb-0">
                La propiedad anterior destacaba por su ubicación 
              </p>

            </a>
          </div>
        </div>
        {/* End pag_prev .col-6 */}

        <div className="col-md-6">
          <div className="pag_next">
            <a href="#" className="text-end">
              <h6>
                Publicación Siguiente
                <span className="fas fa-chevron-right ps-2" />
              </h6>
              <p className="fz13 text mb-0">
                La siguiente propiedad destaca por su amplio terreno 
              </p>

            </a>
          </div>
        </div>
        {/* End pag_next .col-6 */}
      </div>
    </div>
  );
};

export default Pagination;
