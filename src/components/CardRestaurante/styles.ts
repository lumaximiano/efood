import styled from 'styled-components'
import { theme } from '../../styles/Theme'
import { breakpoints } from '../../styles/breakpoints'

export const Card = styled.div`
  background: ${theme.colors.white};
  border: 1px solid #eee;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;
  width: 100%;
  max-width: 472px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
`

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 217px;  
`

export const Imagem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const TagsContainer = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  gap: 8px;

  @media (max-width: ${breakpoints.mobile}px) {
    top: 8px;
    right: 8px;
    gap: 4px;
  }
`

export const TagDestaque = styled.span`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: 12px;
  width: 121px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;

  @media (max-width: ${breakpoints.mobile}px) {
    width: 100px;
    height: 22px;
    font-size: 10px;
  }
`

export const TagTipo = styled.span`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: 12px;
  width: 61px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;

  @media (max-width: ${breakpoints.mobile}px) {
    width: 50px;
    height: 22px;
    font-size: 10px;
  }
`

export const Info = styled.div`
  padding: 8px 12px;
`

export const Linha = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`

export const Nome = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.colors.primary};

  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 14px;
  }
`

export const Nota = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.colors.primary};
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 14px;
  }
`

export const StarIcon = styled.img`
  width: 21px;          
  height: 20px;         

  @media (max-width: ${breakpoints.mobile}px) {
    width: 16px;
    height: 15px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  color: ${theme.colors.primary};
  line-height: 1.4;
  margin-top: 20px;
  margin-bottom: 16px;

  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 12px;
    margin-top: 12px;
    margin-bottom: 12px;
  }
`

export const Botao = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  width: 82px;
  height: 24px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoints.mobile}px) {
    width: 70px;
    height: 22px;
    font-size: 10px;
  }

  &:hover {
    background-color: #c55555;
  }
`