import { Link } from 'react-router-dom'
import './Apresentacao.css'

// Props recebidas: nome, cargo, cidade, descricao e foto
export default function Apresentacao({ nome, cargo, cidade, descricao, foto }) {
    return (
        <section className="apresentacao">
            <img className="foto" src={foto} alt={`Foto de perfil de ${nome}`} />

            <div className="apresentacao-texto">
                <p className="saudacao">Olá, eu sou</p>
                <h1>{nome}</h1>
                <h2 className="cargo">{cargo}</h2>
                <p className="cidade">{cidade}</p>
                <p className="descricao">{descricao}</p>
                <Link to="/projetos" className="botao">Ver projetos</Link>
            </div>
        </section>
    )
}
