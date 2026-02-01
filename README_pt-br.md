<h1 align="center">🍔 Retro-Burguers</h1>

<div align="right">
  <a href="https://github.com/ewnsilva/retro-burgers">EN-US</a> |
  <strong >
    PT-BR
  </strong> |
  <a href="https://github.com/ewnsilva/retro-burgers/blob/main/README_es-es.md">
    ES-ES
  </a>
</div>

</p>

<p align="justify">
  Aplicação <strong>full-stack</strong> criada para treinar e reforçar conhecimentos em
  <strong>React</strong>, <strong>Node.js</strong> e <strong>testes automatizados</strong>,
  simulando e-commerce de lanches e bebidas com forte foco em
  <strong>arquitetura frontend</strong>, <strong>UX</strong>,
  <strong>internacionalização</strong> e <strong>boas práticas</strong>.
</p>

<p align="justify">
  O projeto segue rigor técnico e organizacional utilizado por profissionais
  de nível <strong>pleno</strong> e <strong>sênior</strong>, com código escalável,
  tipado e testado.
</p>

<p align="justify">
  🎨 Visual inspirado no estilo <strong>Synthwave / Miami Vice (anos 80)</strong>,
  com múltiplos temas, trilhas sonoras dinâmicas e animações suaves.
</p>

</p>

🔗 <a href="https://retro-burgers.vercel.app/" target="_blank">
Confira agora o projeto na Vercel.
</a>

<hr />

<h2 id="visao-geral" align="justify">📸 Visão Geral</h2>

<div align="center">
  <img src="https://github.com/user-attachments/assets/e66b6ad7-8895-482f-bb87-e71a24f9577c"
       width="900" />
  <p><em>Figura 1. Página principal do aplicativo.</em></p>
</div>

<hr />

<h2>📌 Índice</h2>

<ul>
  <li><a href="#visao-geral">📸 Visão Geral</a></li>
  <li><a href="#funcionalidades">✨ Funcionalidades</a></li>
  <li><a href="#tecnologias">🧰 Tecnologias em Destaque</a></li>
  <li><a href="#arquitetura">🏗️ Arquitetura</a></li>
  <li><a href="#decisoes-tecnicas">🧠 Decisões Técnicas & Trade-offs</a></li>
  <li><a href="#destaques-tecnicos">⭐ Destaques Técnicos</a></li>
  <li><a href="#limitacoes">⚠️ Limitações Conhecidas</a></li>
  <li><a href="#proximos-passos">🚀 Próximos Passos & Possíveis Evoluções</a></li>
  <li><a href="#como-usar">🔍 Como Usar</a></li>
  <li><a href="#extras">🖌️ Personalização</a></li>
  <li><a href="#desenvolvimento">🛠️ Desenvolvimento</a></li>
  <li><a href="#como-executar">▶️ Como Executar o Projeto</a></li>
  <li><a href="#agradecimentos">🤝 Agradecimentos</a></li>
</ul>

<hr />

<h2 id="funcionalidades">✨ Funcionalidades</h2>

<h3>🛍️ E-commerce</h3>
<ul>
  <li>Navegação por categorias dinâmicas (via API)</li>
  <li>Listagem de produtos com animações</li>
  <li>Detalhes do produto e personalização com adicionais</li>
  <li>Carrinho de compras persistente</li>
  <li>Modal de resumo do pedido</li>
  <li>Confirmação de pedido com feedback visual</li>
</ul>

<h3>🌐 Internacionalização</h3>
<ul>
  <li>Português 🇧🇷 e Inglês 🇺🇸</li>
  <li>Troca dinâmica de idioma</li>
  <li>Backend preparado para múltiplos idiomas</li>
</ul>

<h3>🎨 Temas e Experiência</h3>
<ul>
  <li>3 temas visuais no estilo Synthwave</li>
  <li>Trilha sonora exclusiva para cada tema</li>
  <li>Animações de carregamento (Skeletons)</li>
  <li>Fallback visual para imagens com erro</li>
</ul>

<h3>🧪 Qualidade e Testes</h3>
<ul>
  <li>Testes unitários com Vitest</li>
  <li>Testes de componentes e hooks</li>
  <li>ESLint + Prettier</li>
  <li>Código fortemente tipado com TypeScript</li>
</ul>

<hr />

<h2 id="tecnologias">🧰 Tecnologias em Destaque</h2>

<h3>Front-end</h3>
<ul>
  <li>TypeScript</li>
  <li>React</li>
  <li>React Router DOM</li>
  <li>React Query</li>
  <li>Material UI</li>
  <li>i18n</li>
  <li>Axios</li>
  <li>Howler (trilha sonora)</li>
  <li>Webpack</li>
  <li>Vitest</li>
  <li>Testing Library</li>
  <li>ESLint / Prettier</li>
  <li>dotenv / env-cmd</li>
</ul>

<h3>Back-end</h3>
<ul>
  <li>TypeScript</li>
  <li>Node.js</li>
  <li>Express</li>
  <li>REST API</li>
  <li>SQLite</li>
  <li>Sequelize</li>
  <li>CORS</li>
  <li>Nodemon</li>
</ul>

<hr />

<h2 id="arquitetura">🏗️ Arquitetura</h2>

<h3>Frontend</h3>
<ul>
  <li>Separação clara entre componentes de UI e lógica</li>
  <li>Hooks de lógica (<code>Home.Logic.ts</code>, <code>useProducts.ts</code>, etc.)</li>
  <li>Hooks de domínio (cart, language, theme)</li>
  <li>Navegação e categorias 100% dinâmicas via API</li>
  <li>Estados locais previsíveis e isolados</li>
  <li>Isolamento de dependências externas em desenvolvimento</li>
</ul>

<h3>Backend</h3>
<ul>
  <li>API REST simples e objetiva</li>
  <li>Endpoints organizados por domínio</li>
  <li>Banco SQLite versionado via migrations</li>
</ul>

<h3>Endpoints Principais</h3>
<ul>
  <li><code>GET /categories</code></li>
  <li><code>GET /products/:categoryId</code></li>
</ul>

<p>Exemplo de resposta com suporte a múltiplos idiomas:</p>

<pre>
{
  "title": {
    "pt": "Hambúrguer",
    "en": "Burger"
  }
}
</pre>

<hr />

<h2 id="decisoes-tecnicas">🧠 Decisões Técnicas & Trade-offs</h2>

<p align="justify">
  Algumas decisões arquiteturais foram tomadas de forma consciente
  visando equilíbrio entre simplicidade, manutenibilidade e escalabilidade,
  considerando o escopo e os objetivos do projeto.
</p>

<ul>
  <li>
    <strong>React Query</strong><br />
    Utilizado para gerenciamento de estado remoto, cache e sincronização de dados
    com a API, reduzindo a necessidade de soluções globais mais complexas.
  </li>

  <li>
    <strong>Ausência de Redux</strong><br />
    O projeto prioriza hooks e estado local/contextual, evitando complexidade
    desnecessária para o domínio atual da aplicação.
  </li>

  <li>
    <strong>Arquitetura baseada em Hooks</strong><br />
    Separação clara entre UI, lógica de apresentação e regras de domínio,
    favorecendo reutilização, testabilidade e legibilidade.
  </li>

  <li>
    <strong>SQLite no Backend</strong><br />
    Escolha pragmática para facilitar setup, versionamento e portabilidade,
    mantendo foco na modelagem de dados e regras de negócio.
  </li>

  <li>
    <strong>Internacionalização desde a API</strong><br />
    As respostas do backend já contemplam múltiplos idiomas,
    evitando retrabalho e facilitando expansão futura.
  </li>
</ul>

<hr />

<h2 id="destaques-tecnicos">⭐ Destaques Técnicos</h2>
<ul>
  <li>Hooks reutilizáveis e bem tipados</li>
  <li>Nenhum dado hardcoded (tudo via API)</li>
  <li>UX otimizada para loading e erros</li>
  <li>Arquitetura preparada para escala (React Query ready)</li>
  <li>Separação clara de responsabilidades</li>
</ul>

<hr />

<h2 id="limitacoes">⚠️ Limitações Conhecidas</h2>

<p align="justify">
  Este projeto foi desenvolvido com foco em aprendizado, arquitetura e boas práticas.
  Algumas funcionalidades comuns em aplicações de produção foram
  intencionalmente mantidas fora do escopo.
</p>

<ul>
  <li>Não há autenticação ou perfis de usuário.</li>
  <li>Não existe integração com gateways reais de pagamento.</li>
  <li>O backend não foi otimizado para alta concorrência ou escalabilidade horizontal.</li>
  <li>Não há persistência de pedidos finalizados.</li>
  <li>Testes automatizados estão focados no frontend.</li>
</ul>

<hr />

<h2 id="proximos-passos">🚀 Próximos Passos & Possíveis Evoluções</h2>

<p align="justify">
  Algumas melhorias e evoluções naturais para este projeto incluem:
</p>

<ul>
  <li>Implementação de autenticação e gerenciamento de usuários.</li>
  <li>Persistência de pedidos e histórico de compras.</li>
  <li>Testes end-to-end (E2E) para validação de fluxos críticos.</li>
  <li>Cache e paginação no backend.</li>
  <li>Containerização com Docker para padronização de ambiente.</li>
  <li>Pipeline de CI/CD.</li>
</ul>

<hr />

<h2 id="como-usar">🔍 Como Usar</h2>

<p align="justify">
  A aplicação funciona como um <strong>cardápio online</strong>.
  O usuário pode pesquisar produtos, navegar por categorias
  e adicionar itens ao carrinho com apenas um clique.
</p>

<div align="center">
  <img src="https://github.com/user-attachments/assets/4ddd7bdd-e265-4da1-932e-49a347a07f16" width="550" />
  <p><em>Figura 2. Seleção de produtos.</em></p>
</div>

<p align="justify">
  Além de poder adicionar os produtos ao carrinho, existe uma opção extra que permite customizar o produto desejado, como pode ser visto ao lado esquerdo do botão de adicionar ao carrinho.
</p>

<div align="center">
  <img src="https://github.com/user-attachments/assets/a7d2af71-96d5-4d9c-b70d-cf3f8527b9c2" width="550" />
  <p><em>Figura 3. Botão de adicionais.</em></p>
</div>

<p align="justify">
  Após o clique, será exibido uma tela em que o usuário poderia incluir uma série de adicionais ao produto antes de adicionar a lista de pedidos.
</p>

<div align="center">
  <img src="https://github.com/user-attachments/assets/8b13c213-10b7-4db7-a990-78dd79c5b576" width="550" />
  <p><em>Figura 4. Lista de adicionais.</em></p>
</div>

<p align="justify">
  Depois de navegar entre categorias e adicionar os produtos desejados, o usuário poderá clicar no botão de carrinho ao lado direito da tela para exibir a lista de pedidos, podendo alterar quantidade ou efetuar a exclusão da lista.
</p>

<div align="center">
  <img src="https://github.com/user-attachments/assets/87922c20-7d6d-4ff1-961a-90095bb6f0e9" width="550" />
  <p><em>Figura 5. Carrinho de produtos.</em></p>
</div>

<p align="justify">
  Ao clicar em fazer pedido, será aberto um modal para o usuário conferir produtos e suas respectivas quantidades. Estando tudo certo, poderá confirmar e o aplicativo irá exibir uma mensagem de compra realizada, conforme pode ser visto nas imagens abaixo
</p>

<div align="center">
  <img src="https://github.com/user-attachments/assets/2399cc49-08cb-4427-bf8c-5c0175c4231a" width="550" />
  <p><em>Figura 6. Confirmação do pedido.</em></p>
</div>

<div align="center">
  <img src="https://github.com/user-attachments/assets/34ee693b-aa07-4e2e-97c9-38e245a01795" width="550" />
  <p><em>Figura 7. Tela de pedido realizado.</em></p>
</div>

<hr />

<h2 id="extras">🖌️ Personalização</h2>

<p>
  O menu da aplicação permite personalizar a experiência do usuário,
  incluindo troca de temas, ativação de trilha sonora
  e alternância de idioma.
</p>

<div align="center">
  <img src="https://github.com/user-attachments/assets/1a3e123a-16e0-43d6-ae6e-33ece6120a28" width="550" />
  <p><em>Figura 8. Dica de personalização.</em></p>
</div>

<div align="center">
  <img src="https://github.com/user-attachments/assets/9a371f60-c4e4-4ac5-af25-90bd80af7880" width="350" />
  <p><em>Figura 9. Menu da aplicação.</em></p>
</div>

<div align="center">
  <img src="https://github.com/user-attachments/assets/78f07274-2f23-4602-b9c4-8513f3efeca5" width="550" />
  <p><em>Figura 10. Tema Retrowave.</em></p>
</div>

<div align="center">
  <img src="https://github.com/user-attachments/assets/d594edad-e60b-4fe9-b3f4-ae9d872cd439" width="550" />
  <p><em>Figura 11. Tema Darkwave.</em></p>
</div>

<hr />

<h2  id="desenvolvimento">🛠️ Desenvolvimento</h2>

<p align="justify">
  O projeto teve início com o planejamento da interface da aplicação, seguindo critérios de Design Ui/Ui, através da ferramenta Figma.
</p>

<div align="center">
  <img src="https://github.com/user-attachments/assets/801bb864-7811-436f-af39-b0de49e6831a" width="550" />
  <p><em>Figura 12. Mocks projetados no Figma.</em></p>
</div>

<p align="justify">
  Decidido a interface, foi estabelecido as regras de negócio que a aplicação teria e o planejamento de como serão armazenados os dados e como eles seriam retornados pelo backend.
</p>

<div align="center">
  <img src="https://github.com/user-attachments/assets/e1ecf732-4307-45f9-a99d-2e80a1f61fe3" width="550" />
  <p><em>Figura 13. Modelo relacional do banco de dados.</em></p>
</div>

<p align="justify">
  A seguir, foi dado o seguimento ao desenvolvimento em si do front-end e back-end, onde teve como objetivo uma segmentação limpa e organizada, de forma que pudesse facilitar uma possível manutenção que o projeto possa sofrer no futuro.
</p>

<div align="center">
  <img src="https://github.com/user-attachments/assets/0e6d5ec2-b0f8-423e-a4c0-0c9d975512e5" width="250" />
  <p><em>Figura 14. Organização de diretórios.</em></p>
</div>

<p align="justify">
  Por fim, foram criados testes unitários para todos os arquivos do front-end para garantir segurança e qualidade no funcionamento da aplicação.
</p>

<div align="center">
  <img src="https://github.com/user-attachments/assets/2249f6fc-2342-47ae-93b4-e6b28ed27344" width="550" />
  <p><em>Figura 15. Testes unitários.</em></p>
</div>

<hr />

<h2 id="como-executar">▶️ Como Executar o Projeto</h2>

<p>
  O repositório é organizado em duas pastas principais:
  <strong>frontend</strong> e <strong>backend</strong>.
  Cada parte da aplicação deve ser executada de forma independente,
  acessando previamente o diretório correspondente.
</p>

<h3>📋 Pré-requisitos</h3>
<ul>
  <li>Node.js <strong>&gt;= 18</strong></li>
  <li>Yarn ou NPM</li>
</ul>

<hr />

<h3>🔧 Backend</h3>

<p>
  Acesse a pasta do backend antes de executar os comandos:
</p>

<pre>
cd backend
</pre>

<p>Instale as dependências, configure o banco de dados e inicie o servidor:</p>

<pre>
yarn install
yarn db:setup
yarn dev
</pre>

<p>
  O servidor estará disponível em:
  <br />
  <a href="http://localhost:3001" target="_blank">
    http://localhost:3001
  </a>
</p>

<hr />

<h3>🎨 Frontend</h3>

<p>
  Em outro terminal, acesse a pasta do frontend:
</p>

<pre>
cd frontend
</pre>

<p>Instale as dependências e inicie a aplicação:</p>

<pre>
yarn install
yarn build
yarn prod
</pre>

<p>
  A aplicação estará disponível em:
  <br />
  <a href="http://localhost:3000" target="_blank">
    http://localhost:3000
  </a>
</p>

<hr />

<h3>🧪 Testes</h3>

<p>
  Os testes unitários estão localizados exclusivamente no
  <strong>frontend</strong>.
  Certifique-se de estar dentro da pasta antes de executá-los:
</p>

<pre>
cd frontend
yarn test
</pre>

<p>Para executar os testes em modo contínuo (CI / execução única):</p>

<pre>
yarn test:run
</pre>

<hr />

<h2 id="agradecimentos">🤝 Agradecimentos</h2>

<p>
  Este projeto contou com a colaboração do
  <strong>Líder Técnico de Desenvolvimento – Max Milan</strong>,
  responsável pela definição e arquitetura do <strong>backend</strong> da aplicação.
</p>

<p>
  Abaixo segue o link para seu perfil no GitHub:
</p>

<p>
  🔗 <a href="https://github.com/crazymaax404" target="_blank">
    Max Milan - GitHub
  </a>
</p>

<table>
  <tr>
    <td width="120" valign="top">
      <img
        src="https://avatars.githubusercontent.com/u/143542448?v=4"
        alt="Pessoa X - Colaborador do Projeto"
        width="125"
        style="border-radius: 30%;"
      />
    </td>
    <td valign="middle">
      <blockquote>
        <em>
          “Participar deste projeto foi uma experiência gratificante. Tive a oportunidade de compartilhar meus conhecimentos em backend com um amigo de longa data, em um processo marcado por troca, aprendizado e colaboração. Projetos assim mostram como colaboração e amizade fazem toda a diferença no desenvolvimento.”
        </em>
      </blockquote>
    </td>
  </tr>
</table>
