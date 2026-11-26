# Meu Portfólio Pessoal

Portfólio feito com **React + Vite** para a atividade da disciplina Web Design.
Páginas: Início (apresentação, habilidades, sobre mim), Projetos e Contato, com **React Router**.

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente http://localhost:5173).

Outros comandos:

```bash
npm run build     # gera a versão final na pasta dist
npm run lint      # procura erros no código
```

## Como editar as informações pessoais

Todos os textos ficam em **`src/data/dados.js`**. Use `Ctrl + Shift + F` e procure por `EDITAR`.
Para trocar a foto, coloque o arquivo em `src/assets/` e mude o nome no `import` no topo do `dados.js`.

Para trocar as cores, edite as variáveis no começo de `src/index.css`.

## Estrutura

```
src/
├── main.jsx                  # liga o React e o BrowserRouter
├── App.jsx                   # Header + rotas + Footer
├── App.css / index.css       # layout geral, cores e classes reutilizadas
├── data/dados.js             # TODOS os dados pessoais
├── pages/                    # uma página por rota
│   ├── Inicio.jsx            #   "/"
│   ├── Projetos.jsx          #   "/projetos"
│   └── Contato.jsx           #   "/contato"
└── components/               # uma pasta por componente (JSX + CSS)
    ├── Header/
    ├── Footer/
    ├── Apresentacao/
    ├── Habilidades/
    ├── SobreMim/
    ├── CardProjeto/
    └── FormularioContato/
```

## Onde está cada requisito (para explicar o código)

| Requisito | Onde |
| --- | --- |
| Componentes reutilizáveis | `CardProjeto` é usado uma vez para cada projeto (`pages/Projetos.jsx`) |
| Props | `App.jsx` envia `nome` ao Header e Footer; `pages/Inicio.jsx` envia os dados às seções |
| `useState` com string | `Habilidades` (aba/filtro), `SobreMim` (aba), `FormularioContato` (campos) |
| `useState` com boolean | `CardProjeto` (`aberto`: mostra/oculta detalhes) |
| `useState` com número | `CardProjeto` (`curtidas`) |
| Estilização própria | um `.css` por componente + variáveis de cor em `index.css` |
| React Router (extra) | `main.jsx` (BrowserRouter), `App.jsx` (Routes/Route), `Header.jsx` (NavLink) |
