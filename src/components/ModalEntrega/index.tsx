import { useFormik } from 'formik'
import * as yup from 'yup'
import { formatarCEP } from '../../utils'
import * as S from './styles'

type Endereco = {
  nome: string
  endereco: string
  cidade: string
  cep: string
  numero: string
  complemento: string
}

type Props = {
  visible: boolean
  onClose: () => void
  onVoltar: () => void
  onContinuar: (endereco: Endereco) => void
}

const schema = yup.object({
  nome: yup.string().required('Nome é obrigatório'),
  endereco: yup.string().required('Endereço é obrigatório'),
  cidade: yup.string().required('Cidade é obrigatória'),
  cep: yup.string().required('CEP é obrigatório').min(9, 'CEP deve ter 8 números'),
  numero: yup.string().required('Número é obrigatório'),
  complemento: yup.string()
})

const ModalEntrega = ({ visible, onClose, onVoltar, onContinuar }: Props) => {
  const formik = useFormik({
    initialValues: {
      nome: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: ''
    },
    validationSchema: schema,
    onSubmit: (values) => {
      onContinuar(values)
    }
  })

  if (!visible) return null

  return (
    <S.Overlay onClick={onClose}>
      <S.Modal onClick={(e) => e.stopPropagation()}>
        <S.Form onSubmit={formik.handleSubmit}>
          <S.Titulo>Entrega</S.Titulo>

          <S.InputGroup>
            <S.Label>Quem irá receber</S.Label>
            <S.Input
              name="nome"
              value={formik.values.nome}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.nome && formik.errors.nome && (
              <S.Error>{formik.errors.nome}</S.Error>
            )}
          </S.InputGroup>

          <S.InputGroup>
            <S.Label>Endereço</S.Label>
            <S.Input
              name="endereco"
              value={formik.values.endereco}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.endereco && formik.errors.endereco && (
              <S.Error>{formik.errors.endereco}</S.Error>
            )}
          </S.InputGroup>

          <S.InputGroup>
            <S.Label>Cidade</S.Label>
            <S.Input
              name="cidade"
              value={formik.values.cidade}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.cidade && formik.errors.cidade && (
              <S.Error>{formik.errors.cidade}</S.Error>
            )}
          </S.InputGroup>

          <S.Row>
            <S.InputGroup>
              <S.Label>CEP</S.Label>
              <S.Input
                name="cep"
                value={formik.values.cep}
                onChange={(e) => {
                  const cepFormatado = formatarCEP(e.target.value)
                  formik.setFieldValue('cep', cepFormatado)
                }}
                onBlur={formik.handleBlur}
              />
              {formik.touched.cep && formik.errors.cep && (
                <S.Error>{formik.errors.cep}</S.Error>
              )}
            </S.InputGroup>
            <S.InputGroup>
              <S.Label>Número</S.Label>
              <S.Input
                name="numero"
                value={formik.values.numero}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.numero && formik.errors.numero && (
                <S.Error>{formik.errors.numero}</S.Error>
              )}
            </S.InputGroup>
          </S.Row>

          <S.InputGroupComplemento>
            <S.Label>Complemento (opcional)</S.Label>
            <S.Input
              name="complemento"
              value={formik.values.complemento}
              onChange={formik.handleChange}
            />
          </S.InputGroupComplemento>

          <S.ButtonGroup>
            <S.ButtonContinuar type="submit">Continuar com o pagamento</S.ButtonContinuar>
            <S.ButtonVoltar type="button" onClick={onVoltar}>Voltar para o carrinho</S.ButtonVoltar>
          </S.ButtonGroup>
        </S.Form>
      </S.Modal>
    </S.Overlay>
  )
}

export default ModalEntrega