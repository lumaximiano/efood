import styled from 'styled-components'
import { theme } from '../../styles/Theme'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const Modal = styled.div`
  background-color: ${theme.colors.primary};
  width: 1024px;
  max-width: 90%;
  border-radius: 5px;
  position: relative;
  padding: 32px;
  margin: 0 auto;
`

export const Fechar = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${theme.colors.background2};
  
  &:hover {
    opacity: 0.8;
  }
`

export const Content = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  flex-wrap: wrap;
`

export const Imagem = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 5px;
`

export const Info = styled.div`
  flex: 1;
`

export const Titulo = styled.h2`
  color: ${theme.colors.background2};
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 16px;
`

export const Descricao = styled.p`
  color: ${theme.colors.background2};
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`

export const Serve = styled.p`
  color: ${theme.colors.background2};
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 24px;
`

export const Botao = styled.button`
  background-color: ${theme.colors.background2};
  color: ${theme.colors.primary};
  border: none;
  height: 24px;
  padding: 0 16px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.9;
  }
`