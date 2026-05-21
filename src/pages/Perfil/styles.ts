import styled from 'styled-components'
import { theme } from '../../styles/Theme'
import { breakpoints } from '../../styles/breakpoints'

export const HeroContainer = styled.div`
  position: relative;
  height: 186px;
  display: flex;
  align-items: center;
  overflow: hidden;
`

export const FundoHeroPerfil = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;    
  opacity: 1;     
  z-index: 0;
`

export const HeroContent = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
`

export const RestaurantesLink = styled.span`
  color: ${theme.colors.primary};
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`

export const LogoImg = styled.img`
  width: 125px;
  height: 60px;
  object-fit: contain;
`

export const CarrinhoInfo = styled.span`
  color: ${theme.colors.primary};
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`

export const Banner = styled.div`
  position: relative;
  height: 280px;
  width: 100%;
`

export const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const BannerTextContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 0;                 
`

export const BannerCategoria = styled.h2`
  color: white;
  font-size: 32px;
  font-weight: 100;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
`

export const BannerTitle = styled.h1`
  color: white;
  font-size: 32px;
  font-weight: 900;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin: 56px 0;

  @media (max-width: ${breakpoints.tablet}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.mobile}px) {
    grid-template-columns: 1fr;
  }
`