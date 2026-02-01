<h1 align="center">🍔 Retro-Burguers</h1>

<div align="right">
  <strong>EN-US</strong> |
  <a href="https://github.com/ewnsilva/retro-burgers/blob/main/README_pt-br.md">
    PT-BR
  </a> | 
  <a href="https://github.com/ewnsilva/retro-burgers/blob/main/README_es-es.md">
    ES-ES
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

</p>

🔗 <a href="https://retro-burgers.vercel.app/" target="_blank">
Check out the project now at Vercel.
</a>

<hr />

<h2 id="overview"  align="justify">📸 Overview</h2>

<div align="center">
  <img src="https://github.com/user-attachments/assets/e66b6ad7-8895-482f-bb87-e71a24f9577c"
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
  <img src="https://github.com/user-attachments/assets/4ddd7bdd-e265-4da1-932e-49a347a07f16" width="550" />
  <p><em>Figure 2. Product selection.</em></p>
</div>

<p align="justify">
  In addition to adding products to the cart, there is an extra option to customize the desired product, which can be seen to the left of the "add to cart" button.
</p>

<div align="center">
  <img src="https://github.com/user-attachments/assets/a7d2af71-96d5-4d9c-b70d-cf3f8527b9c2" width="550" />
 <p><em>Figure 3. Add-ons button.</em></p>
</div>

<p align="justify">
  After clicking, a screen will be displayed where the user can include a series of add-ons to the product before adding it to the order list.
</p>

<div align="center">
  <img src="https://github.com/user-attachments/assets/8b13c213-10b7-4db7-a990-78dd79c5b576" width="550" />
 <p><em>Figure 4. Add-ons list.</em></p>
</div>

<p align="justify">
  After navigating through categories and adding the desired products, the user can click the cart button on the right side of the screen to view the order list, where they can change quantities or remove items from the list.
</p>

<div align="center">
  <img src="https://github.com/user-attachments/assets/87922c20-7d6d-4ff1-961a-90095bb6f0e9" width="550" />
 <p><em>Figure 5. Product cart.</em></p>
</div>

<p align="justify">
  By clicking "Place Order," a modal will open for the user to check products and their respective quantities. If everything is correct, they can confirm, and the application will display a "purchase completed" message, as seen in the images below.
</p>

<div align="center">
  <img src="https://github.com/user-attachments/assets/2399cc49-08cb-4427-bf8c-5c0175c4231a" width="550" />
 <p><em>Figure 6. Order confirmation.</em></p>
</div>

<div align="center">
  <img src="https://github.com/user-attachments/assets/34ee693b-aa07-4e2e-97c9-38e245a01795" width="550" />
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
  <img src="https://github.com/user-attachments/assets/1a3e123a-16e0-43d6-ae6e-33ece6120a28" width="550" />
  <p><em>Figure 8. Personalization tip.</em></p>
</div>

<div align="center">
  <img src="https://github.com/user-attachments/assets/9a371f60-c4e4-4ac5-af25-90bd80af7880" width="350" />
  <p><em>Figure 9. Application menu.</em></p>
</div>

<div align="center">
  <img src="https://github.com/user-attachments/assets/78f07274-2f23-4602-b9c4-8513f3efeca5" width="550" />
  <p><em>Figure 10. Retrowave Theme.</em></p>
</div>

<div align="center">
  <img src="https://github.com/user-attachments/assets/d594edad-e60b-4fe9-b3f4-ae9d872cd439" width="550" />
  <p><em>Figure 11. Darkwave Theme.</em></p>
</div>

<hr />

<h2 id="development">🛠️ Development</h2>

<p align="justify">
  The project began with the planning of the application interface, following UI/UX Design criteria using the Figma tool.
</p>

<div align="center">
  <img src="https://github.com/user-attachments/assets/801bb864-7811-436f-af39-b0de49e6831a" width="550" />
  <p><em>Figure 12. Mocks designed in Figma.</em></p>
</div>

<p align="justify">
  Once the interface was decided, the business rules for the application were established, along with the planning for how data would be stored and returned by the backend.
</p>

<div align="center">
  <img src="https://github.com/user-attachments/assets/e1ecf732-4307-45f9-a99d-2e80a1f61fe3" width="550" />
<p><em>Figure 13. Relational database model.</em></p>
</div>

<p align="justify">
  Subsequently, the development of the frontend and backend followed, aiming for clean and organized segmentation to facilitate future maintenance.
</p>

<div align="center">
  <img src="https://github.com/user-attachments/assets/0e6d5ec2-b0f8-423e-a4c0-0c9d975512e5" width="250" />
<p><em>Figure 14. Directory organization.</em></p>
</div>

<p align="justify">
  Finally, unit tests were created for all frontend files to ensure security and quality in the application's performance.
</p>

<div align="center">
  <img src="https://github.com/user-attachments/assets/2249f6fc-2342-47ae-93b4-e6b28ed27344" width="550" />
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
          "Participating in this project was a rewarding experience. I had the opportunity to share my backend knowledge with a long-time friend, in a process marked by exchange, learning, and collaboration. Projects like this show how collaboration and friendship make all the difference in development."
        </em>
      </blockquote>
    </td>
  </tr>
</table>
