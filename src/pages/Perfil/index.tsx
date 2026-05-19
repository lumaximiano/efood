import { useDispatch, useSelector } from 'react-redux'
import { adicionar } from '../../store/reducers/carrinhoSlice'
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { RootState } from '../../store'
import { Container } from '../../components/Container'
import CardProduto from '../../components/CardProduto'
import bannerItaliana from '../../assets/images/perfil-italiana.png'
import bannerJapones from '../../assets/images/perfil-japonesa.png'
import logoImg from '../../assets/images/logo.png'
import pizzaImg from '../../assets/images/pizza-marguerita.png'
import salmaoImg from '../../assets/images/salmao.png'
import fundoHeroPerfilImg from '../../assets/images/fundo-hero-perfil.png'
import ModalProduto from '../../components/ModalProduto'
import ModalCarrinho from '../../components/ModalCarrinho'
import ModalEntrega from '../../components/ModalEntrega'
import ModalPagamento from '../../components/ModalPagamento'
import ModalConfirmacao from '../../components/ModalConfirmacao'
import * as S from './styles'

// Dados por ID do restaurante
const restaurantesData: Record<string, any> = {
  '1': {
    banner: bannerJapones,
    categoria: 'Japonesa',
    nome: 'Hioki Sushi',
    produtos: Array(6).fill({
      nome: 'Salmão',
      descricao: 'O clássico da culinária japonesa: niguiris e uramakis de salmão fresco e suave, com gergelim crocante e cebolinha frita. Sabor e tradição em cada peça!',
      descricaoModal: 'O Salmão é um clássico da culinária japonesa, reconhecido por sua textura macia e sabor marcante. Ele é preparado com arroz temperado na medida certa, envolto por fatias generosas de salmão fresco de alta qualidade, finalizado com gergelim crocante e cebolinha frita.',
      preco: 59.90,
      serve: 'Serve: de 2 a 3 pessoas',
      imagem: salmaoImg
    }).map((produto, index) => ({ ...produto, id: 1 * 100 + index + 1 }))
  },
  '2': {
    banner: bannerItaliana,
    categoria: 'Italiana',
    nome: 'La Dolce Vita Trattoria',
    produtos: Array(6).fill({
      nome: 'Pizza Marguerita',
      descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      descricaoModal: 'A pizza Marguerita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem.',
      preco: 59.90,
      serve: 'Serve: de 2 a 3 pessoas',
      imagem: pizzaImg
    }).map((produto, index) => ({ ...produto, id: 2 * 100 + index + 1 }))
  }
}

const Perfil = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const { itens } = useSelector((state: RootState) => state.carrinho)
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

  const restaurante = restaurantesData[id || '1']

  const abrirModal = (produto: any) => {
    setProdutoSelecionado({
      id: produto.id,
      nome: produto.nome,
      descricaoModal: produto.descricaoModal,
      preco: produto.preco,
      serve: produto.serve,
      imagem: produto.imagem
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
        <S.BannerImg src={restaurante.banner} alt={restaurante.nome} />
        <Container>
          <S.BannerTextContainer>
            <S.BannerCategoria>{restaurante.categoria}</S.BannerCategoria>
            <S.BannerTitle>{restaurante.nome}</S.BannerTitle>
          </S.BannerTextContainer>
        </Container>
      </S.Banner>

      <Container>
        <S.Grid>
          {restaurante.produtos.map((produto: any) => (
            <CardProduto
              key={produto.id}
              nome={produto.nome}
              descricao={produto.descricao}
              imagem={produto.imagem}
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
          console.log('🚨 DENTRO DO ONCONTINUAR DO PERFIL')
          console.log('setPagamentoAberto antes:', pagamentoAberto)
          setEntregaAberto(false)
          setPagamentoAberto(true)
          console.log('setPagamentoAberto depois: true')
          console.log('entregaAberto depois:', entregaAberto)
          console.log('pagamentoAberto depois:', pagamentoAberto)
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