import React from "react";
import causeImage1 from "../images/gfl-tic/languages-african-women.png";
import causeImage2 from "../images/gfl-tic/blog-computer-science.jpg";
import studentCertifications from "../images/gfl-tic/studentCertifications.jpg";

const PackageArea = () => {
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
                      <span>Langues étrangères</span>
                    </h3>
                    <p className="blog__desc">
                      Nous vous formons en langues allemande, anglaise, italienne et chinoise et vous preparons aux examens officiels internationaux.
                    </p>
                    <ul className="blog__list">
                      <li>
                        <i className="icon-target"></i> Pour vos études:{" "}
                        <span className="text-warning">En Allemagne, Italie, USA, UK, Chine</span>
                      </li>
                      <li>
                        <i className="fa fa-line-chart"></i> Services:{" "}
                        <span>Aupair, Inscriptions universitaire, formation professionelle, etc.</span>
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
                  <img src={causeImage2} alt="" />
                  </div>
                  <div id="bar2" className="barfiller">
                    <div className="tipWrap">
                      <span className="tip"></span>
                    </div>
                    <span className="fill" data-percentage="80"></span>
                  </div>
                  <div className="blog-inner-content">
                    <h3 className="blog__title">
                      <span  >Informatique</span>
                    </h3>
                    <p className="blog__desc">
                      Augmentez vos chances d'obtenir un emploi en intensifiant votre formation en informatique dans nos locaux modernes
                    </p>
                    <ul className="blog__list">
                      <li>
                        <i className="icon-target"></i> Domaine:{" "}
                        <span>Programmation, Maintenance, Bureautique, Réseaux</span>
                      </li>
                      <li>
                        <i className="fa fa-line-chart"></i> Diplome:{" "}
                        <span>Une attestation réconnue par le Minstère de la formation et de l'emploi du Cameroun</span>
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
                      <span>Certifications</span>
                    </h3>
                    <p className="blog__desc">
                      Nous offrons des formations certifiantes et nous vous preparons aux certifications modernes grâce á nos partenariats 
                    </p>
                    <ul className="blog__list">
                      <li>
                        <i className="icon-target"></i> Domaines:{" "}
                        <span>Informatique, Réseaux, Comptabilités, Finances, etc...</span>
                      </li>
                      <li>
                        <i className="fa fa-line-chart"></i> Formations:{" "}
                        <span>En ligne ou directements dans nos locaux modernes, c'est possible</span>
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

export default PackageArea;
