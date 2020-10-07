import styled from "@emotion/styled"
import { theme } from "../../styles"


export const CardsContainer = styled.div`
@media (min-width: ${theme.breakpoints.md}) {
  margin: 0 auto;
  max-width: 1440px;
  padding: 0 50px;
  justify-content: center;
}


.Cards__BGImage {
min-height: 150px;
background: rgba(255, 255, 255);
opacity: .5!important;

@media (min-width: ${theme.breakpoints.md}) {
  min-height: 300px;
  max-height: 400px;

}


}
`