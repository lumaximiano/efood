import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adicionar } from '../../store/reducers/carrinhoSlice'
import { useParams, useNavigate } from 'react-router-dom'
import { RootState } from '../../store'
import { Container } from '../../components/Container'
import CardProduto from '../../components/CardProduto'
import logoImg from '../../assets/images/logo.png'
import fundoHeroPerfilImg from '../../assets/images/fundo-hero-perfil.png'
import ModalProduto from '../../components/ModalProduto'
import ModalCarrinho from '../../components/ModalCarrinho'
import ModalEntrega from '../../components/ModalEntrega'
import ModalPagamento from '../../components/ModalPagamento'
import ModalConfirmacao from '../../components/ModalConfirmacao'
import { fetchRestaurantes } from '../../services/api'
import * as S from './styles'

const Perfil = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const { itens } = useSelector((state: RootState) => state.carrinho)
  const { itens: restaurantes } = useSelector((state: RootState) => state.restaurantes)
  
  const totalItens = itens.reduce((acc, item) => acc + item.quantidade, 0)
  const total = itens.reduce((acc, item) => acc + item.preco * item.quantidade, 0)

  // Estados dos modais
  const [modalAberto, setModalAberto] = useState(false)
  const [produtoSelecionado, setProdutoSelecionado] = useState<any>(null)
  const [carrinhoAberto, setCarrinhoAberto] = useState(false)
  const [entregaAberto, setEntregaAberto] = useState(false)
  const [pagamentoAberto, setPagamentoAberto] = useState(false)
  const [confirmacaoAberto, setConfirmacaoAberto] = useState(false)
  const [pedidoId, setPedidoId] = useState('')

  // Buscar dados da API se não tiver
  useEffect(() => {
    if (restaurantes.length === 0) {
      fetchRestaurantes().then(dados => {
        dispatch({ type: 'restaurantes/carregamentoSucesso', payload: dados })
      })
    }
  }, [dispatch, restaurantes.length])

  const restaurante = restaurantes.find((r: any) => r.id === Number(id))

  if (!restaurante) {
    return <Container>Carregando...</Container>
  }

  const abrirModal = (produto: any) => {
    setProdutoSelecionado({
      id: produto.id,
      nome: produto.nome,
      descricaoModal: produto.descricao,
      preco: produto.preco,
      serve: produto.porcao,
      imagem: produto.foto
    })
    setModalAberto(true)
  }

  const adicionarAoCarrinho = () => {
    if (produtoSelecionado) {
      dispatch(adicionar({
        id: produtoSelecionado.id,
        nome: produtoSelecionado.nome,
        preco: produtoSelecionado.preco,
        quantidade: 1,
        imagem: produtoSelecionado.imagem
      }))
    }
    setModalAberto(false)
  }

  return (
    <>
      <S.HeroContainer>
        <S.FundoHeroPerfil src={fundoHeroPerfilImg} alt="fundo" />
        <S.HeroContent>
          <S.RestaurantesLink onClick={() => navigate('/')}>Restaurantes</S.RestaurantesLink>
          <S.LogoImg src={logoImg} alt="efood" />
          <S.CarrinhoInfo onClick={() => setCarrinhoAberto(true)}>
            {totalItens} produto(s) no carrinho
          </S.CarrinhoInfo>
        </S.HeroContent>
      </S.HeroContainer>

      <S.Banner>
        <S.BannerImg src={restaurante.capa} alt={restaurante.titulo} />
        <Container>
          <S.BannerTextContainer>
            <S.BannerCategoria>{restaurante.tipo}</S.BannerCategoria>
            <S.BannerTitle>{restaurante.titulo}</S.BannerTitle>
          </S.BannerTextContainer>
        </Container>
      </S.Banner>

      <Container>
        <S.Grid>
          {restaurante.cardapio.map((produto: any) => (
            <CardProduto
              key={produto.id}
              nome={produto.nome}
              descricao={produto.descricao}
              imagem={produto.foto}
              onClick={() => abrirModal(produto)}
            />
          ))}
        </S.Grid>
      </Container>

      <ModalProduto
        visible={modalAberto}
        produto={produtoSelecionado}
        onClose={() => setModalAberto(false)}
        onAdicionar={adicionarAoCarrinho}
      />

      <ModalCarrinho
        visible={carrinhoAberto}
        onClose={() => setCarrinhoAberto(false)}
        onContinuar={() => {
          setCarrinhoAberto(false)
          setEntregaAberto(true)
        }}
      />

      <ModalEntrega
        visible={entregaAberto}
        onClose={() => setEntregaAberto(false)}
        onVoltar={() => {
          setEntregaAberto(false)
          setCarrinhoAberto(true)
        }}
        onContinuar={() => {
          setEntregaAberto(false)
          setPagamentoAberto(true)
        }}
      />

      <ModalPagamento
        visible={pagamentoAberto}
        valorTotal={total}
        onClose={() => setPagamentoAberto(false)}
        onVoltar={() => {
          setPagamentoAberto(false)
          setEntregaAberto(true)
        }}
        onFinalizar={() => {
          const ORDER_ID = Math.floor(Math.random() * 1000).toString()
          setPedidoId(ORDER_ID)
          setPagamentoAberto(false)
          setConfirmacaoAberto(true)
        }}
      />

      <ModalConfirmacao
        visible={confirmacaoAberto}
        pedidoId={pedidoId}
        onClose={() => {
          setConfirmacaoAberto(false)
          navigate('/')
        }}
      />
    </>
  )
}

export default Perfil