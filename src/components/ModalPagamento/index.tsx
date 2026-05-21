import { useFormik } from 'formik'
import * as yup from 'yup'
import { formatarNumeroCartao, formatarCVV, formatarMes, formatarAno } from '../../utils'
import * as S from './styles'

type Props = {
  visible: boolean
  valorTotal: number
  estaEnviando?: boolean
  onClose: () => void
  onVoltar: () => void
  onFinalizar: (dadosCartao: any) => void
}

const schema = yup.object({
  nome: yup.string().required('Nome no cartão é obrigatório'),
  numero: yup.string()
    .required('Número do cartão é obrigatório')
    .min(19, 'Número deve ter 16 dígitos'),
  cvv: yup.string()
    .required('CVV é obrigatório')
    .min(3, 'CVV deve ter 3 dígitos')
    .max(3, 'CVV deve ter 3 dígitos'),
  mesVencimento: yup.string()
    .required('Mês é obrigatório')
    .test('mes-valido', 'Mês inválido (01-12)', (value) => {
      if (!value) return false
      const mes = Number(value)
      return mes >= 1 && mes <= 12
    }),
  anoVencimento: yup.string()
    .required('Ano é obrigatório')
    .test('ano-valido', 'Ano inválido', (value) => {
      if (!value) return false
      const ano = Number(value)
      const anoAtual = new Date().getFullYear()
      return ano >= anoAtual && ano <= anoAtual + 10
    })
})

const ModalPagamento = ({ visible, valorTotal, estaEnviando, onClose, onVoltar, onFinalizar }: Props) => {
  const formik = useFormik({
    initialValues: {
      nome: '',
      numero: '',
      cvv: '',
      mesVencimento: '',
      anoVencimento: ''
    },
    validationSchema: schema,
    onSubmit: (values) => {
      onFinalizar(values)
    }
  })

  if (!visible) return null

  return (
    <S.Overlay onClick={onClose}>
      <S.Modal onClick={(e) => e.stopPropagation()}>
        <S.Form onSubmit={formik.handleSubmit}>
          <S.Titulo>Pagamento - Valor a pagar R$ {valorTotal.toFixed(2)}</S.Titulo>

          <S.InputGroup>
            <S.Label>Nome no cartão</S.Label>
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

          <S.Row>
            <S.InputGroup>
              <S.Label>Número do cartão</S.Label>
              <S.Input
                name="numero"
                value={formik.values.numero}
                onChange={(e) => {
                  const formatado = formatarNumeroCartao(e.target.value)
                  formik.setFieldValue('numero', formatado)
                }}
                onBlur={formik.handleBlur}
              />
              {formik.touched.numero && formik.errors.numero && (
                <S.Error>{formik.errors.numero}</S.Error>
              )}
            </S.InputGroup>
            <S.InputGroup>
              <S.Label>CVV</S.Label>
              <S.Input
                name="cvv"
                value={formik.values.cvv}
                onChange={(e) => {
                  const formatado = formatarCVV(e.target.value)
                  formik.setFieldValue('cvv', formatado)
                }}
                onBlur={formik.handleBlur}
              />
              {formik.touched.cvv && formik.errors.cvv && (
                <S.Error>{formik.errors.cvv}</S.Error>
              )}
            </S.InputGroup>
          </S.Row>

          <S.Row>
            <S.InputGroup>
              <S.Label>Mês de vencimento</S.Label>
              <S.Input
                name="mesVencimento"
                value={formik.values.mesVencimento}
                onChange={(e) => {
                  const formatado = formatarMes(e.target.value)
                  formik.setFieldValue('mesVencimento', formatado)
                }}
                onBlur={formik.handleBlur}
              />
              {formik.touched.mesVencimento && formik.errors.mesVencimento && (
                <S.Error>{formik.errors.mesVencimento}</S.Error>
              )}
            </S.InputGroup>
            <S.InputGroup>
              <S.Label>Ano de vencimento</S.Label>
              <S.Input
                name="anoVencimento"
                value={formik.values.anoVencimento}
                onChange={(e) => {
                  const formatado = formatarAno(e.target.value)
                  formik.setFieldValue('anoVencimento', formatado)
                }}
                onBlur={formik.handleBlur}
              />
              {formik.touched.anoVencimento && formik.errors.anoVencimento && (
                <S.Error>{formik.errors.anoVencimento}</S.Error>
              )}
            </S.InputGroup>
          </S.Row>

          <S.ButtonGroup>
            <S.ButtonFinalizar type="submit" disabled={estaEnviando}>
              {estaEnviando ? 'Processando...' : 'Finalizar pagamento'}
            </S.ButtonFinalizar>
            <S.ButtonVoltar type="button" onClick={onVoltar}>
              Voltar para a edição de endereço
            </S.ButtonVoltar>
          </S.ButtonGroup>
        </S.Form>
      </S.Modal>
    </S.Overlay>
  )
}

export default ModalPagamento