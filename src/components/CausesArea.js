import React from "react";
import causeImage1 from "../images/gfl-tic/languages-african-women.png";
import blogComputerScience from "../images/gfl-tic/blog-computer-science.jpg";
import studentCertifications from "../images/gfl-tic/studentCertifications.jpg";

const CausesArea = () => {
  return (
    <div>
      <section className="causes-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="section-heading blog-heading text-center">
                <h2 className="section__title">Nos domaines de formation</h2>
              </div>
            </div>
          </div>
          <div className="row blog-content-wrap">
            <div className="col-lg-4">
              <div className="blog-content">
                <div className="blog-item blog-item1">
                  <div className="blog-img">
                    <img src={causeImage1} alt="" />
                    <span className="blog__tag">
                      <i className="fa fa-flash"></i> Nous montons votre dossier de voyage
                    </span>
                </div>
                  <div id="bar1" className="barfiller">
                    <div className="tipWrap">
                      <span className="tip"></span>
                    </div>
                    <span className="fill" data-percentage="23"></span>
                  </div>
                  <div className="blog-inner-content">
                    <h3 className="blog__title">
                      <a href="/foreignlanguages">Langues étrangères</a>
                    </h3>
                    <p className="blog__desc">
                      Nous formons en langues allemande, anglaise, italienne et chinoise et vous prêparons aux examens officiels.
                    </p>
                    <ul className="blog__list">
                      <li>
                        <i className="icon-target"></i> Pour vos études:{" "}
                        <span className="text-warning">En allemagne, Italie, USA, UK, Chine</span>
                      </li>
                      <li>
                        <i className="fa fa-line-chart"></i> Services:{" "}
                        <span className="text-warning">Aupair, Inscriptions universitaire, formation professionelle, etc.</span>
                      </li>
                    </ul>
                    <a href="/foreignlanguages" className="theme-btn">
                      En savoir plus
                    </a>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-content">
                <div className="blog-item blog-item2">
                  <div className="blog-img">
                  <img src={blogComputerScience} alt="" />
                  </div>
                  <div id="bar2" className="barfiller">
                    <div className="tipWrap">
                      <span className="tip"></span>
                    </div>
                    <span className="fill" data-percentage="80"></span>
                  </div>
                  <div className="blog-inner-content">
                    <h3 className="blog__title">
                      <a href="/cs">Informatique</a>
                    </h3>
                    <p className="blog__desc">
                      Augmentez vos chances d'obtenir un emploi en intensifiant votre formation en informatique.
                    </p>
                    <ul className="blog__list">
                      <li>
                        <i className="icon-target"></i> Domaine:{" "}
                        <span className="text-warning">Programmation, Maintenance, Bureautique, Réseaux</span>
                      </li>
                      <li>
                        <i className="fa fa-line-chart"></i> Diplome:{" "}
                        <span className="text-warning">Une attestation reconnue par le Minstère de la formation et de l'emploi du Cameroun</span>
                      </li>
                    </ul>
                    <a href="/cs" className="theme-btn">
                    En savoir plus
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-content">
                <div className="blog-item blog-item3">
                  <div className="blog-img">
                  <img src={studentCertifications} alt="" />                   
                  </div>
                  <div id="bar3" className="barfiller">
                    <div className="tipWrap">
                      <span className="tip"></span>
                    </div>
                    <span className="fill" data-percentage="44"></span>
                  </div>
                  <div className="blog-inner-content">
                    <h3 className="blog__title">
                      <a href="/certifs">Certifications</a>
                    </h3>
                    <p className="blog__desc">
                      Nous offrons des formations certifiantes et vous prêparons aux certifications modernes dans les TIC.
                    </p>
                    <ul className="blog__list">
                      <li>
                        <i className="icon-target"></i> Domaines:{" "}
                        <span className="text-warning">Informatique, Réseaux, Comptabilités, Finances, etc...</span>
                      </li>
                      <li>
                        <i className="fa fa-line-chart"></i> Formations:{" "}
                        <span className="text-warning">En ligne ou directement dans nos locaux modernes et climatisés</span>
                      </li>
                    </ul>
                    <a href="/certifs" className="theme-btn">
                    En savoir plus
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CausesArea;
