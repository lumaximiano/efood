import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import { GlobalStyle } from './styles/GlobalStyles'
import Footer from './components/Footer'
import Home from './pages/Home'
import Perfil from './pages/Perfil'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil/:id" element={<Perfil />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App