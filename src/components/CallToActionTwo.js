import React from "react";

const CallToActionTwo = () => {
  return (
    <section className="cta-area text-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-sm-6">
            <div className="cta-item cta-item1">
              <h3 className="cta__title">Nos Tarifs</h3>
              {/* <a href="/german-tarifs" className="theme-btn"> */}
              <a href="/tarif-general" className="theme-btn">

                Liste complète
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="cta-item cta-item2">
              <h3 className="cta__title">Nos packages de formation</h3>
              <a href="/package" className="theme-btn">
              Liste complète
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionTwo;
