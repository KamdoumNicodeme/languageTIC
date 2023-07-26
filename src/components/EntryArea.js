import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import videoImage from "../images/entry-video-img.jpg";
import "react-modal-video/css/modal-video.min.css";
import contact from "./globals";

class EntryArea extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  handleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <React.Fragment>
        <section className="entry-area">
          <div className="container">
            <div className="row entry-static-wrap">
              <div className="col-lg-9">
                <div className="entry-static-box entry-static-box2 d-flex align-items-center">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="entry-video-img">
                        <img src={videoImage} alt="entry-video-img" />

                        <div
                          onClick={this.handleModal}
                          onKeyUp={this.handleModal}
                          role="button"
                          tabIndex="0"
                          className="mfp-iframe video-play-btn"
                          title="Play Video"
                        >
                          <i className="fa fa-play"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="entry-video-text">
                        <h4 className="entry__title">
                          Nous formons en langues étrangères et en technologies.
                        </h4>
                        <p className="entry__text">
                          Decouvrez notre centre dans notre vidéo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId={contact.video_id_du_centre}
          onClose={this.handleModal}
        />
      </React.Fragment>
    );
  }
}

export default EntryArea;
