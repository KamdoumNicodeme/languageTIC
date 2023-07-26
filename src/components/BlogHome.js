import React from "react";
import daf1 from "../images/gfl-tic/daf1.jpg";
import deutscheKind from "../images/gfl-tic/deutscheKind.jpg";
import englishKind from "../images/gfl-tic/englishKind.jpg";
import csKind from "../images/gfl-tic/csKind.jpg";

const BlogHome = () => {
  return (
    <section className="blog-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <div className="section-heading blog-heading">
               <h2 className="section__title">Nos futures rentrées</h2>
              <p className="section__meta">Contactez-nous si vous savez des questions</p>
            </div>
          </div>
        </div>
        <div className="row recent-post-wrap">
          <div className="col-lg-6">
            <div className="recent-item">
              <div className="recent__img">
                <span className="meta__date-date">01 Avril, 2022</span>
                <img src={daf1} alt="service-post" />               
              </div>
              <div className="news__content">
                <h3 className="news__content-title">
                  <a href="/german/german-return">
                    Cours d'allemand, A1, A2, B1
                  </a>
                </h3>
                <ul className="news__content-list">
                  <li className="news__content-active__dot">
                    <a href="#none">Horaires variées</a>
                  </li>
                  <li>
                    <a href="#none">Cours directement dans nos centres</a>
                  </li>
                </ul>
                <p className="news__content-text">
                  Vous-vous preparez á étudiez en Allemagne? Alors Nous nous ouvrons les portes de l'Europe. Suivez nos cours intensifs - nous formons aux differents examens (ZDaf, TestDaf, DSH). 
                  <b>Ensemble</b> nous montons votre dossier d'études ou de formation en infirmerie en Allemagne. Nous vous preparons egalement á l'entretien pour toute demande de Visa
                </p>
                <a href="/german/german-return" className="theme-btn">
                  Lire notre formations et nos tarifs
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="third-recent-box">
              <ul className="third-recent-item">
                <li>
                  <div className="recent__img">
                    <a href="/english-return">
                    <img src={deutscheKind} alt="" />                     
                    </a>
                  </div>
                  <div className="recent__content">
                    <span>Avril, 2022</span>
                    <h4>
                      <a href="/german/german-return">
                      Cours d'allemand <br/>A1, A2, B1, B2, C1, TesfDaf
                      </a>
                    </h4>
                  </div>
                </li>
                <li>
                  <div className="recent__img">
                    <a href="/english-return">
                      <img src={englishKind} alt="" />
                    </a>
                  </div>
                  <div className="recent__content">
                    <span>Avril 2022</span>
                    <h4>
                      <a href="/english-return">
                        Cours d'anglais
                      </a>
                    </h4>
                  </div>
                </li>
                <li>
                  <div className="recent__img">
                    <a href="/cs-return">
                      <img src={csKind} alt="" />
                    </a>
                  </div>
                  <div className="recent__content">
                    <span>Avril 2022</span>
                    <h4>
                      <a href="/cs-return">
                        Cours d'informatiques{" "}
                      </a>
                    </h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHome;
