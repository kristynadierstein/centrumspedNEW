import styled from "@emotion/styled";
import { theme } from "../../styles";

export const WidthLimiterContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;

  @media (min-width: ${theme.breakpoints.md}) {
    max-width: 1440px;
    width: 100%;
    padding-left: 100px;
    padding-right: 100px;
  }
`;
