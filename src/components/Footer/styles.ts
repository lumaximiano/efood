import styled from 'styled-components'
import { theme } from '../../styles/Theme'

export const FooterBar = styled.footer`
  background-color: ${theme.colors.background2};  /* #FFEBD9 */
  padding: 40px 0;
  margin-top: 60px;
`

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 16px;
  text-align: center;
`

export const LogoImg = styled.img`
  width: auto;
  height: 60px;           
  margin-bottom: 20px;    
`

export const Redes = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;               
  margin-bottom: 30px;     
`

export const Icone = styled.img`
  width: 24px;             
  height: 24px;
  cursor: pointer;
`

export const Texto = styled.p`
  font-size: 12px;        
  color: ${theme.colors.primary};
  max-width: 480px;
  margin: 0 auto;
`