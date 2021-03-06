import React from "react";
import styled from "styled-components";

import { base } from "@pagerland/common/src/utils";

import logo from "../../assets/logo.png";

const Img = styled.img`
  display: block;
  height: 75px;
  ${base};
`;

const Logo = props => <Img src={logo} alt="Mobile App" {...props} />;

export default Logo;
