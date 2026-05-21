import styled from 'styled-components'
import { breakpoints } from '../../styles/breakpoints'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin: 56px 0;

  @media (max-width: ${breakpoints.tablet}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.mobile}px) {
    grid-template-columns: 1fr;
  }
`