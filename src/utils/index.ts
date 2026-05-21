// ============ CEP ============
// Formata CEP: 12345678 → 12345-678
export const formatarCEP = (cep: string) => {
  const numeros = cep.replace(/\D/g, '')
  if (numeros.length <= 5) return numeros
  return `${numeros.slice(0, 5)}-${numeros.slice(5, 8)}`
}

// Remove formatação do CEP (só números)
export const limparCEP = (cep: string) => {
  return cep.replace(/\D/g, '')
}

// ============ CARTÃO ============
// Formata número do cartão: 1234567890123456 → 1234 5678 9012 3456
export const formatarNumeroCartao = (numero: string) => {
  const numeros = numero.replace(/\D/g, '')
  const grupos = []
  for (let i = 0; i < numeros.length && i < 16; i += 4) {
    grupos.push(numeros.slice(i, i + 4))
  }
  return grupos.join(' ')
}

// ============ VALIDADE ============
// Formata validade para exibição: 1225 → 12/25
export const formatarValidade = (validade: string) => {
  const numeros = validade.replace(/\D/g, '')
  if (numeros.length <= 2) return numeros
  return `${numeros.slice(0, 2)}/${numeros.slice(2, 4)}`
}

// Converte validade formatada (12/25) para a API: { month: 12, year: 2025 }
export const converterValidadeParaAPI = (validade: string) => {
  const [mes, ano] = validade.split('/')
  return {
    month: Number(mes),
    year: Number(ano) + 2000
  }
}

// ============ CVV ============
// Formata CVV: só 3 números
export const formatarCVV = (cvv: string) => {
  return cvv.replace(/\D/g, '').slice(0, 3)
}

// ============ APENAS NÚMEROS ============
// Remove tudo que não é número
export const apenasNumeros = (valor: string) => {
  return valor.replace(/\D/g, '')
}

// ============ MÊS (campo separado) ============
// Formata mês (01-12)
export const formatarMes = (mes: string) => {
  let numeros = apenasNumeros(mes)
  if (numeros.length >= 2) {
    let valor = Number(numeros.slice(0, 2))
    if (valor > 12) valor = 12
    if (valor < 1) valor = 1
    return valor.toString().padStart(2, '0')
  }
  return numeros
}

// Valida mês
export const validarMes = (mes: string) => {
  const mesNumero = Number(mes)
  return mesNumero >= 1 && mesNumero <= 12
}

// ============ ANO (campo separado) ============
// Formata ano (4 dígitos)
export const formatarAno = (ano: string) => {
  let numeros = apenasNumeros(ano)
  if (numeros.length >= 4) {
    return numeros.slice(0, 4)
  }
  return numeros
}

// Valida ano (>= ano atual e <= ano atual + 10)
export const validarAno = (ano: string) => {
  const anoAtual = new Date().getFullYear()
  const anoNumero = Number(ano)
  return anoNumero >= anoAtual && anoNumero <= anoAtual + 10
}