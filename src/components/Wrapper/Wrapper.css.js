import styled from "@emotion/styled";
import { theme } from "../../styles";

export const Wrapper = styled.div`
padding-top: 100px;

.Hero__Image {
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 20px;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: 50px;
    height: 80vh;
  }


}
`;
