import React from "react";

import sprechenSieDeutsch from "../images/gfl-tic/sprechenSieDeutsch.png";
import sprechenSieEnglish from "../images/gfl-tic/sprechenSieEnglish.jpg";
import sprechenSieItalienish from "../images/gfl-tic/sprechenSieItalienish.jpg";
import sprechenSieKinesich from "../images/gfl-tic/sprechenSieKinesich.jpg";
import csKind from "../images/gfl-tic/csKind.jpg";

const TarifGeneral = () => {
  return (
    <section className="general-tarif-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="sponsor-wrap">
              <div className="row">
                <div className="col-lg-3">
                  <div className="logo-item logo-item1">
                    <img src={sprechenSieDeutsch} alt="" />
                  </div>
                  
                </div>
                <div className="col-lg-9">
                  <div className="sponsor-item">
                    <h3 className="sponsor__title">Cours d'Allemand</h3>
                    <span className="sponsor__meta">Inscription: 25000 FCFA</span>
                    <p className="sponsor__text">
                    <h3 className="sponsor__title">Y compris livre original et toutes les photocopies d'exercices en classe</h3>
                    <a  className="reply__btn theme-btn" href="/german/german-tarifs" > Plus de détails </a>

                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sponsor-wrap">
              <div className="row">
                <div className="col-lg-3">
                  <div className="logo-item logo-item3">
                    <img src={sprechenSieEnglish} alt="" />
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="sponsor-item">
                  <h3 className="sponsor__title">Cours d'Anglais</h3>
                    <span className="sponsor__meta">Inscription: 25000 FCFA</span>
                    <p className="sponsor__text">
                    <h3 className="sponsor__title">Y compris livre original et toutes les photocopies d'exercices en classe</h3>
                    <a  className="reply__btn theme-btn" href="/anglais-tarifs" > Plus de détails </a>

                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sponsor-wrap">
              <div className="row">
                <div className="col-lg-3">
                  <div className="logo-item logo-item2">
                    <img src={sprechenSieItalienish} alt="" />
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="sponsor-item">
                    <h3 className="sponsor__title">Cours d'Italien</h3>
                    <span className="sponsor__meta">Inscription: 25000 FCFA</span>
                    <p className="sponsor__text">
                    <h3 className="sponsor__title">Y compris livre original et toutes les photocopies d'exercices en classe</h3>
                    <a  className="reply__btn theme-btn" href="/italy-tarifs" > Plus de détails </a>

                    </p>
                  </div>
                </div>
              </div>
            </div>
      
            <div className="sponsor-wrap">
              <div className="row">
                <div className="col-lg-3">
                  <div className="logo-item logo-item4">
                    <img src={sprechenSieKinesich} alt="" />
                  </div>
                  
                </div>
                <div className="col-lg-9">
                  <div className="sponsor-item">
                  <h3 className="sponsor__title">Cours de Chinois</h3>
                    <span className="sponsor__meta">Inscription: 25000 FCFA</span>
                    <p className="sponsor__text">
                    <h3 className="sponsor__title">Y compris livre original et toutes les photocopies d'exercices en classe</h3>
                    <a  className="reply__btn theme-btn" href="/china-tarifs" > Plus de détails </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sponsor-wrap">
              <div className="row">
                <div className="col-lg-3">
                  <div className="logo-item logo-item5">
                    <img src={csKind} alt="" />
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="sponsor-item">
                    <h3 className="sponsor__title">Cours d'informatique</h3>
                    <span className="sponsor__meta">Inscription: 25000 FCFA</span>
                    <p className="sponsor__text">
                    <h3 className="sponsor__title">Y compris livre original et toutes les photocopies d'exercices en classe</h3>
                    <a  className="reply__btn theme-btn" href="/cs-tarifs" > Plus de détails </a>

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TarifGeneral;
