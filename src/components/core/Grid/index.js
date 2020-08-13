import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media screen and (min-width: 1040px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
  }
`
