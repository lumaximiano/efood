import * as S from './styles'

type Props = {
  nome: string
  descricao: string
  imagem: string
  onClick: () => void
}

const CardProduto = ({ nome, descricao, imagem, onClick }: Props) => {
  return (
    <S.Card>
      <S.Imagem src={imagem} alt={nome} />
      <S.Info>
        <S.Nome>{nome}</S.Nome>
        <S.Descricao>{descricao}</S.Descricao>
        <S.Botao onClick={onClick} >Mais detalhes</S.Botao>
      </S.Info>
    </S.Card>
  )
}

export default CardProduto