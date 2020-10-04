import styled from '@emotion/styled'

const Wrapper = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
  }
`

export default Wrapper
