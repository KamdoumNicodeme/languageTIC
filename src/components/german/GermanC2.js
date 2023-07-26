import React from "react";
import AdressArea from '../AddressArea';

const GermanC2 = () => {
  return (
    <section className="course-detail-area">
      <div className="container">
        <div className="row">
          
           <div className="col-lg-8">
            <div className="event-detail-content">
              <div className="event-detail-item">
                <h3 className="event__title">C2 - Description du cours</h3>
                <p className="event__text">
                Dans les cours d’allemand au niveau C2, tu comprendras pratiquement tout ce que tu lis ou entends sans aucun problème. Tu peux résumer des informations provenant de différentes sources et présenter des justifications et des explications de manière uniforme. Tu peux t’exprimer rapidement, de manière très fluide et avec précision et tu es capable de clarifier des nuances subtiles sur des sujets complexes              </p>

          

<p  className="event__text">
L'apprenant peut comprendre pratiquement sans difficulté tout ce qu'il/elle lit ou entend. 
Il peut résumer les informations issues de diverses sources écrites et orales et les reproduire
 de façon cohérente tout en énonçant les raisons et les explications propres au texte. 
 L'apprenant peut s'exprimer spontanément, couramment et de façon précise et peut rendre distinctes de fines nuances en rapport avec des sujets complexes.


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
             
                {/* <div className="event-detail-item event-detail-item2">
                <div className="blog-content">
                <div className="blog-item">
                  <div className="blog-img">
                    <img src={menschenA1} alt="" />
                  </div>
                </div>
              </div>
              </div> */}
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

export default GermanC2;
