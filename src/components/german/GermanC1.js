import React from "react";
import AdressArea from '../AddressArea';

const GermanC1 = () => {
  return (
    <section className="course-detail-area">
      <div className="container">
        <div className="row">
          
           <div className="col-lg-8">
            <div className="event-detail-content">
              <div className="event-detail-item">
                <h3 className="event__title">C1 - Description du cours</h3>
                <p className="event__text">
                Les candidats à ce niveau sont supposés maîtriser la grammaire aussi un maximum de vocabulaire. Le cours est beaucoup plus axé sur l’expression orale ; la maîtrise de la rhétorique.


</p>

<p className="event__text">
L'apprenant peut  comprendre une grande variété de textes plus longs et plus exigeants et en saisir les significations implicites.
 Il peut  s'exprimer spontanément et couramment sans donner l'impression de trop chercher ses mots. 
 L'apprenant peut également  s'exprimer de façon efficace et souple dans le cadre de sa formation et de ses études, de sa vie professionnelle ou encore sociale. 
 Il peut  s'exprimer sur des sujets complexes de façon claire, détaillée et structurée tout en maîtrisant l'ensemble des moyens relatifs au discours.
</p>

 
              </div>
              {/* <div className="event-detail-item">
                <h3 className="event__title event__title2">
                  Le Livre: Menschen 
                </h3>
                <p className="event__text">
                Avec cet autre livre illustré offert aux auditeurs de ce niveau, les cours sont axés sur les différents évènements et réalités de la vie allemande. Les auditeurs sont suffisamment outillés pour comprendre et répondre à toutes sortes de questions qui leur sont posées. Avec une dose d’exercices riches en structures grammaticales, ils décrochent facilement leur visa pour prendre leur envol pour le niveau intermédiaire. 

                </p>
              </div> */}
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

export default GermanC1;
