import React from "react";
import team1 from "../images/team.jpg";
import team2 from "../images/team2.jpg";
import team3 from "../images/team3.jpg";
import team4 from "../images/team4.jpg";
const TeamTopManagement = () => {
  return (
    <section className="team-area text-center">
      <div className="container">
        <div className="row team-content-wrap">
          <div className="col-lg-3 col-sm-6">
            <div className="team-item team-item1">
              <div className="team__img">
                <img src={team1} alt="team post" />
                <div className="team__img-links">
                  <ul>
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
              <div className="team__title">
                <h3 className="team__title-title">
                  <a href="/volunteer">Kamga Carole</a>
                </h3>
                <span className="team__title-meta">PLEG - DOUALA</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="team-item team-item2">
              <div className="team__img">
                <img src={team2} alt="team post" />
                <div className="team__img-links">
                  <ul>
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
              <div className="team__title">
                <h3 className="team__title-title">
                  <a href="/volunteer">Lary Ngadjui</a>
                </h3>
                <span className="team__title-meta">Ingenieur, Allemagne</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="team-item team-item3">
              <div className="team__img">
                <img src={team3} alt="team post" />
                <div className="team__img-links">
                  <ul>
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
              <div className="team__title">
                <h3 className="team__title-title">
                  <a href="/volunteer">Nicodeme Kamdoum</a>
                </h3>
                <span className="team__title-meta">Ingenieur, Douala</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="team-item team-item4">
              <div className="team__img">
                <img src={team4} alt="team post" />
                <div className="team__img-links">
                  <ul>
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
              <div className="team__title">
                <h3 className="team__title-title">
                  <a href="/volunteer">Armand Mengueme</a>
                </h3>
                <span className="team__title-meta">Ingenieur, Douala</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamTopManagement;
