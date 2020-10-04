import styled from "@emotion/styled";
import { theme } from "./../../styles";

export const HeroSection = styled.div`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;

  .HeroTitle {
    width: 80%;
    border-bottom: 1px solid white;
    padding-bottom: 10px;

    @media (min-width: ${theme.breakpoints.md}) {
      width: 60%;
    }
  }
`;


export const HeroSubtitleContainer = styled.div`
display: flex;
align-items: center;

.iela-logo {
  margin-right: 5px;

  @media (min-width: ${theme.breakpoints.md}) {
    margin-right: 20px;
  }
}

`