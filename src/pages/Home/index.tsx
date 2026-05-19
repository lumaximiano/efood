import { useNavigate } from 'react-router-dom'
import { Container } from '../../components/Container'
import CardRestaurante from '../../components/CardRestaurante'
import * as S from './styles'
import Header from '../../components/Header'

type Restaurante = {
  id: number
  nome: string
  nota: number
  descricao: string
  imagem: string
  destaque?: boolean
  tipo: 'japonesa' | 'italiana'
}

const restaurantes: Restaurante[] = [
  {
    id: 1,
    nome: 'Hioki Sushi',
    nota: 4.9,
    descricao: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    imagem: 'https://via.placeholder.com/300x180',
    destaque: true,
    tipo: 'japonesa'  
  },
  {
    id: 2,
    nome: 'La Dolce Vita Trattoria',
    nota: 4.6,
    descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: 'https://via.placeholder.com/300x180',
    destaque: false,
    tipo: 'italiana'  
  },
  {
    id: 3,
    nome: 'La Dolce Vita Trattoria',
    nota: 4.6,
    descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: 'https://via.placeholder.com/300x180',
    destaque: false,
    tipo: 'italiana'
  },
  {
    id: 4,
    nome: 'La Dolce Vita Trattoria',
    nota: 4.6,
    descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: 'https://via.placeholder.com/300x180',
    destaque: false,
    tipo: 'italiana'
  },
  {
    id: 5,
    nome: 'La Dolce Vita Trattoria',
    nota: 4.6,
    descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: 'https://via.placeholder.com/300x180',
    destaque: false,
    tipo: 'italiana'
  },
  {
    id: 6,
    nome: 'La Dolce Vita Trattoria',
    nota: 4.6,
    descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: 'https://via.placeholder.com/300x180',
    destaque: false,
    tipo: 'italiana'
  }
]
const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <Header />
      <Container>
        <S.Grid>
          {restaurantes.map(rest => (
            <CardRestaurante
              key={rest.id}
              {...rest}
              onClick={() => navigate(`/perfil/${rest.id}`)}
            />
          ))}
        </S.Grid>
      </Container>
    </>
  )
}

export default Home