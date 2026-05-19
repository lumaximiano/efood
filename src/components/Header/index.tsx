import logoImg from '../../assets/images/logo.png'
import fundoHeroImg from '../../assets/images/fundo-hero.png'
import * as S from './styles'

const Header = () => {
  return (
    <S.HeroContainer>
       <S.FundoHero src={fundoHeroImg} alt="fundo" />
      <S.LogoImg src={logoImg} alt="efood" />
      <S.Titulo>
        Viva experiências gastronômicas no conforto da sua casa
      </S.Titulo>
    </S.HeroContainer>
  )
}

export default Header