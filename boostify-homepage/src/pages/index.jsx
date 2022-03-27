import React from "react";
import PropTypes from "prop-types";

import Head from "next/head";

import Theme, { theme } from "@pagerland/themes/src/RealEstate";
import {
  Location,
  Navbar,
  Welcome,
} from "@pagerland/themes/src/RealEstate/containers";
import {
  About,
  FAQ,
  Features,
  Screenshots,
} from "@pagerland/themes/src/MobileApp/containers";
import preview from "@pagerland/themes/src/RealEstate/assets/preview.jpg";

import Team from "@pagerland/themes/src/Corporate/containers/Team";
import Offer from "@pagerland/themes/src/Corporate/containers/Offer";
import SEO from "../components/SEO";

const RealEstate = ({ url }) => (
  <Theme>
    <Head>
      <link href={theme.typography.googleFont} rel="stylesheet" />
      <meta name="theme-color" content={theme.colors.primary} />
      <meta property="og:image" content={`${url}${preview}`} />
    </Head>
    <SEO title="Real Estate" />

    <Navbar />
    <Welcome name="welcome" />
    <Location name="location" />

    <About name="about" />
    <Offer name="offer" />
    <Features name="features" />
    <Team name="team" />
    <Screenshots name="screenshots" />
    <FAQ name="faq" style={{ marginTop: "50px" }} />
  </Theme>
);

RealEstate.propTypes = {
  url: PropTypes.string,
};

RealEstate.defaultProps = {
  url: "https://pager.land/next/",
};

export default RealEstate;
