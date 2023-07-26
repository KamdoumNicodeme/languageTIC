import React from "react";
import contact from  "./globals.js"
const AdressArea = () => {
  return (
    <section className="contact-area ">
      <div className="container">
         <div className="row cta-area text-center">
          <div className="col-lg-6 col-sm-6">
            <div className="cta-item cta-item1">
            <h3 className="cta__title">Téléphone : {contact.gfl_phone_orange}</h3>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="cta-item cta-item2">
              <h3 className="cta__title">Douala - Nkolbong</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AdressArea;
