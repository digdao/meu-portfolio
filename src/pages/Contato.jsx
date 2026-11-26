import FormularioContato from '../components/FormularioContato/FormularioContato'
import { contato } from '../data/dados'
import './Contato.css'

// Página de contato (rota "/contato")
export default function Contato() {
    return (
        <section className="contato">
            <h2 className="titulo-secao">Contato</h2>
            <p className="contato-texto">
                Vamos conversar? Me encontre nos links abaixo ou envie uma mensagem.
            </p>

            <ul className="links-contato">
                <li><a href={`mailto:${contato.email}`}>E-mail</a></li>
                <li><a href={contato.github} target="_blank" rel="noreferrer">GitHub</a></li>
                <li><a href={contato.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>

            <FormularioContato email={contato.email} />
        </section>
    )
}
