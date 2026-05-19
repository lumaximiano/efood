import { useDispatch } from 'react-redux'
import { limpar } from '../../store/reducers/carrinhoSlice'
import * as S from './styles'

type Props = {
  visible: boolean
  pedidoId: string
  onClose: () => void
}

const ModalConfirmacao = ({ visible, pedidoId, onClose }: Props) => {
  const dispatch = useDispatch()

  if (!visible) return null

  const handleConcluir = () => {
    dispatch(limpar())
    onClose()
  }

  return (
    <S.Overlay onClick={onClose}>
      <S.Modal onClick={(e) => e.stopPropagation()}>
        <S.Titulo>Pedido realizado - #{pedidoId}</S.Titulo>
        <S.Mensagem>
          Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
        </S.Mensagem>
        <S.Mensagem>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
        </S.Mensagem>
        <S.Mensagem>
          Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </S.Mensagem>
        <S.Mensagem>
          Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
        </S.Mensagem>
        <S.Botao onClick={handleConcluir}>Concluir</S.Botao>
      </S.Modal>
    </S.Overlay>
  )
}

export default ModalConfirmacao