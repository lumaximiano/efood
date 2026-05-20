import starImg from '../../assets/images/star.png'
import * as S from './styles'

type Props = {
  id: number
  nome: string
  nota: number
  descricao: string
  tipo: string
  imagem: string
  destaque?: boolean
  onClick: () => void
}

const CardRestaurante = ({ nome, nota, descricao, tipo, imagem, destaque, onClick }: Props) => {
  return (
    <S.Card onClick={onClick}>
      <S.ImageContainer>
        <S.Imagem src={imagem} alt={nome} />
        <S.TagsContainer>
          {destaque && <S.TagDestaque>Destaque da semana</S.TagDestaque>}
          <S.TagTipo>{tipo}</S.TagTipo>
        </S.TagsContainer>
      </S.ImageContainer>
      <S.Info>
        <S.Linha>
          <S.Nome>{nome}</S.Nome>
          <S.Nota>
            {nota} <span><img src={starImg} alt="Estrela" /></span>
          </S.Nota>
        </S.Linha>
        <S.Descricao>{descricao}</S.Descricao>
        <S.Botao>Saiba mais</S.Botao>
      </S.Info>
    </S.Card>
  )
}

export default CardRestaurante