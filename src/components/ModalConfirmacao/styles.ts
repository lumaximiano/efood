import styled from 'styled-components'
import { theme } from '../../styles/Theme'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
`

export const Modal = styled.div`
  width: 360px;
  height: 100%;
  background-color: ${theme.colors.primary};
  padding: 32px 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`

export const Titulo = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.colors.background2};
  margin-bottom: 24px;
  width: 100%;
`

export const Mensagem = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${theme.colors.background2};
  line-height: 1.5;
  margin-bottom: 16px;
`

export const Botao = styled.button`
  width: 100%;
  height: 24px;
  background-color: ${theme.colors.background2};
  color: ${theme.colors.primary};
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 16px;

  &:hover {
    opacity: 0.8;
  }
`