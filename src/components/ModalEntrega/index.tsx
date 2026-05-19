import { useState } from 'react'
import * as S from './styles'

type Props = {
  visible: boolean
  onClose: () => void
  onVoltar: () => void
  onContinuar: () => void
}

const ModalEntrega = ({ visible, onClose, onVoltar, onContinuar }: Props) => {
  const [endereco, setEndereco] = useState({
    nome: '',
    endereco: '',
    cidade: '',
    cep: '',
    numero: '',
    complemento: ''
  })

  if (!visible) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndereco({ ...endereco, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('🔵 handleSubmit chamado - onContinuar será chamado')
    onContinuar()  // próximo: pagamento
  }

  return (
    <S.Overlay onClick={onClose}>
      <S.Modal onClick={(e) => e.stopPropagation()}>
        <S.Form onSubmit={handleSubmit}>
          <S.Titulo>Entrega</S.Titulo>

          <S.InputGroup>
            <S.Label>Quem irá receber</S.Label>
            <S.Input name="nome" value={endereco.nome} onChange={handleChange} required />
          </S.InputGroup>

          <S.InputGroup>
            <S.Label>Endereço</S.Label>
            <S.Input name="endereco" value={endereco.endereco} onChange={handleChange} required />
          </S.InputGroup>

          <S.InputGroup>
            <S.Label>Cidade</S.Label>
            <S.Input name="cidade" value={endereco.cidade} onChange={handleChange} required />
          </S.InputGroup>

          <S.Row>
            <S.InputGroup>
              <S.Label>CEP</S.Label>
              <S.Input name="cep" value={endereco.cep} onChange={handleChange} required />
            </S.InputGroup>
            <S.InputGroup>
              <S.Label>Número</S.Label>
              <S.Input name="numero" value={endereco.numero} onChange={handleChange} required />
            </S.InputGroup>
          </S.Row>

          <S.InputGroupComplemento>
            <S.Label>Complemento (opcional)</S.Label>
            <S.Input name="complemento" value={endereco.complemento} onChange={handleChange} />
          </S.InputGroupComplemento>

          <S.ButtonGroup>
            <S.ButtonContinuar type="button" onClick={() => onContinuar()}>
              Continuar com o pagamento
            </S.ButtonContinuar>
            <S.ButtonVoltar type="button" onClick={onVoltar}>Voltar para o carrinho</S.ButtonVoltar>
          </S.ButtonGroup>
        </S.Form>
      </S.Modal>
    </S.Overlay>
  )
}

export default ModalEntrega