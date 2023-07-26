import React from "react";
import menschenA1 from "../../images/gfl-tic/menschen-b1.jpg";
import AdressArea from '../AddressArea';

const GermanB1 = () => {
  return (
    <section className="course-detail-area">
      <div className="container">
        <div className="row">
          
           <div className="col-lg-8">
            <div className="event-detail-content">
              <div className="event-detail-item">
                <h3 className="event__title">B1 - Description du cours</h3>
                <p className="event__text">
                C'est la classe de ceux et celles qui avaient déjà une fois goutté à l'allemand; même si c'est cent ans en arrière. Ils savent lire mais ne comprennent pas grand-chose! Quand vous leur parlez l'allemand, ils semblent vous comprendre mais ne peuvent pas vous répondre, parce qu'ils sont très pauvres en vocabulaire. C'est leur classe ici. C'est eux qui sont nombreux chez nous.

</p>
                <p className="event__text">
                Nous avons conçu un grand programme de lecture. Il faut donc lire ; mais il ne suffit pas de lire : Il faut bien lire. Mais il ne suffit pas de bien lire : il faut comprendre. Il ne suffit pas aussi de comprendre : il faut pouvoir transmettre ce que vous avez lu et ce que vous avez compris. Au terme du programme de lecture et d’expression orale, nous passons à l’écoute silencieuse du passage exploité. Ce cours est très riche et bénéfique de par son contenu et permet aux auditeurs de tuer en eux le stress et la timidité.

</p>

<p className="event__text">
Les cours sont préparés et sont hissés dans des boîtes disposées devant chaque auditeur. Après le programme de lecture et d’expression orale, vous prenez le cours dans la boîte et vous le suivez  attentivement avec le formateur. Vous finissez de suivre le cours, vous repartez avec ledit cours. Au <b>GFL-TIC</b>, vous ne  copiez pas.
</p>

<p  className="event__text">
Ainsi au terme de cette formation, les auditeurs ont l’art de parler l'allemand. Puisqu’ayant été  bien préparé à l’avance durant leur formation et ayant un background très solide, les auditeurs parviennent à exposer un sujet qui leur est remis. Cette autre phase leur permet de s’assurer de la connaissance acquise au cabinet, de s’extérioriser et de tuer complètement en eux l’incertitude, la honte et la timidité.


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

export default GermanB1;
