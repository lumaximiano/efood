import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Tipo do produto
type Produto = {
  id: number
  nome: string
  descricao: string
  preco: number
  foto: string
  porcao: string
}

// Tipo do restaurante
type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Produto[]
}

type RestaurantesState = {
  itens: Restaurante[]
  carregando: boolean
  erro: string | null
}

const initialState: RestaurantesState = {
  itens: [],
  carregando: false,
  erro: null
}

const restaurantesSlice = createSlice({
  name: 'restaurantes',
  initialState,
  reducers: {
    iniciarCarregamento: (state) => {
      state.carregando = true
      state.erro = null
    },
    carregamentoSucesso: (state, action: PayloadAction<Restaurante[]>) => {
      state.itens = action.payload
      state.carregando = false
    },
    carregamentoErro: (state, action: PayloadAction<string>) => {
      state.carregando = false
      state.erro = action.payload
    }
  }
})

export const { iniciarCarregamento, carregamentoSucesso, carregamentoErro } = restaurantesSlice.actions
export default restaurantesSlice.reducer