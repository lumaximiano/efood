import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ItemCarrinho = {
  imagem: string | undefined
  id: number
  nome: string
  preco: number
  quantidade: number
}

type CarrinhoState = {
  itens: ItemCarrinho[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<ItemCarrinho>) => {
      const itemExistente = state.itens.find(item => item.id === action.payload.id)
      if (itemExistente) {
        itemExistente.quantidade++
      } else {
        state.itens.push({ ...action.payload, quantidade: 1 })
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(item => item.id !== action.payload)
    },
    limpar: (state) => {
      state.itens = [] 
    }
  }
})

export const { adicionar, remover, limpar } = carrinhoSlice.actions
export default carrinhoSlice.reducer