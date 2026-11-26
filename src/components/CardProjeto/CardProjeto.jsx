import { useState } from 'react'
import './CardProjeto.css'

// Props recebidas: titulo, descricao, tecnologias, detalhes e link
export default function CardProjeto({ titulo, descricao, tecnologias, detalhes, link }) {
    // useState com BOOLEAN: os detalhes estão visíveis ou não?
    const [aberto, setAberto] = useState(false)

    // useState com NÚMERO: quantas curtidas o projeto tem
    const [curtidas, setCurtidas] = useState(0)

    function curtir() {
        setCurtidas((valorAtual) => valorAtual + 1)
    }

    return (
        <article className="card-projeto">
            <h3>{titulo}</h3>
            <p>{descricao}</p>

            <ul className="tecnologias">
                {tecnologias.map((tecnologia) => (
                    <li key={tecnologia}>{tecnologia}</li>
                ))}
            </ul>

            {/* Só aparece quando "aberto" for true */}
            {aberto && (
                <div className="detalhes">
                    <p>{detalhes}</p>
                    <a href={link} target="_blank" rel="noreferrer">
                        Ver no GitHub →
                    </a>
                </div>
            )}

            <div className="card-botoes">
                <button className="botao-secundario" onClick={() => setAberto(!aberto)}>
                    {aberto ? 'Ocultar detalhes' : 'Ver detalhes'}
                </button>
                <button className="botao-curtir" onClick={curtir}>
                    ♥ {curtidas}
                </button>
            </div>
        </article>
    )
}
