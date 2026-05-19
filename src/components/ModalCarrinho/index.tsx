import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { RootState } from '../../store'
import { remover } from '../../store/reducers/carrinhoSlice'
import lixeiraImg from '../../assets/images/lixeira.png'
import * as S from './styles'

type Props = {
  visible: boolean
  onClose: () => void
  onContinuar: () => void
}

const ModalCarrinho = ({ visible, onClose, onContinuar }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootState) => state.carrinho)

  const total = itens.reduce((acc, item) => acc + item.preco * item.quantidade, 0)

  // Controla o scroll do body quando o modal está aberto
  // useEffect(() => {
  //   if (visible) {
  //     document.body.style.overflow = 'hidden'
  //   } else {
  //     document.body.style.overflow = 'auto'
  //   }
  //   return () => {
  //     document.body.style.overflow = 'auto'
  //   }
  // }, [visible])

  if (!visible) return null

  const handleContinuar = () => {
    onClose()
    onContinuar()
  }

  return (
    <S.Overlay onClick={onClose}>
      <S.Modal onClick={(e) => e.stopPropagation()}>

        {itens.length === 0 ? (
          <S.EmptyCart>Seu carrinho está vazio</S.EmptyCart>
        ) : (
          <>
            <S.Lista>
              {itens.map((item) => (
                <S.Item key={item.id}>
                  <S.Imagem src={item.imagem} alt={item.nome} />
                  <S.ItemInfo>
                    <div>
                      <S.ItemNome>{item.nome}</S.ItemNome>
                      <S.ItemPreco>R$ {item.preco.toFixed(2)}</S.ItemPreco>
                    </div>
                  </S.ItemInfo>
                  <S.BotaoRemover onClick={() => dispatch(remover(item.id))}>
                    <img src={lixeiraImg} alt="Remover" />
                  </S.BotaoRemover>
                </S.Item>
              ))}
            </S.Lista>

            <S.Total>
              <S.TotalTexto>Valor total</S.TotalTexto>
              <S.TotalValor>R$ {total.toFixed(2)}</S.TotalValor>
            </S.Total>

            <S.BotaoContinuar onClick={handleContinuar}>
              Continuar com a entrega
            </S.BotaoContinuar>
          </>
        )}
      </S.Modal>
    </S.Overlay>
  )
}

export default ModalCarrinho