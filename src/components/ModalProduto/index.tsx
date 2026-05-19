import { FiX } from 'react-icons/fi'
import * as S from './styles'

type Props = {
  visible: boolean
  produto: {
    nome: string
    descricaoModal: string
    preco: number
    serve: string
    imagem: string
  } | null
  onClose: () => void
  onAdicionar: () => void
}

const ModalProduto = ({ visible, produto, onClose, onAdicionar }: Props) => {
  if (!visible || !produto) return null

  return (
    <S.Overlay onClick={onClose}>
      <S.Modal onClick={(e) => e.stopPropagation()}>
        <S.Fechar onClick={onClose}>
          <FiX size={16} />
        </S.Fechar>
        <S.Content>
          <S.Imagem src={produto.imagem} alt={produto.nome} />
          <S.Info>
            <S.Titulo>{produto.nome}</S.Titulo>
            <S.Descricao>{produto.descricaoModal}</S.Descricao>
            <S.Serve>{produto.serve}</S.Serve>
            <S.Botao onClick={onAdicionar}>
              Adicionar ao carrinho - R$ {produto.preco?.toFixed(2) || '0,00'}
            </S.Botao>
          </S.Info>
        </S.Content>
      </S.Modal>
    </S.Overlay>
  )
}

export default ModalProduto