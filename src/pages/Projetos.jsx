import CardProjeto from '../components/CardProjeto/CardProjeto'
import { projetos } from '../data/dados'

// Página de projetos (rota "/projetos")
export default function Projetos() {
    return (
        <section>
            <h2 className="titulo-secao">Projetos e experiências</h2>

            <div className="grade-projetos">
                {/* Um CardProjeto para cada item da lista; o "key" identifica cada card */}
                {projetos.map((projeto) => (
                    <CardProjeto
                        key={projeto.id}
                        titulo={projeto.titulo}
                        descricao={projeto.descricao}
                        tecnologias={projeto.tecnologias}
                        detalhes={projeto.detalhes}
                        link={projeto.link}
                    />
                ))}
            </div>
        </section>
    )
}
