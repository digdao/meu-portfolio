import { useState } from 'react'
import './Habilidades.css'

// Props recebidas: lista (as habilidades) e categorias (os nomes das abas)
export default function Habilidades({ lista, categorias }) {
    // useState com STRING: guarda qual aba está selecionada
    const [categoriaAtiva, setCategoriaAtiva] = useState('Todas')

    // Se for "Todas" mostra tudo; senão filtra pela categoria escolhida
    const listaFiltrada =
        categoriaAtiva === 'Todas'
            ? lista
            : lista.filter((item) => item.categoria === categoriaAtiva)

    return (
        <section className="habilidades">
            <h2 className="titulo-secao">Habilidades</h2>

            <div className="abas">
                {categorias.map((categoria) => (
                    <button
                        key={categoria}
                        className={categoria === categoriaAtiva ? 'aba ativa' : 'aba'}
                        onClick={() => setCategoriaAtiva(categoria)}
                    >
                        {categoria}
                    </button>
                ))}
            </div>

            <ul className="lista-habilidades">
                {listaFiltrada.map((item) => (
                    <li key={item.id} className="habilidade">
                        <span className="habilidade-nome">{item.nome}</span>
                        <span
                            className={
                                item.status === 'Estudando' ? 'status estudando' : 'status conheco'
                            }
                        >
                            {item.status}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    )
}
