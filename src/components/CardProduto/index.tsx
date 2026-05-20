import * as S from './styles'

type Props = {
  key: string
  nome: string
  descricao: string
  imagem: string
  onClick: () => void
}

const CardProduto = ({ key, nome, descricao, imagem, onClick }: Props) => {
  return (
    <S.Card key={key}>
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