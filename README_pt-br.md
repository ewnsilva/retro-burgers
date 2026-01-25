<h1 align="center">🍔 Retro-Burguers</h1>

<div align="right">
  <a href="https://github.com/ewnsilva/retro-burgers">EN-US</a> |
  <strong >
    PT-BR
  </strong>
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

<hr />

<h2 id="visao-geral" align="justify">📸 Visão Geral</h2>

<div align="center">
  <img src="https://private-user-images.githubusercontent.com/83819706/540299511-6e0be0f4-b1b6-4db7-a1a2-46061f05b83b.PNG?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjkzODI0NTQsIm5iZiI6MTc2OTM4MjE1NCwicGF0aCI6Ii84MzgxOTcwNi81NDAyOTk1MTEtNmUwYmUwZjQtYjFiNi00ZGI3LWExYTItNDYwNjFmMDViODNiLlBORz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAxMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMTI1VDIzMDIzNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTExOTMxMTVkM2Q4Yjg3ZDlhNmM5YTc1MzU2Y2M4OWZhZTI4MjdmNjA3NTg1MzQyZGZlYzUwZTdhZDVlMjcxM2UmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.KLPcNVfr_RiZUJvKOTiV9sO-mCI5gheAPKRnZrgVnnw"
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
  <img src="https://private-user-images.githubusercontent.com/83819706/540299517-9637ce91-a7d0-4039-82df-406ce2d37086.PNG?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjkzODI1ODQsIm5iZiI6MTc2OTM4MjI4NCwicGF0aCI6Ii84MzgxOTcwNi81NDAyOTk1MTctOTYzN2NlOTEtYTdkMC00MDM5LTgyZGYtNDA2Y2UyZDM3MDg2LlBORz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAxMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMTI1VDIzMDQ0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTUxMjU0ZDhkYzJiNzljODBmNWE1OTczMjUyMmU2ZDVhNmEwN2EyOWM1ZGYyYzM1OTVmNWQwYWVmNDM0YjM4ZTImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.enQusoxkS2uyGHHoeMFXJrEcuhIU2BseYimyaCzI5YU" width="550" />
  <p><em>Figura 2. Seleção de produtos.</em></p>
</div>

<p align="justify">
  Além de poder adicionar os produtos ao carrinho, existe uma opção extra que permite customizar o produto desejado, como pode ser visto ao lado esquerdo do botão de adicionar ao carrinho.
</p>

<div align="center">
  <img src="https://private-user-images.githubusercontent.com/83819706/540299684-a6de4d15-d97d-49e5-8e2f-187928369494.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjkzODI1ODQsIm5iZiI6MTc2OTM4MjI4NCwicGF0aCI6Ii84MzgxOTcwNi81NDAyOTk2ODQtYTZkZTRkMTUtZDk3ZC00OWU1LThlMmYtMTg3OTI4MzY5NDk0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAxMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMTI1VDIzMDQ0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTg0NTMzMGQ4NTg4YTgwNzM3ZTBiZGRhNTc3ODZhMGUzNzNlYjgwYzVjMmUzZjkwMWI3ODJjYjY2ODYzODhhYmQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.kp3ke9hZgeeY4XpB_P1nyGFvm4EbzhLXW0oh3lldsT4" width="550" />
  <p><em>Figura 3. Botão de adicionais.</em></p>
</div>

<p align="justify">
  Após o clique, será exibido uma tela em que o usuário poderia incluir uma série de adicionais ao produto antes de adicionar a lista de pedidos.
</p>

<div align="center">
  <img src="https://private-user-images.githubusercontent.com/83819706/540299691-1b37b1fd-b1eb-46d9-80e8-382740c7fe48.PNG?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjkzODI1ODQsIm5iZiI6MTc2OTM4MjI4NCwicGF0aCI6Ii84MzgxOTcwNi81NDAyOTk2OTEtMWIzN2IxZmQtYjFlYi00NmQ5LTgwZTgtMzgyNzQwYzdmZTQ4LlBORz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAxMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMTI1VDIzMDQ0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTZkZmI2ZWQwOGZmY2UwODdkYzczNGY3ODNhYTlmM2JhMTVkODI1MGEzMjNlNzBiNTEzY2I5MTk2YjI2ZjYyMmYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.jUPxoJsgaxMY1JoOSts4-nYZ64qGScqCdMw05Vtq5sE" width="550" />
  <p><em>Figura 4. Lista de adicionais.</em></p>
</div>

<p align="justify">
  Depois de navegar entre categorias e adicionar os produtos desejados, o usuário poderá clicar no botão de carrinho ao lado direito da tela para exibir a lista de pedidos, podendo alterar quantidade ou efetuar a exclusão da lista.
</p>

<div align="center">
  <img src="https://private-user-images.githubusercontent.com/83819706/540299697-45d3bc01-f51d-4715-aecb-8f7ed17a598f.PNG?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjkzODI1ODQsIm5iZiI6MTc2OTM4MjI4NCwicGF0aCI6Ii84MzgxOTcwNi81NDAyOTk2OTctNDVkM2JjMDEtZjUxZC00NzE1LWFlY2ItOGY3ZWQxN2E1OThmLlBORz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAxMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMTI1VDIzMDQ0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTkxMmM0NTU2MDcwZjdlMjEzMjJhZWJjMmViNTA1NGYxMjY0OWFkYjQ4Zjg3YjU0YzlkNDJjNDgyMmU4NGIxYzkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.B6cIVV8in4gGd8j8nCzk72PkeyTw2t1PZrR6pq76GAM" width="550" />
  <p><em>Figura 5. Carrinho de produtos.</em></p>
</div>

<p align="justify">
  Ao clicar em fazer pedido, será aberto um modal para o usuário conferir produtos e suas respectivas quantidades. Estando tudo certo, poderá confirmar e o aplicativo irá exibir uma mensagem de compra realizada, conforme pode ser visto nas imagens abaixo
</p>

<div align="center">
  <img src="https://private-user-images.githubusercontent.com/83819706/540299700-052faa58-d9ed-4e70-99bc-d63184177c52.PNG?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjkzODI1ODQsIm5iZiI6MTc2OTM4MjI4NCwicGF0aCI6Ii84MzgxOTcwNi81NDAyOTk3MDAtMDUyZmFhNTgtZDllZC00ZTcwLTk5YmMtZDYzMTg0MTc3YzUyLlBORz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAxMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMTI1VDIzMDQ0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWY3OTFhNjFkYTMxNTFiNzVhYzk4YzhhNWRhY2IwOTY0YzQxOTFhYzAwZmE3ODYyN2UxODY2NTBlOTc2NzM1ZDUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.vuXhIJuGovf6jft75IUCqWA-miUlgc4uv_cJO-5BqtQ" width="550" />
  <p><em>Figura 6. Confirmação do pedido.</em></p>
</div>

<div align="center">
  <img src="https://private-user-images.githubusercontent.com/83819706/540301726-e93fe981-e7fc-4df0-81c7-8edc43b80dd6.PNG?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjkzODQxMzUsIm5iZiI6MTc2OTM4MzgzNSwicGF0aCI6Ii84MzgxOTcwNi81NDAzMDE3MjYtZTkzZmU5ODEtZTdmYy00ZGYwLTgxYzctOGVkYzQzYjgwZGQ2LlBORz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAxMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMTI1VDIzMzAzNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTg0YWYwMTBmNjc0MzI4NjIwZTQ1ZjI2M2I1YjAwZjkyOWE1ZDA5M2NmYzRiMmVmZjJmNWRiYWY1NGM2MDZlZjgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.APQ8dBZxdHmY5qGu8Ue_t_a5HQae7TvRw1k3idoa3Xc" width="550" />
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
  <img src="https://private-user-images.githubusercontent.com/83819706/540299718-fe2616f1-a525-49cc-b0a8-3e02ed65a16e.PNG?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjkzODI1ODQsIm5iZiI6MTc2OTM4MjI4NCwicGF0aCI6Ii84MzgxOTcwNi81NDAyOTk3MTgtZmUyNjE2ZjEtYTUyNS00OWNjLWIwYTgtM2UwMmVkNjVhMTZlLlBORz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAxMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMTI1VDIzMDQ0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTkzNTk0ODBkMGY5ZWYwNzRjNDQ1MmRiNjI3MzJkNGM5MmMxMjMxYTZlMjVmYzg0YzViZDQyODI4YWM0Y2ZjNjgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.r1MHI4F0KHOQikzroa39bzOErK14jcQSgmtmktvVM4E" width="550" />
  <p><em>Figura 8. Dica de personalização.</em></p>
</div>

<div align="center">
  <img src="https://private-user-images.githubusercontent.com/83819706/540299727-0dd54722-c007-445c-800d-38d386fe795f.PNG?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjkzODI1ODQsIm5iZiI6MTc2OTM4MjI4NCwicGF0aCI6Ii84MzgxOTcwNi81NDAyOTk3MjctMGRkNTQ3MjItYzAwNy00NDVjLTgwMGQtMzhkMzg2ZmU3OTVmLlBORz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAxMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMTI1VDIzMDQ0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWFkNDMyOWVmYjg5YmJmMjQ0NDUzZGMwZGJlZmIwNzJjYTJhN2YzMjNkNmYxNTRiNGNjOTk4ZGVkZGE2ZmZiZjImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.G9XbB7al79NTt5skpZWGo8iJYTNFuC3ncwfGw4JcvgI" width="350" />
  <p><em>Figura 9. Menu da aplicação.</em></p>
</div>

<div align="center">
  <img src="https://private-user-images.githubusercontent.com/83819706/540299733-ff94d330-8621-4176-ba28-a560cd5c35ca.PNG?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjkzODI1ODQsIm5iZiI6MTc2OTM4MjI4NCwicGF0aCI6Ii84MzgxOTcwNi81NDAyOTk3MzMtZmY5NGQzMzAtODYyMS00MTc2LWJhMjgtYTU2MGNkNWMzNWNhLlBORz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAxMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMTI1VDIzMDQ0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWU1ZTc5YTQ3NDhmMjk1MTQxOTI4OTMwNDdlMzcxNzBjNDhjMGU1MGM4MTg4OGFjNTllYjMxZjA3ODEzYjQ2NmUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.hRkMCfnLQ_-uA28PdgH4Nw-byaTISxEcODIJS5LD_ek" width="550" />
  <p><em>Figura 10. Tema Retrowave.</em></p>
</div>

<div align="center">
  <img src="https://private-user-images.githubusercontent.com/83819706/540299741-e2e088fd-4c69-489b-b185-b4339040ac1d.PNG?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjkzODI1ODQsIm5iZiI6MTc2OTM4MjI4NCwicGF0aCI6Ii84MzgxOTcwNi81NDAyOTk3NDEtZTJlMDg4ZmQtNGM2OS00ODliLWIxODUtYjQzMzkwNDBhYzFkLlBORz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAxMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMTI1VDIzMDQ0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTZkM2U2MDk2ZDI0MWZjZjFlMTc3NzExNGVhOTBkM2M1NDQzYjNiMWE2ODVhZTdkZDEzNjM1ZTFkYjlkY2UzODQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.-KPCMBN6BYCPOVlqorrGfiM7jj87PYNyh1yQoBUsG24" width="550" />
  <p><em>Figura 11. Tema Darkwave.</em></p>
</div>

<hr />

<h2  id="desenvolvimento">🛠️ Desenvolvimento</h2>

<p align="justify">
  O projeto teve início com o planejamento da interface da aplicação, seguindo critérios de Design Ui/Ui, através da ferramenta Figma.
</p>

<div align="center">
  <img src="https://private-user-images.githubusercontent.com/83819706/540299750-6fa035a9-0679-4400-8761-ecaf6f1e3e4c.PNG?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjkzODI1ODQsIm5iZiI6MTc2OTM4MjI4NCwicGF0aCI6Ii84MzgxOTcwNi81NDAyOTk3NTAtNmZhMDM1YTktMDY3OS00NDAwLTg3NjEtZWNhZjZmMWUzZTRjLlBORz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAxMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMTI1VDIzMDQ0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWEwZWEzNjgwMTY0MTE0OWQyNTcxMzI2ZjIyMTdlNTFmNjZiMmI5MGU1YjE3ZTdjY2NiMTE0ZTRmZGMwZjc2YzMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.Wf7_xjDNfq6mEe69vo-81RRNaM6fcqbMyWTqDMbu0gY" width="550" />
  <p><em>Figura 12. Mocks projetados no Figma.</em></p>
</div>

<p align="justify">
  Decidido a interface, foi estabelecido as regras de negócio que a aplicação teria e o planejamento de como serão armazenados os dados e como eles seriam retornados pelo backend.
</p>

<div align="center">
  <img src="https://private-user-images.githubusercontent.com/83819706/540299757-0be02cbf-a38c-4e3e-aaf8-629389a9b14c.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjkzODI1ODQsIm5iZiI6MTc2OTM4MjI4NCwicGF0aCI6Ii84MzgxOTcwNi81NDAyOTk3NTctMGJlMDJjYmYtYTM4Yy00ZTNlLWFhZjgtNjI5Mzg5YTliMTRjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAxMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMTI1VDIzMDQ0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTNkNTAwZWE5OGZiNGJmYzUxN2FjNjdjMDMwMzU4NmE4OWZmNDA4MGRlNGJlZTk1NDZiYjM2ZDJkNzQ0OWE4ZTUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.ye0mGRAye4mxN2LLIZC92WKfQBDDyaQI43vBFQLQZ0I" width="550" />
  <p><em>Figura 13. Modelo relacional do banco de dados.</em></p>
</div>

<p align="justify">
  A seguir, foi dado o seguimento ao desenvolvimento em si do front-end e back-end, onde teve como objetivo uma segmentação limpa e organizada, de forma que pudesse facilitar uma possível manutenção que o projeto possa sofrer no futuro.
</p>

<div align="center">
  <img src="https://private-user-images.githubusercontent.com/83819706/540299763-05eb6d82-8101-4c34-80c5-fff6d48baa6a.PNG?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjkzODI1ODQsIm5iZiI6MTc2OTM4MjI4NCwicGF0aCI6Ii84MzgxOTcwNi81NDAyOTk3NjMtMDVlYjZkODItODEwMS00YzM0LTgwYzUtZmZmNmQ0OGJhYTZhLlBORz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAxMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMTI1VDIzMDQ0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTMwYTNhYTMwODJlZGZhNDYwNWNhOGYxYjVhMDA5NmYxNThiYmMwYWIwMTgwMWEyMGVhZjkxZTdlNTUwYjkyMTkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.64b4sCPU-9XLayhAM3APOvb6P4rGvcafmCKFSeVcG7Y" width="250" />
  <p><em>Figura 14. Organização de diretórios.</em></p>
</div>

<p align="justify">
  Por fim, foram criados testes unitários para todos os arquivos do front-end para garantir segurança e qualidade no funcionamento da aplicação.
</p>

<div align="center">
  <img src="https://private-user-images.githubusercontent.com/83819706/540299769-099fe6d3-3f60-4670-b1c9-cc25d83487da.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjkzODI1ODQsIm5iZiI6MTc2OTM4MjI4NCwicGF0aCI6Ii84MzgxOTcwNi81NDAyOTk3NjktMDk5ZmU2ZDMtM2Y2MC00NjcwLWIxYzktY2MyNWQ4MzQ4N2RhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAxMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMTI1VDIzMDQ0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTlkMmFjMDc1YmM0NTA5NmNlNWQxNDM4ZWVhMjk0Y2ZiMzUxMDllM2I5ZDI0N2JjM2E0Mzc5MzNmMmFlZWU1YWEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.AdIid0a__-hDavcmwJ0k0BzD-VEOzWONC8erYPgZqec" width="550" />
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
yarn dev
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
    https://github.com/crazymaax404
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
          “Exemplo: Tive a oportunidade de treinar e partilhar meus conhecimentos de backend
          para meu amigo de longa data, espero que todos se divirtam com esse projeto.”
        </em>
      </blockquote>
    </td>
  </tr>
</table>
