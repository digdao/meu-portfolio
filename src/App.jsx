import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Inicio from './pages/Inicio'
import Projetos from './pages/Projetos'
import Contato from './pages/Contato'
import { perfil } from './data/dados'

function App() {
  return (
    <div className="app">
      {/* O nome vai por props para o Header e o Footer */}
      <Header nome={perfil.nome} />

      <main className="conteudo">
        {/* Cada Route mostra uma página diferente conforme o endereço */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/contato" element={<Contato />} />
          {/* Endereço que não existe volta para o início */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer nome={perfil.nome} />
    </div>
  )
}

export default App
