import logoImg from '../../assets/images/logo.png'
import facebookImg from '../../assets/images/facebook.png'
import instagramImg from '../../assets/images/instagram.png'
import twitterImg from '../../assets/images/twitter.png'
import * as S from './styles'

const Footer = () => {
  return (
    <S.FooterBar>
      <S.Container>
        <S.LogoImg src={logoImg} alt="efood" />
        <S.Redes>
          <S.Icone src={instagramImg} alt="Instagram" />
          <S.Icone src={facebookImg} alt="Facebook" />
          <S.Icone src={twitterImg} alt="Twitter" />
        </S.Redes>
        <S.Texto>
          A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
        </S.Texto>
      </S.Container>
    </S.FooterBar>
  )
}

export default Footer