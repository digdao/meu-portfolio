import { useState } from 'react'
import './FormularioContato.css'

// Props recebidas: email (para onde a mensagem será enviada)
export default function FormularioContato({ email }) {
    // useState com STRING: guarda o que a pessoa digita em cada campo
    const [nome, setNome] = useState('')
    const [mensagem, setMensagem] = useState('')

    function enviar(evento) {
        // Impede a página de recarregar ao enviar o formulário
        evento.preventDefault()

        // Abre o programa de e-mail da pessoa com a mensagem já preenchida
        const assunto = encodeURIComponent(`Contato pelo portfólio - ${nome}`)
        const corpo = encodeURIComponent(mensagem)
        window.location.href = `mailto:${email}?subject=${assunto}&body=${corpo}`
    }

    return (
        <form className="formulario" onSubmit={enviar}>
            <label>
                Seu nome
                <input
                    type="text"
                    value={nome}
                    onChange={(evento) => setNome(evento.target.value)}
                    required
                />
            </label>

            <label>
                Mensagem
                <textarea
                    value={mensagem}
                    onChange={(evento) => setMensagem(evento.target.value)}
                    required
                />
            </label>

            <button type="submit" className="botao">Enviar mensagem</button>
        </form>
    )
}
