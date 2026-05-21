import styled from 'styled-components'
import { theme } from '../../styles/Theme'
import { breakpoints } from '../../styles/breakpoints'

export const Card = styled.div`
  background-color: ${theme.colors.primary};
  border-radius: 5px;
  overflow: hidden;
`

export const Imagem = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;

  @media (max-width: ${breakpoints.mobile}px) {
    height: 120px;
  }
`

export const Info = styled.div`
  padding: 12px;

  @media (max-width: ${breakpoints.mobile}px) {
    padding: 8px;
  }
`

export const Nome = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: #FFEBD9;
  margin-bottom: 8px;

  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 14px;
    margin-bottom: 4px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: #FFEBD9;
  margin-bottom: 12px;

  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 12px;
    line-height: 18px;
    margin-bottom: 8px;
  }
`

export const Botao = styled.button`
  background-color: #FFEBD9;
  color: ${theme.colors.primary};
  border: none;
  width: 100%;
  height: 24px;
  padding: 0;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoints.mobile}px) {
    height: 20px;
    font-size: 12px;
  }

  &:hover {
    opacity: 0.9;
  }
`