import React from "react";
import german from "../../images/gfl-tic/under-construction.png";

const ItalyActuallyUnderConstruction = () => {
  return (
    
    <section className="causes-detail-area">
      <div className="container">
        <div className="row blog-content-wrap">
          <div className="col-lg-12">
            <div className="blog-content">
              <div className="blog-item">
              <div className="blog-inner-content">
                  <div className="inner-causes-box">
                    <h1 className="blog__title">
                      Veuillez nous excuser. <br/>
                      Nous sommes en plein élaboration des programmes des cours d'italien
                    </h1>
                     
                  </div>
                 
                </div>
                <div className="blog-img">
                  <img src={german} alt="" />
                </div>
              </div>
            </div>
          </div>
         </div>
      </div>
    </section>
  );
};

export default ItalyActuallyUnderConstruction;
