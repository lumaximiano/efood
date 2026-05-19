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
  z-index: 1000;
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

export const Content = styled(ContainerModal)`
  display: flex;
  flex-direction: column;
  width: 100%;          
`

export const Titulo = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.colors.background2};
  margin-bottom: 24px;
  width: 100%;
`

export const Lista = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`

export const Item = styled.div`
  width: 100%;
  background-color: ${theme.colors.background2};
  border-radius: 5px;
  padding: 10px;
  display: flex;
  position: relative;
  box-sizing: border-box;
`

export const Imagem = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 5px;
`

export const ItemInfo = styled.div`
  margin-left: 12px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ItemNome = styled.h3`
  color: ${theme.colors.primary};
  font-size: 18px;
  font-weight: 900;
  margin: 0;
`

export const ItemPreco = styled.p`
  color: ${theme.colors.primary};
  font-size: 14px;
  font-weight: 400;
  margin: 18px 0 0 0;
`

export const BotaoRemover = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  
  img {
    width: 16px;
    height: 16px;
  }

  &:hover {
    opacity: 0.7;
  }
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 16px;
  width: 100%;
`

export const TotalTexto = styled.span`
  color: ${theme.colors.background2};
  font-size: 14px;
  font-weight: 700;
`

export const TotalValor = styled.span`
  color: ${theme.colors.background2};
  font-size: 14px;
  font-weight: bold;
`

export const BotaoContinuar = styled.button`
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

export const EmptyCart = styled.div`
  background-color: ${theme.colors.background2};
  color: ${theme.colors.primary};
  text-align: center;
  padding: 40px 0;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
`