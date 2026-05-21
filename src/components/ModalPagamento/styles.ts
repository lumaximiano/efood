import styled from 'styled-components'
import { theme } from '../../styles/Theme'
import { ContainerModal } from '../ContainerModal'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: flex-end;
  z-index: 99999;
`

export const Modal = styled.div`
  width: 360px;
  height: 100%;
  background-color: ${theme.colors.primary};
  padding: 32px 8px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Form = styled(ContainerModal).attrs({ as: 'form' })`
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

export const InputGroup = styled.div`
  width: 100%;
  margin-bottom: 16px;
`

export const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
  color: ${theme.colors.background2};
  display: block;
  margin-bottom: 8px;
`

export const Input = styled.input`
  width: 100%;
  height: 32px;
  background-color: ${theme.colors.background2};
  border: none;
  border-radius: 5px;
  padding: 0 8px;
  font-size: 14px;
  font-weight: 700;
  color: #4B4B4B;

  &:focus {
    outline: none;
  }
`

export const Row = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  margin-bottom: 16px;

  ${InputGroup} {
    width: 100%;
    margin-bottom: 0;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
  margin-top: 8px;
`

export const ButtonFinalizar = styled.button`
  width: 100%;
  height: 24px;
  background-color: ${theme.colors.background2};
  color: ${theme.colors.primary};
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`

export const ButtonVoltar = styled.button`
  width: 100%;
  height: 24px;
  background-color: ${theme.colors.background2};
  color: ${theme.colors.primary};
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`

export const Error = styled.span`
  color: ${theme.colors.error};
  font-size: 12px;
  margin-top: 4px;
  display: block;
`
