import { useState } from 'react'
import * as S from './styles'

type Props = {
  visible: boolean
  valorTotal: number
  onClose: () => void
  onVoltar: () => void
  onFinalizar: () => void
}

const ModalPagamento = ({ visible, valorTotal, onClose, onVoltar, onFinalizar }: Props) => {
  const [cartao, setCartao] = useState({
    nome: '',
    numero: '',
    cvv: '',
    mesVencimento: '',
    anoVencimento: ''
  })

  if (!visible) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCartao({ ...cartao, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onFinalizar()
  }

  return (
    <S.Overlay onClick={onClose}>
      <S.Modal onClick={(e) => e.stopPropagation()}>
        <S.Form onSubmit={handleSubmit}>
          <S.Titulo>Pagamento - Valor a pagar R$ {valorTotal.toFixed(2)}</S.Titulo>

          <S.InputGroup>
            <S.Label>Nome no cartão</S.Label>
            <S.Input
              name="nome"
              value={cartao.nome}
              onChange={handleChange}
              required
            />
          </S.InputGroup>

          <S.Row>
            <S.InputGroup>
              <S.Label>Número do cartão</S.Label>
              <S.Input name="numero" value={cartao.numero} onChange={handleChange} required />
            </S.InputGroup>
            <S.InputGroup>
              <S.Label>CVV</S.Label>
              <S.Input name="cvv" value={cartao.cvv} onChange={handleChange} required />
            </S.InputGroup>
          </S.Row>

          <S.Row>
            <S.InputGroup>
              <S.Label>Mês de vencimento</S.Label>
              <S.Input name="mesVencimento" value={cartao.mesVencimento} onChange={handleChange} required />
            </S.InputGroup>
            <S.InputGroup>
              <S.Label>Ano de vencimento</S.Label>
              <S.Input name="anoVencimento" value={cartao.anoVencimento} onChange={handleChange} required />
            </S.InputGroup>
          </S.Row>

          <S.ButtonGroup>
            <S.ButtonFinalizar type="button" onClick={onFinalizar}>
              Finalizar pagamento
            </S.ButtonFinalizar>
            <S.ButtonVoltar type="button" onClick={onVoltar}>Voltar para a edição de endereço</S.ButtonVoltar>
          </S.ButtonGroup>
        </S.Form>
      </S.Modal>
    </S.Overlay>
  )
}

export default ModalPagamento