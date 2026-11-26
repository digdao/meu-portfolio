
import fotoPerfil from '../assets/minha_foto_perfil.jpeg'

// ---------- Apresentação pessoal ----------
export const perfil = {
  nome: 'Rodrigo Carmo dos Santos',
  cargo: 'Análise e Desenvolvimento de Sistemas',
  cidade: 'Fronteira - MG',
  descricao:
    'Casado pai de 2 filhas, trabalhador e esforçado em aprender novas tecnologias.',
  foto: fotoPerfil,
}

// ---------- Habilidades ----------
export const categorias = ['Todas', 'Linguagens', 'Front-end', 'Ferramentas', 'Banco de Dados']

export const habilidades = [
  { id: 1, nome: 'HTML', categoria: 'Front-end', status: 'Estudando' },
  { id: 2, nome: 'CSS', categoria: 'Front-end', status: 'Básico' },
  { id: 3, nome: 'JavaScript', categoria: 'Linguagens', status: 'Básico' },
  { id: 4, nome: 'React', categoria: 'Front-end', status: 'Estudando' },
  { id: 5, nome: 'Git e GitHub', categoria: 'Ferramentas', status: 'Estudando' },
  { id: 6, nome: 'VS Code', categoria: 'Ferramentas', status: 'Básico' },
  { id: 7, nome: 'SQL', categoria: 'Banco de Dados', status: 'Estudando' },
  { id: 8, nome: 'MySQL', categoria: 'Banco de Dados', status: 'Estudando' },
]

// ---------- Sobre mim ----------
export const sobreMim = {
  interesses:
    'Tenho vontade de trabalhar na área de tecnologia.',
  objetivos:
    'Entrar no mercado de trabalho como desenvolvedor.',
}

// ---------- Projetos ou experiências ----------
// EDITAR: troque pelos seus projetos, atividades de aula ou experiências.

export const projetos = [
  {
    id: 1,
    titulo: 'Calculadora API REST',
    descricao:
      'Desenvolvimento de uma calculadora web integrada a uma API REST, utilizando Python e FastAPI.',
    tecnologias: [
      'Python',
      'FastAPI',
      'Uvicorn',
      'Pydantic',
      'HTML',
      'JavaScript',
      'API REST'
    ],
    detalhes:
      'Projeto acadêmico desenvolvido para a disciplina de Programação de Sistemas Distribuídos na UNILAGO. Consiste em uma calculadora web integrada a uma API REST, utilizando Python e FastAPI. Durante o desenvolvimento, foram trabalhados conceitos de comunicação entre frontend e backend, criação de endpoints, validação de dados e estruturação de serviços. O projeto contribuiu para aprofundar os conhecimentos em desenvolvimento de APIs e sistemas distribuídos.',
    link: 'https://github.com/digdao/calculadora-api',
  },
  {
    id: 2,
    titulo: 'Aplicação Web - Aula Vandrei',
    descricao:
      'Desenvolvimento de aplicação web utilizando JavaScript, com organização de rotas, controladores e visualizações.',
    tecnologias: [
      'JavaScript',
      'Node.js',
      'HTML',
      'CSS',
      'Rotas',
      'Controllers'
    ],
    detalhes:
      'Projeto desenvolvido como atividade prática de programação, utilizando JavaScript e uma estrutura organizada em controladores, rotas, arquivos de visualização e estilos. O desenvolvimento permitiu aplicar conceitos de organização de código, separação de responsabilidades e estruturação de aplicações web.',
    link: 'https://github.com/digdao/aula-vandrei',
  },
  {
    id: 3,
    titulo: 'Sistema de Aplicação Web',
    descricao:
      'Projeto de desenvolvimento web com estrutura organizada em rotas, controladores e interfaces.',
    tecnologias: [
      'JavaScript',
      'Node.js',
      'HTML',
      'CSS',
      'Desenvolvimento Web'
    ],
    detalhes:
      'Projeto acadêmico voltado ao desenvolvimento de aplicações web, utilizando JavaScript e organização de arquivos em diretórios específicos para controladores, rotas, visualizações e arquivos públicos. A atividade proporcionou experiência prática com estruturação de projetos, organização de código e desenvolvimento de sistemas web.',
    link: 'https://github.com/digdao/trabalho',
  },
  {
    id: 4,
    titulo: 'Automação com Jenkins',
    descricao:
      'Projeto acadêmico utilizando Python e Jenkins para explorar automação e integração contínua.',
    tecnologias: [
      'Python',
      'Jenkins',
      'CI/CD',
      'Automação',
      'Git'
    ],
    detalhes:
      'Atividade acadêmica desenvolvida na UNILAGO, envolvendo Python e Jenkins. O projeto utiliza um Jenkinsfile para configuração de processos automatizados, permitindo estudar conceitos de integração contínua e automação no desenvolvimento de software. Também foram trabalhados arquivos relacionados à aplicação e sua configuração.',
    link: 'https://github.com/digdao/trabalho_prova2_wendel',
  },
  {
    id: 5,
    titulo: 'Desenvolvimento Web - Web Design',
    descricao:
      'Criação de página web utilizando HTML, CSS e JavaScript, trabalhando estrutura, estilo e interatividade.',
    tecnologias: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Frontend',
      'Web Design'
    ],
    detalhes:
      'Projeto prático de desenvolvimento web com foco em Web Design. Utiliza HTML para estruturar o conteúdo, CSS para estilização e JavaScript para implementar interatividade. A atividade permitiu aplicar conhecimentos fundamentais de desenvolvimento Frontend e criação de interfaces para a Web.',
    link: 'https://github.com/digdao/atividade-lucas-webdesign',
  },
]


// ---------- Contato ----------
export const contato = {
  email: 'digdao@gmail.com',
  github: 'https://github.com/digdao',
  linkedin: 'https://www.linkedin.com/in/rodrigo-santos-284a4b131',
}
