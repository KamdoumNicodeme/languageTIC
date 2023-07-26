import React from "react";
import menschenA1 from "../../images/gfl-tic/menschen-a2.jpg";
import AdressArea from '../AddressArea';

const GermanA1 = () => {
  return (
    <section className="course-detail-area">
      <div className="container">
        <div className="row">
          
           <div className="col-lg-8">
            <div className="event-detail-content">
              <div className="event-detail-item">
                <h3 className="event__title">A2 - Description du cours</h3>
                <p className="event__text">
                L'apprenant peut comprendre des phrases isolées et des expressions fréquemment utilisées en relation
                 avec des domaines de la vie quotidienne (comme par exemple des informations personnelles et relatives à la famille, 
                 aux achats, au travail, à l'environnement proche). 
                 
                 
                </p>
                <p className="event__text">
                L'apprenant peut également communiquer dans le cadre de situations simples et routinières qui ne demandent 
                qu'un échange d'informations simple et direct lié à des sujets familiers et bien connus. 
                Peut évoquer en termes simples ses origines et sa formation, son environnement direct et des sujets correspondant à des besoins immédiats.                </p>
              </div>
              <div className="event-detail-item">
                <h3 className="event__title event__title2">
                  Le Livre: Menschen 
                </h3>
                <p className="event__text">
                Avec cet autre livre illustré offert aux auditeurs de ce niveau, les cours sont axés sur les différents évènements et réalités de la vie allemande. Les auditeurs sont suffisamment outillés pour comprendre et répondre à toutes sortes de questions qui leur sont posées. Avec une dose d’exercices riches en structures grammaticales, ils décrochent facilement leur visa pour prendre leur envol pour le niveau intermédiaire. 


                </p>
              </div>

              <div className="event-detail-btn">
                <div className="row">
                <div className="col-lg-6">                
                  <a href="/german/german-return" className="theme-btn">
                    Nos prochaines rentrées
                  </a>
                </div>
                <div className="col-lg-6">                
                  <a href="#none" className="theme-btn">
                  Inscription ici
                  </a>
                </div>
                </div>
              </div>

<br></br>
             <AdressArea></AdressArea>

            </div>
        
          </div>
          <div className="col-lg-4">
            <div className="event-detail-sidebar">
              <div className="event-detail-item">
                <h3 className="event__title">Détails du cours</h3>
                <ul className="event__list">
                  <li>
                    <span>Durée:</span> 10-12 semaines
                  </li>
                  <li>
                    <span>Horaires:</span>Matinée, après-midi
                  </li>
                  <li>
                    <span>Inscription:</span>25 000 FCFA
                  </li>

                  <li>
                    <span>Tarifs:</span>100 000 FCFA
                  </li>
                  <li>
                    <span>Enseignants:</span> Enseignants qualifiés
                  </li>
                  <li>
                    <span>Situation:</span>Douala - Total Nkolbong
                  </li>
                </ul>
              </div>
             
                <div className="event-detail-item event-detail-item2">
                <div className="blog-content">
                <div className="blog-item">
                  <div className="blog-img">
                  <img src={menschenA1} alt="" />
                  </div>
                </div>
              </div>
              </div>
{/* 
              <div className="event-detail-item event-detail-item2">
                <Map />
              </div>
             */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GermanA1;
