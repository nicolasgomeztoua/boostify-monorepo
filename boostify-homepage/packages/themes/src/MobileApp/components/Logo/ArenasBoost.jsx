import React from "react";
import styled from "styled-components";

import { base } from "@pagerland/common/src/utils";

import logo from "../../assets/screenshots/ArenaMaster.png";

const Img = styled.img`
  display: block;
  ${base};
`;

const ArenasBoostLogo = props => (
  <Img src={logo} alt="ArenasBoost" {...props} />
);

export default ArenasBoostLogo;
