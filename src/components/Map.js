import React from "react";

const Map = () => {
  return (
    <div>
      <section className="map-area">
        <div id="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15920.012733570664!2d9.79837836754393!3d4.0197433388680315!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x984f31aaab90ae89!2sEL%20Sherokee!5e0!3m2!1sde!2sde!4v1643995510879!5m2!1sde!2sde"
            className="map"
            title="googlemap"
            allowFullScreen=""
          ></iframe>
        </div>
      </section>
    </div>
  );
};
export default Map;
