import styled from 'styled-components'
import { theme } from '../../styles/Theme'

export const Card = styled.div`
  background-color: ${theme.colors.primary};
  border-radius: 5px;
  overflow: hidden;
`

export const Imagem = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`

export const Info = styled.div`
  padding: 12px;
`

export const Nome = styled.h3`
  font-size: 16px;          /* ← 16px conforme Figma */
  font-weight: bold;
  color: #FFEBD9;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;          /* ← 14px conforme Figma */
  line-height: 22px;        /* ← 22px conforme Figma */
  color: #FFEBD9;
  margin-bottom: 12px;
`

export const Botao = styled.button`
  background-color: #FFEBD9;
  color: ${theme.colors.primary};
  border: none;
  width: 100%;
  height: 24px;             /* ← altura 24px conforme Figma */
  padding: 0;
  border-radius: 4px;
  font-size: 14px;          /* ← fonte 14px conforme Figma */
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.9;
  }
`