import styled from 'styled-components'
import { theme } from '../../styles/Theme'


export const HeroContainer = styled.div`
  position: relative;
  height: 384px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 124px;
`

export const FundoHero = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;    
  opacity: 0.8;         
  z-index: 0;
`

export const LogoImg = styled.img`
  width: 125px;
  height: 60px;
  z-index: 1;
`

export const Titulo = styled.h2`
  color: ${theme.colors.primary};
  font-size: 36px;
  font-weight: bold;
  line-height: 100%;
  max-width: 539px;
  z-index: 1;
`