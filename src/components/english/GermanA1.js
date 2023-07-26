import React from "react";
import menschenA1 from "../../images/gfl-tic/menschen-a1.jpg";
import AdressArea from '../AddressArea';

const GermanA1 = () => {
  return (
    <section className="course-detail-area">
      <div className="container">
        <div className="row">
          
           <div className="col-lg-8">
            <div className="event-detail-content">
              <div className="event-detail-item">
                <h3 className="event__title">A1 - Description du cours</h3>
                <p className="event__text">
                Ils sont réservés aux grands commençants. C'est en même temps la maternelle et le CP1 de l'allemand. Ici, <b>GFL-TIC</b> développe l'allemand sur la langue de l'apprenant. Les cours sont axés sur le mot et son étymologie, le verbe et tous ses composants; la phrase, la grammaire... et tire beaucoup plus sur la prononciation: l'accent d'intensité et l'accent d'insistance.
                </p>
                <p className="event__text">
                A ce niveau, les auditeurs reçoivent et maitrisent tous les verbes fort, savent les distinguer des verbes faibles et savent comment les employer dans une phrase. Les cours de grammaire leur servent d’un point d’appui.
                </p>
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
