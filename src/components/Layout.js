import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import favicon from "../images/gfl-tic/gfl-tic-favicon.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/font-awesome.css";
import "../assets/css/animate.min.css";
import "../assets/css/fontello.css";


import "../assets/scss/style.scss"

import "../assets/css/style.css";
import "../assets/css/responsive.css";

const Layout = props => {
  return (
    <Fragment>
      <Helmet>
        <title>{props.pageTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href={favicon} />
      </Helmet>
      {props.children}
    </Fragment>
  );
};
export default Layout;
