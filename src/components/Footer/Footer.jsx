import './Footer.css'

// Calculado uma vez, fora do componente
const anoAtual = new Date().getFullYear()

// Props recebidas: nome
export default function Footer({ nome }) {
    return (
        <footer className="footer">
            <p>
                © {anoAtual} {nome} · Feito com React + Vite
            </p>
        </footer>
    )
}
