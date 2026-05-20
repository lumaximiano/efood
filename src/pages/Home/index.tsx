import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Container } from '../../components/Container'
import CardRestaurante from '../../components/CardRestaurante'
import Header from '../../components/Header'
import { RootState } from '../../store'
import { fetchRestaurantes } from '../../services/api'
import * as S from './styles'

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { itens: restaurantes } = useSelector((state: RootState) => state.restaurantes)

  useEffect(() => {
    fetchRestaurantes().then(dados => {
      dispatch({ type: 'restaurantes/carregamentoSucesso', payload: dados })
    })
  }, [dispatch])

  return (
    <>
      <Header />
      <Container>
        <S.Grid>
          {restaurantes.map(rest => (
            <CardRestaurante
              key={rest.id}
              id={rest.id}
              nome={rest.titulo}
              nota={rest.avaliacao}
              descricao={rest.descricao}
              imagem={rest.capa}
              destaque={rest.destacado}
              tipo={rest.tipo}
              onClick={() => navigate(`/perfil/${rest.id}`)}
            />
          ))}
        </S.Grid>
      </Container>
    </>
  )
}

export default Home