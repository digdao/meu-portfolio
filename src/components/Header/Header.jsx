import { NavLink } from 'react-router-dom'
import './Header.css'

// Props recebidas: nome (vem do App.jsx)
export default function Header({ nome }) {
    // Pega só o primeiro nome para usar como logo
    const primeiroNome = nome.split(' ')[0]

    return (
        <header className="header">
            <span className="logo">
                {primeiroNome}
                <span className="logo-ponto">.</span>
            </span>

            {/* NavLink troca de página sem recarregar e ganha a classe "active" na página atual */}
            <nav className="menu">
                <NavLink to="/" end>Início</NavLink>
                <NavLink to="/projetos">Projetos</NavLink>
                <NavLink to="/contato">Contato</NavLink>
            </nav>
        </header>
    )
}
