import Apresentacao from '../components/Apresentacao/Apresentacao'
import Habilidades from '../components/Habilidades/Habilidades'
import SobreMim from '../components/SobreMim/SobreMim'
import { perfil, habilidades, categorias, sobreMim } from '../data/dados'

// Página inicial (rota "/"): apresentação, habilidades e sobre mim
export default function Inicio() {
    return (
        <>
            <Apresentacao
                nome={perfil.nome}
                cargo={perfil.cargo}
                cidade={perfil.cidade}
                descricao={perfil.descricao}
                foto={perfil.foto}
            />
            <Habilidades lista={habilidades} categorias={categorias} />
            <SobreMim interesses={sobreMim.interesses} objetivos={sobreMim.objetivos} />
        </>
    )
}
