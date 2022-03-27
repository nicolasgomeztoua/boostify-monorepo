import styled from "styled-components";
import { base, theme } from "../../utils";

export const Wrapper = styled.span`
  display: inline-block;
  color:${props => (props.gradient ? `${props.gradient}` : "currentColor")};
    }
  svg {
    display: block;
    width: 1em;

  
  }

  ${base}
  ${theme("Icon")}
`;
