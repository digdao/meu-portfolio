import { useState } from 'react'
import './SobreMim.css'

// Props recebidas: interesses e objetivos (textos)
export default function SobreMim({ interesses, objetivos }) {
    // useState com STRING: guarda qual aba está aberta ('interesses' ou 'objetivos')
    const [aba, setAba] = useState('interesses')

    return (
        <section className="sobre">
            <h2 className="titulo-secao">Sobre mim</h2>

            <div className="abas">
                <button
                    className={aba === 'interesses' ? 'aba ativa' : 'aba'}
                    onClick={() => setAba('interesses')}
                >
                    Interesses
                </button>
                <button
                    className={aba === 'objetivos' ? 'aba ativa' : 'aba'}
                    onClick={() => setAba('objetivos')}
                >
                    Objetivos
                </button>
            </div>

            <p className="sobre-texto">
                {aba === 'interesses' ? interesses : objetivos}
            </p>
        </section>
    )
}
