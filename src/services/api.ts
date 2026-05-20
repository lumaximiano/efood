// URL da API que você me enviou
const API_URL = 'https://api-ebac.vercel.app/api/efood/restaurantes'

// Função que vai buscar os restaurantes
export const fetchRestaurantes = async () => {
  try {
    const resposta = await fetch(API_URL)
    
    if (!resposta.ok) {
      throw new Error('Erro ao carregar os dados')
    }
    
    const dados = await resposta.json()
    return dados
  } catch (error) {
    console.error('Erro na API:', error)
    throw error
  }
}