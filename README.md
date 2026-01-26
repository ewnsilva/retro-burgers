<h1 align="center">🍔 Retro-Burguers</h1>

<div align="right">
  <strong>EN-US</strong> |
  <a href="https://github.com/ewnsilva/retro-burgers/blob/main/README_pt-br.md">
    PT-BR
  </a>
</div>

</p>

<p align="justify">
  A <strong>full-stack</strong> application created to practice and reinforce knowledge in
  <strong>React</strong>, <strong>Node.js</strong>, and <strong>automated testing</strong>,
  simulating a snack and drink e-commerce with a strong focus on
  <strong>frontend architecture</strong>, <strong>UX</strong>,
  <strong>internationalization</strong>, and <strong>best practices</strong>.
</p>

<p align="justify">
  The project follows the technical and organizational rigor used by
  <strong>mid-level</strong> and <strong>senior</strong> professionals, featuring scalable,
  strongly typed, and tested code.
</p>

<p align="justify">
  🎨 Visuals inspired by the <strong>Synthwave / Miami Vice (80s)</strong> style,
  with multiple themes, dynamic soundtracks, and smooth animations.
</p>

<hr />

<h2 id="overview"  align="justify">📸 Overview</h2>

<div align="center">
  <img src="https://private-user-images.githubusercontent.com/83819706/540299511-6e0be0f4-b1b6-4db7-a1a2-46061f05b83b.PNG?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjkzODI0NTQsIm5iZiI6MTc2OTM4MjE1NCwicGF0aCI6Ii84MzgxOTcwNi81NDAyOTk1MTEtNmUwYmUwZjQtYjFiNi00ZGI3LWExYTItNDYwNjFmMDViODNiLlBORz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAxMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMTI1VDIzMDIzNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTExOTMxMTVkM2Q4Yjg3ZDlhNmM5YTc1MzU2Y2M4OWZhZTI4MjdmNjA3NTg1MzQyZGZlYzUwZTdhZDVlMjcxM2UmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.KLPcNVfr_RiZUJvKOTiV9sO-mCI5gheAPKRnZrgVnnw"
       width="900" />
  <p><em>Figure 1. Application main page.</em></p>
</div>

<hr />

<h2>📌 Table of Contents</h2>

<ul>
  <li><a href="#overview">📸 Overview</a></li>
  <li><a href="#features">✨ Features</a></li>
  <li><a href="#featured-technologies">🧰 Featured Technologies</a></li>
  <li><a href="#architecture">🏗️ Architecture</a></li>
  <li><a href="#technical-decisions">🧠 Technical Decisions & Trade-offs</a></li>
  <li><a href="#technical-highlights">⭐ Technical Highlights</a></li>
  <li><a href="#known-limitations">⚠️ Known Limitations</a></li>
  <li><a href="#next-steps">🚀 Next Steps & Possible Evolutions</a></li>
  <li><a href="#how-to-use">🔍 How to Use</a></li>
  <li><a href="#customization">🖌️ Customization</a></li>
  <li><a href="#development">🛠️ Development</a></li>
  <li><a href="#how-to-run">▶️ How to Run the Project</a></li>
  <li><a href="#acknowledgments">🤝 Acknowledgments</a></li>
</ul>

<hr />

<h2 id="features">✨ Features</h2>

<h3>🛍️ E-commerce</h3>
<ul>
  <li>Dynamic category navigation (via API)</li>
  <li>Product listing with animations</li>
  <li>Product details and customization with add-ons</li>
  <li>Persistent shopping cart</li>
  <li>Order summary modal</li>
  <li>Order confirmation with visual feedback</li>
</ul>

<h3>🌐 Internationalization</h3>
<ul>
  <li>Portuguese 🇧🇷 and English 🇺🇸</li>
  <li>Dynamic language switching</li>
  <li>Backend prepared for multiple languages</li>
</ul>

<h3>🎨 Themes and Experience</h3>
<ul>
  <li>3 Synthwave-style visual themes</li>
  <li>Exclusive soundtrack for each theme</li>
  <li>Loading animations (Skeletons)</li>
  <li>Visual fallback for broken images</li>
</ul>

<h3>🧪 Quality and Testing</h3>
<ul>
  <li>Unit tests with Vitest</li>
  <li>Component and hook testing</li>
  <li>ESLint + Prettier</li>
  <li>Strongly typed code with TypeScript</li>
</ul>

<hr />

<h2 id="featured-technologies">🧰 Featured Technologies</h2>

<h3>Front-end</h3>
<ul>
  <li>TypeScript</li>
  <li>React</li>
  <li>React Router DOM</li>
  <li>React Query</li>
  <li>Material UI</li>
  <li>i18n</li>
  <li>Axios</li>
  <li>Howler (soundtrack)</li>
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

<h2 id="architecture">🏗️ Architecture</h2>

<h3>Frontend</h3>
<ul>
  <li>Clear separation between UI components and logic</li>
  <li>Logic hooks (<code>Home.Logic.ts</code>, <code>useProducts.ts</code>, etc.)</li>
  <li>Domain hooks (cart, language, theme)</li>
  <li>100% dynamic navigation and categories via API</li>
  <li>Predictable and isolated local states</li>
  <li>Isolation of external dependencies during development</li>
</ul>

<h3>Backend</h3>
<ul>
  <li>Simple and objective REST API</li>
  <li>Endpoints organized by domain</li>
  <li>SQLite database versioned via migrations</li>
</ul>

<h3>Main Endpoints</h3>
<ul>
  <li><code>GET /categories</code></li>
  <li><code>GET /products/:categoryId</code></li>
</ul>

<p>Example response with multi-language support:</p>

<pre>
{
  "title": {
    "pt": "Hambúrguer",
    "en": "Burger"
  }
}
</pre>

<hr />

<h2 id="technical-decisions">🧠 Technical Decisions & Trade-offs</h2>

<p align="justify">
  Architectural decisions were made consciously to balance simplicity, 
  maintainability, and scalability, considering the project's scope and objectives.
</p>

<ul>
  <li>
    <strong>React Query</strong><br />
    Used for remote state management, caching, and data synchronization 
    with the API, reducing the need for more complex global solutions.
  </li>

  <li>
    <strong>Absence of Redux</strong><br />
    The project prioritizes hooks and local/contextual state, avoiding 
    unnecessary complexity for the current application domain.
  </li>

  <li>
    <strong>Hook-based Architecture</strong><br />
    Clear separation between UI, presentation logic, and domain rules, 
    promoting reusability, testability, and readability.
  </li>

  <li>
    <strong>SQLite on Backend</strong><br />
    A pragmatic choice to facilitate setup, versioning, and portability, 
    while keeping the focus on data modeling and business rules.
  </li>

  <li>
    <strong>Internationalization from the API</strong><br />
    Backend responses already account for multiple languages, 
    preventing rework and facilitating future expansion.
  </li>
</ul>

<hr />

<h2 id="technical-highlights">⭐ Technical Highlights</h2>
<ul>
  <li>Reusable and well-typed hooks</li>
  <li>No hardcoded data (everything via API)</li>
  <li>UX optimized for loading and errors</li>
  <li>Architecture ready for scale (React Query ready)</li>
  <li>Clear separation of concerns</li>
</ul>

<hr />

<h2 id="known-limitations">⚠️ Known Limitations</h2>

<p align="justify">
  This project was developed with a focus on learning, architecture, and best practices. 
  Some common features in production applications were intentionally kept out of scope.
</p>

<ul>
  <li>No authentication or user profiles.</li>
  <li>No integration with real payment gateways.</li>
  <li>The backend is not optimized for high concurrency or horizontal scaling.</li>
  <li>No persistence for completed orders.</li>
  <li>Automated tests are focused on the frontend.</li>
</ul>

<hr />

<h2 id="next-steps">🚀 Next Steps & Possible Evolutions</h2>

<p align="justify">
  Natural improvements and evolutions for this project include:
</p>

<ul>
  <li>Implementation of authentication and user management.</li>
  <li>Order persistence and purchase history.</li>
  <li>End-to-end (E2E) tests for critical flow validation.</li>
  <li>Backend caching and pagination.</li>
  <li>Containerization with Docker for environment standardization.</li>
  <li>CI/CD pipeline.</li>
</ul>

<hr />

<h2 id="how-to-use">🔍 How to Use</h2>

<p align="justify">
  The application works as an <strong>online menu</strong>. 
  Users can search for products, navigate through categories, 
  and add items to the cart with a single click.
</p>

<div align="center">
  <img src="https://private-user-images.githubusercontent.com/83819706/540299517-9637ce91-a7d0-4039-82df-406ce2d37086.PNG?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjkzODI1ODQsIm5iZiI6MTc2OTM4MjI4NCwicGF0aCI6Ii84MzgxOTcwNi81NDAyOTk1MTctOTYzN2NlOTEtYTdkMC00MDM5LTgyZGYtNDA2Y2UyZDM3MDg2LlBORz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAxMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMTI1VDIzMDQ0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTUxMjU0ZDhkYzJiNzljODBmNWE1OTczMjUyMmU2ZDVhNmEwN2EyOWM1ZGYyYzM1OTVmNWQwYWVmNDM0YjM4ZTImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.enQusoxkS2uyGHHoeMFXJrEcuhIU2BseYimyaCzI5YU" width="550" />
  <p><em>Figure 2. Product selection.</em></p>
</div>

<p align="justify">
  In addition to adding products to the cart, there is an extra option to customize the desired product, which can be seen to the left of the "add to cart" button.
</p>

<div align="center">
  <img src="https://private-user-images.githubusercontent.com/83819706/540299684-a6de4d15-d97d-49e5-8e2f-187928369494.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjkzODI1ODQsIm5iZiI6MTc2OTM4MjI4NCwicGF0aCI6Ii84MzgxOTcwNi81NDAyOTk2ODQtYTZkZTRkMTUtZDk3ZC00OWU1LThlMmYtMTg3OTI4MzY5NDk0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAxMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMTI1VDIzMDQ0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTg0NTMzMGQ4NTg4YTgwNzM3ZTBiZGRhNTc3ODZhMGUzNzNlYjgwYzVjMmUzZjkwMWI3ODJjYjY2ODYzODhhYmQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.kp3ke9hZgeeY4XpB_P1nyGFvm4EbzhLXW0oh3lldsT4" width="550" />
 <p><em>Figure 3. Add-ons button.</em></p>
</div>

<p align="justify">
  After clicking, a screen will be displayed where the user can include a series of add-ons to the product before adding it to the order list.
</p>

<div align="center">
  <img src="https://private-user-images.githubusercontent.com/83819706/540299691-1b37b1fd-b1eb-46d9-80e8-382740c7fe48.PNG?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjkzODI1ODQsIm5iZiI6MTc2OTM4MjI4NCwicGF0aCI6Ii84MzgxOTcwNi81NDAyOTk2OTEtMWIzN2IxZmQtYjFlYi00NmQ5LTgwZTgtMzgyNzQwYzdmZTQ4LlBORz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAxMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMTI1VDIzMDQ0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTZkZmI2ZWQwOGZmY2UwODdkYzczNGY3ODNhYTlmM2JhMTVkODI1MGEzMjNlNzBiNTEzY2I5MTk2YjI2ZjYyMmYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.jUPxoJsgaxMY1JoOSts4-nYZ64qGScqCdMw05Vtq5sE" width="550" />
 <p><em>Figure 4. Add-ons list.</em></p>
</div>

<p align="justify">
  After navigating through categories and adding the desired products, the user can click the cart button on the right side of the screen to view the order list, where they can change quantities or remove items from the list.
</p>

<div align="center">
  <img src="https://private-user-images.githubusercontent.com/83819706/540299697-45d3bc01-f51d-4715-aecb-8f7ed17a598f.PNG?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjkzODI1ODQsIm5iZiI6MTc2OTM4MjI4NCwicGF0aCI6Ii84MzgxOTcwNi81NDAyOTk2OTctNDVkM2JjMDEtZjUxZC00NzE1LWFlY2ItOGY3ZWQxN2E1OThmLlBORz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAxMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMTI1VDIzMDQ0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTkxMmM0NTU2MDcwZjdlMjEzMjJhZWJjMmViNTA1NGYxMjY0OWFkYjQ4Zjg3YjU0YzlkNDJjNDgyMmU4NGIxYzkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.B6cIVV8in4gGd8j8nCzk72PkeyTw2t1PZrR6pq76GAM" width="550" />
 <p><em>Figure 5. Product cart.</em></p>
</div>

<p align="justify">
  By clicking "Place Order," a modal will open for the user to check products and their respective quantities. If everything is correct, they can confirm, and the application will display a "purchase completed" message, as seen in the images below.
</p>

<div align="center">
  <img src="https://private-user-images.githubusercontent.com/83819706/540299700-052faa58-d9ed-4e70-99bc-d63184177c52.PNG?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjkzODI1ODQsIm5iZiI6MTc2OTM4MjI4NCwicGF0aCI6Ii84MzgxOTcwNi81NDAyOTk3MDAtMDUyZmFhNTgtZDllZC00ZTcwLTk5YmMtZDYzMTg0MTc3YzUyLlBORz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAxMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMTI1VDIzMDQ0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWY3OTFhNjFkYTMxNTFiNzVhYzk4YzhhNWRhY2IwOTY0YzQxOTFhYzAwZmE3ODYyN2UxODY2NTBlOTc2NzM1ZDUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.vuXhIJuGovf6jft75IUCqWA-miUlgc4uv_cJO-5BqtQ" width="550" />
 <p><em>Figure 6. Order confirmation.</em></p>
</div>

<div align="center">
  <img src="https://private-user-images.githubusercontent.com/83819706/540301726-e93fe981-e7fc-4df0-81c7-8edc43b80dd6.PNG?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjkzODQxMzUsIm5iZiI6MTc2OTM4MzgzNSwicGF0aCI6Ii84MzgxOTcwNi81NDAzMDE3MjYtZTkzZmU5ODEtZTdmYy00ZGYwLTgxYzctOGVkYzQzYjgwZGQ2LlBORz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAxMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMTI1VDIzMzAzNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTg0YWYwMTBmNjc0MzI4NjIwZTQ1ZjI2M2I1YjAwZjkyOWE1ZDA5M2NmYzRiMmVmZjJmNWRiYWY1NGM2MDZlZjgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.APQ8dBZxdHmY5qGu8Ue_t_a5HQae7TvRw1k3idoa3Xc" width="550" />
  <p><em>Figure 7. Order placed screen.</em></p>
</div>

<hr />

<h2 id="customization">🖌️ Customization</h2>

<p>
  The application menu allows for personalizing the user experience, 
  including theme switching, activating the soundtrack, 
  and language toggling.
</p>

<div align="center">
  <img src="https://private-user-images.githubusercontent.com/83819706/540299718-fe2616f1-a525-49cc-b0a8-3e02ed65a16e.PNG?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjkzODI1ODQsIm5iZiI6MTc2OTM4MjI4NCwicGF0aCI6Ii84MzgxOTcwNi81NDAyOTk3MTgtZmUyNjE2ZjEtYTUyNS00OWNjLWIwYTgtM2UwMmVkNjVhMTZlLlBORz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAxMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMTI1VDIzMDQ0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTkzNTk0ODBkMGY5ZWYwNzRjNDQ1MmRiNjI3MzJkNGM5MmMxMjMxYTZlMjVmYzg0YzViZDQyODI4YWM0Y2ZjNjgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.r1MHI4F0KHOQikzroa39bzOErK14jcQSgmtmktvVM4E" width="550" />
  <p><em>Figure 8. Personalization tip.</em></p>
</div>

<div align="center">
  <img src="https://private-user-images.githubusercontent.com/83819706/540299727-0dd54722-c007-445c-800d-38d386fe795f.PNG?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjkzODI1ODQsIm5iZiI6MTc2OTM4MjI4NCwicGF0aCI6Ii84MzgxOTcwNi81NDAyOTk3MjctMGRkNTQ3MjItYzAwNy00NDVjLTgwMGQtMzhkMzg2ZmU3OTVmLlBORz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAxMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMTI1VDIzMDQ0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWFkNDMyOWVmYjg5YmJmMjQ0NDUzZGMwZGJlZmIwNzJjYTJhN2YzMjNkNmYxNTRiNGNjOTk4ZGVkZGE2ZmZiZjImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.G9XbB7al79NTt5skpZWGo8iJYTNFuC3ncwfGw4JcvgI" width="350" />
  <p><em>Figure 9. Application menu.</em></p>
</div>

<div align="center">
  <img src="https://private-user-images.githubusercontent.com/83819706/540299733-ff94d330-8621-4176-ba28-a560cd5c35ca.PNG?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjkzODI1ODQsIm5iZiI6MTc2OTM4MjI4NCwicGF0aCI6Ii84MzgxOTcwNi81NDAyOTk3MzMtZmY5NGQzMzAtODYyMS00MTc2LWJhMjgtYTU2MGNkNWMzNWNhLlBORz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAxMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMTI1VDIzMDQ0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWU1ZTc5YTQ3NDhmMjk1MTQxOTI4OTMwNDdlMzcxNzBjNDhjMGU1MGM4MTg4OGFjNTllYjMxZjA3ODEzYjQ2NmUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.hRkMCfnLQ_-uA28PdgH4Nw-byaTISxEcODIJS5LD_ek" width="550" />
  <p><em>Figure 10. Retrowave Theme.</em></p>
</div>

<div align="center">
  <img src="https://private-user-images.githubusercontent.com/83819706/540299741-e2e088fd-4c69-489b-b185-b4339040ac1d.PNG?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjkzODI1ODQsIm5iZiI6MTc2OTM4MjI4NCwicGF0aCI6Ii84MzgxOTcwNi81NDAyOTk3NDEtZTJlMDg4ZmQtNGM2OS00ODliLWIxODUtYjQzMzkwNDBhYzFkLlBORz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAxMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMTI1VDIzMDQ0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTZkM2U2MDk2ZDI0MWZjZjFlMTc3NzExNGVhOTBkM2M1NDQzYjNiMWE2ODVhZTdkZDEzNjM1ZTFkYjlkY2UzODQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.-KPCMBN6BYCPOVlqorrGfiM7jj87PYNyh1yQoBUsG24" width="550" />
  <p><em>Figure 11. Darkwave Theme.</em></p>
</div>

<hr />

<h2 id="development">🛠️ Development</h2>

<p align="justify">
  The project began with the planning of the application interface, following UI/UX Design criteria using the Figma tool.
</p>

<div align="center">
  <img src="https://private-user-images.githubusercontent.com/83819706/540299750-6fa035a9-0679-4400-8761-ecaf6f1e3e4c.PNG?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjkzODI1ODQsIm5iZiI6MTc2OTM4MjI4NCwicGF0aCI6Ii84MzgxOTcwNi81NDAyOTk3NTAtNmZhMDM1YTktMDY3OS00NDAwLTg3NjEtZWNhZjZmMWUzZTRjLlBORz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAxMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMTI1VDIzMDQ0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWEwZWEzNjgwMTY0MTE0OWQyNTcxMzI2ZjIyMTdlNTFmNjZiMmI5MGU1YjE3ZTdjY2NiMTE0ZTRmZGMwZjc2YzMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.Wf7_xjDNfq6mEe69vo-81RRNaM6fcqbMyWTqDMbu0gY" width="550" />
  <p><em>Figure 12. Mocks designed in Figma.</em></p>
</div>

<p align="justify">
  Once the interface was decided, the business rules for the application were established, along with the planning for how data would be stored and returned by the backend.
</p>

<div align="center">
  <img src="https://private-user-images.githubusercontent.com/83819706/540299757-0be02cbf-a38c-4e3e-aaf8-629389a9b14c.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjkzODI1ODQsIm5iZiI6MTc2OTM4MjI4NCwicGF0aCI6Ii84MzgxOTcwNi81NDAyOTk3NTctMGJlMDJjYmYtYTM4Yy00ZTNlLWFhZjgtNjI5Mzg5YTliMTRjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAxMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMTI1VDIzMDQ0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTNkNTAwZWE5OGZiNGJmYzUxN2FjNjdjMDMwMzU4NmE4OWZmNDA4MGRlNGJlZTk1NDZiYjM2ZDJkNzQ0OWE4ZTUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.ye0mGRAye4mxN2LLIZC92WKfQBDDyaQI43vBFQLQZ0I" width="550" />
<p><em>Figure 13. Relational database model.</em></p>
</div>

<p align="justify">
  Subsequently, the development of the frontend and backend followed, aiming for clean and organized segmentation to facilitate future maintenance.
</p>

<div align="center">
  <img src="https://private-user-images.githubusercontent.com/83819706/540299763-05eb6d82-8101-4c34-80c5-fff6d48baa6a.PNG?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjkzODI1ODQsIm5iZiI6MTc2OTM4MjI4NCwicGF0aCI6Ii84MzgxOTcwNi81NDAyOTk3NjMtMDVlYjZkODItODEwMS00YzM0LTgwYzUtZmZmNmQ0OGJhYTZhLlBORz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAxMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMTI1VDIzMDQ0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTMwYTNhYTMwODJlZGZhNDYwNWNhOGYxYjVhMDA5NmYxNThiYmMwYWIwMTgwMWEyMGVhZjkxZTdlNTUwYjkyMTkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.64b4sCPU-9XLayhAM3APOvb6P4rGvcafmCKFSeVcG7Y" width="250" />
<p><em>Figure 14. Directory organization.</em></p>
</div>

<p align="justify">
  Finally, unit tests were created for all frontend files to ensure security and quality in the application's performance.
</p>

<div align="center">
  <img src="https://private-user-images.githubusercontent.com/83819706/540299769-099fe6d3-3f60-4670-b1c9-cc25d83487da.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjkzODI1ODQsIm5iZiI6MTc2OTM4MjI4NCwicGF0aCI6Ii84MzgxOTcwNi81NDAyOTk3NjktMDk5ZmU2ZDMtM2Y2MC00NjcwLWIxYzktY2MyNWQ4MzQ4N2RhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAxMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMTI1VDIzMDQ0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTlkMmFjMDc1YmM0NTA5NmNlNWQxNDM4ZWVhMjk0Y2ZiMzUxMDllM2I5ZDI0N2JjM2E0Mzc5MzNmMmFlZWU1YWEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.AdIid0a__-hDavcmwJ0k0BzD-VEOzWONC8erYPgZqec" width="550" />
<p><em>Figure 15. Unit tests.</em></p>
</div>

<hr />
<h2 id="how-to-run">▶️ How to Run the Project</h2>

<p>
  The repository is organized into two main folders:
  <strong>frontend</strong> and <strong>backend</strong>.
  Each part of the application must be run independently, 
  after accessing the corresponding directory.
</p>

<h3>📋 Prerequisites</h3>
<ul>
  <li>Node.js <strong>&gt;= 18</strong></li>
  <li>Yarn or NPM</li>
</ul>

<hr />

<h3>🔧 Backend</h3>

<p>
  Access the backend folder before running the commands:
</p>

<pre>
cd backend
</pre>

<p>Install dependencies, set up the database, and start the server:</p>

<pre>
yarn install
yarn db:setup
yarn dev
</pre>

<p>
  The server will be available at:
  <br />
  <a href="http://localhost:3001" target="_blank">
    http://localhost:3001
  </a>
</p>

<hr />

<h3>🎨 Frontend</h3>

<p>
  In another terminal, access the frontend folder:
</p>

<pre>
cd frontend
</pre>

<p>Install dependencies and start the application:</p>

<pre>
yarn install
yarn build
yarn prod
</pre>

<p>
  The application will be available at:
  <br />
  <a href="http://localhost:3000" target="_blank">
    http://localhost:3000
  </a>
</p>

<hr />

<h3>🧪 Testing</h3>

<p>
  Unit tests are located exclusively in the
  <strong>frontend</strong>.
  Make sure you are inside the folder before running them:
</p>

<pre>
cd frontend
yarn test
</pre>

<p>To run tests in continuous mode (CI / single run):</p>

<pre>
yarn test:run
</pre>

<hr />

<h2 id="acknowledgments">🤝 Acknowledgments</h2>

<p>
  This project was a collaboration with 
  <strong>Technical Lead – Max Milan</strong>, 
  who was responsible for the definition and architecture of the application's <strong>backend</strong>.
</p>

<p>
  Below is the link to his GitHub profile:
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
          Example: I had the opportunity to train and share my backend knowledge with my longtime friend, I hope everyone enjoys this project.
        </em>
      </blockquote>
    </td>
  </tr>
</table>
