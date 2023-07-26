import React from "react";
import contact from "./globals";
const Contact = () => { 
  
  return (
    <section className="contact-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <h2 className="section__title">Contactez -nous</h2>
              <p className="section__meta">Nous vous repondrons par e-mail ou vous appelons directement</p>
              <p className="section__desc">
                Pour une réponse directe et rapide, il est conseiller de nous appeller directement oubien de nous écrire sur notre numero whatsapp
              </p>
              <ul className="section__list">
                <li>
                  <a href="#none">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#none">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#none">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a href="#none">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-shared">
              <form action="#" method="post">
                <div className="row">
                  <div className="col-lg-6 col-sm-6 form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Vos noms"
                    />
                  </div>

                  <div className="col-lg-6 col-sm-6 form-group">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Vos adresse Email"
                    />
                  </div>

                  <div className="col-lg-12 form-group">
                    <input
                      className="form-control"
                      type="number"
                      name="phone"
                      placeholder="Téléphone"
                    />
                  </div>

                  <div className="col-lg-12 col-sm-12 form-group">
                    <textarea
                      className="textarea"
                      name="message"
                      placeholder="Votre message"
                    ></textarea>
                  </div>

                  <div className="col-lg-12 col-sm-12">
                    <button className="theme-btn submit__btn" type="submit">
                      Envoyer votre message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row contact-detail-action">
          <div className="col-lg-4">
            <div className="contact-item contact-item1">
              <h3 className="contact__title">Notre Mission</h3>
              <p className="contact__desc">
                Transformez votre temps d'apprentissage en moments de plaisir! Au service de toutes les réussites et ouvert á toutes les bourses
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-item contact-item2">
              <h3 className="contact__title">Addresse</h3>
              <p className="contact__desc">
                Á 200 Mètres de la <br /> TOTAL NKOLMBONG en direction du stade JAPOMA
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-item contact-item3">
              <h3 className="contact__title">Contact</h3>
              <p className="contact__desc">
              {contact.gfl_tic_email} <br />
                {contact.gfl_phone_orange}<br />
                {contact.lary}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
// export default Contact;
