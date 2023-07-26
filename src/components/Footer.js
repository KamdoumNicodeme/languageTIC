import React, { Fragment, Component } from "react";
import contact from "./globals";
class Footer extends Component {
  constructor() {
    super();
    this.state = {
      scrollBtn: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        scrollBtn: true,
      });
    } else if (window.scrollY < 100) {
      this.setState({
        scrollBtn: false,
      });
    }
  };

  scrollTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <Fragment>
        <section className="footer-area">
          
          <div className="footer-top">
            <div className="container">
              <div className="row footer-widget-wrap">
                 <div className="col footer-item footer-item4">
                  <h3 className="widget__title">Contact</h3>
                  <ul className="contact__info">
                    <li>GO For Languages and T.I.C</li>
                    <li>
                      <a href="mailto:needhelp@oxpitan.com">
                        info@gfl-tic.com
                      </a>
                    </li>
                    <li>
                      Appel: <a  href={`tel:${contact.gfl_phone_orange?.replace(/ /g,'')}`} shref="tel:${contact.gfl_phone_orange?.replace(/ /g,'')}" >{contact.gfl_phone_orange}</a>
                      <a target="_blank" href={`https://wa.me/${contact.gfl_phone_orange?.replace(/ /g,'')}`} ></a>
                    </li>

                    <li>
                      Whatsapp: <a target="_blank" href={`https://wa.me/${contact.gfl_phone_orange?.replace(/ /g,'')}`} >{contact.gfl_phone_orange}</a>
                    </li>

                  </ul>
                  <div className="footer__social">
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
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="copyright-desc">
                    <p>
                      © Copyright {new Date().getFullYear()} by <a href="#none">GFL-TIC.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          role="button"
          onKeyUp={this.scrollTop}
          tabIndex="0"
          onClick={this.scrollTop}
          id="back-to-top"
          className={this.state.scrollBtn ? "back-btn-shown" : ""}
        >
          <i className="fa fa-angle-up" title="Go top"></i>
        </div>
      </Fragment>
    );
  }
}

export default Footer;
