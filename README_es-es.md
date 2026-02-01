<h1 align="center">🍔 Retro-Burguers</h1>

<div align="right"> <a href="https://github.com/ewnsilva/retro-burgers">EN-US</a> | <a href="https://github.com/ewnsilva/retro-burgers/blob/main/README_pt-br.md">PT-BR</a> | <strong> ES-ES </strong> </div>

</p>

<p align="justify"> Aplicación <strong>full-stack</strong> creada para entrenar y reforzar conocimientos en <strong>React</strong>, <strong>Node.js</strong> y <strong>pruebas automatizadas</strong>, simulando un e-commerce de hamburguesas y bebidas con un fuerte enfoque en <strong>arquitectura frontend</strong>, <strong>UX</strong>, <strong>internacionalización</strong> y <strong>buenas prácticas</strong>. </p>

<p align="justify"> El proyecto sigue el rigor técnico y organizacional utilizado por profesionales de nivel <strong>pleno</strong> y <strong>senior</strong>, con código escalable, tipado y testeado. </p>

<p align="justify"> 🎨 Visual inspirado en el estilo <strong>Synthwave / Miami Vice (años 80)</strong>, con múltiples temas, bandas sonoras dinámicas y animaciones fluidas. </p>

<hr />

<h2 id="vision-general" align="justify">📸 Visión General</h2>

<div align="center"> <img src="https://github.com/user-attachments/assets/e66b6ad7-8895-482f-bb87-e71a24f9577c" width="900" /> <p><em>Figura 1. Página principal de la aplicación.</em></p> </div>

<hr />

<h2>📌 Índice</h2>

<ul> <li><a href="#vision-general">📸 Visión General</a></li> <li><a href="#funcionalidades">✨ Funcionalidades</a></li> <li><a href="#tecnologias">🧰 Tecnologías Destacadas</a></li> <li><a href="#arquitectura">🏗️ Arquitectura</a></li> <li><a href="#decisiones-tecnicas">🧠 Decisiones Técnicas y Trade-offs</a></li> <li><a href="#destaques-tecnicos">⭐ Aspectos Técnicos Destacados</a></li> <li><a href="#limitaciones">⚠️ Limitaciones Conocidas</a></li> <li><a href="#proximos-pasos">🚀 Próximos Pasos y Posibles Evoluciones</a></li> <li><a href="#como-usar">🔍 Cómo Usar</a></li> <li><a href="#extras">🖌️ Personalización</a></li> <li><a href="#desarrollo">🛠️ Desarrollo</a></li> <li><a href="#como-ejecutar">▶️ Cómo Ejecutar el Proyecto</a></li> <li><a href="#agradecimientos">🤝 Agradecimientos</a></li> </ul>

<hr />

<h2 id="funcionalidades">✨ Funcionalidades</h2>

<h3>🛍️ E-commerce</h3> <ul> <li>Navegación por categorías dinámicas (vía API)</li> <li>Listado de productos con animaciones</li> <li>Detalles del producto y personalización con adicionales</li> <li>Carrito de compras persistente</li> <li>Modal de resumen del pedido</li> <li>Confirmación de pedido con feedback visual</li> </ul>

<h3>🌐 Internacionalización</h3> <ul> <li>Portugués 🇧🇷 e Inglés 🇺🇸 (Preparado para Español 🇪🇸)</li> <li>Cambio dinámico de idioma</li> <li>Backend preparado para múltiples idiomas</li> </ul>

<h3>🎨 Temas y Experiencia</h3> <ul> <li>3 temas visuales al estilo Synthwave</li> <li>Banda sonora exclusiva para cada tema</li> <li>Animaciones de carga (Skeletons)</li> <li>Fallback visual para imágenes con error</li> </ul>

<h3>🧪 Calidad y Pruebas</h3> <ul> <li>Pruebas unitarias con Vitest</li> <li>Pruebas de componentes y hooks</li> <li>ESLint + Prettier</li> <li>Código fuertemente tipado con TypeScript</li> </ul>

<hr />

<h2 id="tecnologias">🧰 Tecnologías Destacadas</h2>

<h3>Front-end</h3> <ul> <li>TypeScript</li> <li>React</li> <li>React Router DOM</li> <li>React Query</li> <li>Material UI</li> <li>i18n</li> <li>Axios</li> <li>Howler (banda sonora)</li> <li>Webpack</li> <li>Vitest</li> <li>Testing Library</li> <li>ESLint / Prettier</li> <li>dotenv / env-cmd</li> </ul>

<h3>Back-end</h3> <ul> <li>TypeScript</li> <li>Node.js</li> <li>Express</li> <li>REST API</li> <li>SQLite</li> <li>Sequelize</li> <li>CORS</li> <li>Nodemon</li> </ul>

<hr />

<h2 id="arquitectura">🏗️ Arquitectura</h2>

<h3>Frontend</h3> <ul> <li>Separación clara entre componentes de UI y lógica</li> <li>Hooks de lógica (<code>Home.Logic.ts</code>, <code>useProducts.ts</code>, etc.)</li> <li>Hooks de dominio (cart, language, theme)</li> <li>Navegación y categorías 100% dinámicas vía API</li> <li>Estados locales previsibles e aislados</li> <li>Aislamiento de dependencias externas en desarrollo</li> </ul>

<h3>Backend</h3> <ul> <li>API REST simple y objetiva</li> <li>Endpoints organizados por dominio</li> <li>Base de datos SQLite versionada mediante migraciones</li> </ul>

<h3>Endpoints Principales</h3> <ul> <li><code>GET /categories</code></li> <li><code>GET /products/:categoryId</code></li> </ul>

<p>Ejemplo de respuesta con soporte para múltiples idiomas:</p>

<pre> { "title": { "pt": "Hambúrguer", "en": "Burger", "es": "Hamburguesa" } } </pre>

<hr />

<h2 id="decisiones-tecnicas">🧠 Decisiones Técnicas y Trade-offs</h2>

<p align="justify"> Se tomaron algunas decisiones arquitectónicas de forma consciente buscando el equilibrio entre simplicidad, mantenibilidad y escalabilidad, considerando el alcance y los objetivos del proyecto. </p>

<ul> <li> <strong>React Query</strong><br /> Utilizado para la gestión del estado remoto, caché y sincronización de datos con la API, reduciendo la necesidad de soluciones globales más complejas. </li>

<li> <strong>Ausencia de Redux</strong><br /> El proyecto prioriza hooks y estado local/contextual, evitando complejidad innecesaria para el dominio actual de la aplicación. </li>

<li> <strong>Arquitectura basada en Hooks</strong><br /> Separación clara entre UI, lógica de presentación y reglas de dominio, favoreciendo la reutilización, testabilidad y legibilidad. </li>

<li> <strong>SQLite en el Backend</strong><br /> Elección pragmática para facilitar la configuración, versión y portabilidad, manteniendo el enfoque en el modelado de datos y reglas de negocio. </li>

<li> <strong>Internacionalización desde la API</strong><br /> Las respuestas del backend ya contemplan múltiples idiomas, evitando retrabajo y facilitando la expansión futura. </li> </ul>

<hr />

<h2 id="destaques-tecnicos">⭐ Aspectos Técnicos Destacados</h2> <ul> <li>Hooks reutilizables y bien tipados</li> <li>Sin datos "hardcoded" (todo vía API)</li> <li>UX optimizada para carga y errores</li> <li>Arquitectura preparada para escalar (React Query ready)</li> <li>Separación clara de responsabilidades</li> </ul>

<hr />

<h2 id="limitaciones">⚠️ Limitaciones Conocidas</h2>

<p align="justify"> Este proyecto fue desarrollado con un enfoque en el aprendizaje, la arquitectura y las buenas prácticas. Algunas funcionalidades comunes en aplicaciones de producción fueron intencionalmente dejadas fuera del alcance. </p>

<ul> <li>No hay autenticación ni perfiles de usuario.</li> <li>No existe integración con pasarelas de pago reales.</li> <li>El backend no fue optimizado para alta concurrencia o escalabilidad horizontal.</li> <li>No hay persistencia de pedidos finalizados.</li> <li>Las pruebas automatizadas están enfocadas en el frontend.</li> </ul>

<hr />

<h2 id="proximos-passos">🚀 Próximos Pasos y Posibles Evoluciones</h2>

<p align="justify"> Algunas mejoras y evoluciones naturales para este proyecto incluyen: </p>

<ul> <li>Implementación de autenticación y gestión de usuarios.</li> <li>Persistencia de pedidos e historial de compras.</li> <li>Pruebas de extremo a extremo (E2E) para validación de flujos críticos.</li> <li>Caché y paginación en el backend.</li> <li>Contenerización con Docker para estandarización del entorno.</li> <li>Pipeline de CI/CD.</li> </ul>

<hr />

<h2 id="como-usar">🔍 Cómo Usar</h2>

<p align="justify"> La aplicación funciona como un <strong>menú online</strong>. El usuario puede buscar productos, navegar por categorías y añadir artículos al carrito con un solo clic. </p>

<div align="center"> <img src="https://github.com/user-attachments/assets/4ddd7bdd-e265-4da1-932e-49a347a07f16" width="550" /> <p><em>Figura 2. Selección de productos.</em></p> </div>

<p align="justify"> Además de poder añadir los productos al carrito, existe una opción extra que permite personalizar el producto deseado, como se puede ver al lado izquierdo del botón de añadir al carrito. </p>

<div align="center"> <img src="https://github.com/user-attachments/assets/a7d2af71-96d5-4d9c-b70d-cf3f8527b9c2" width="550" /> <p><em>Figura 3. Botón de adicionales.</em></p> </div>

<p align="justify"> Tras hacer clic, se mostrará una pantalla donde el usuario puede incluir una serie de adicionales al producto antes de añadirlo a la lista de pedidos. </p>

<div align="center"> <img src="https://github.com/user-attachments/assets/8b13c213-10b7-4db7-a990-78dd79c5b576" width="550" /> <p><em>Figura 4. Lista de adicionales.</em></p> </div>

<p align="justify"> Después de navegar entre categorías y añadir los productos deseados, el usuario podrá hacer clic en el botón del carrito en el lado derecho de la pantalla para ver la lista de pedidos, pudiendo alterar la cantidad o eliminar elementos. </p>

<div align="center"> <img src="https://github.com/user-attachments/assets/87922c20-7d6d-4ff1-961a-90095bb6f0e9" width="550" /> <p><em>Figura 5. Carrito de productos.</em></p> </div>

<p align="justify"> Al hacer clic en realizar pedido, se abrirá un modal para que el usuario verifique los productos y sus respectivas cantidades. Si todo es correcto, podrá confirmar y la aplicación mostrará un mensaje de compra realizada, como se ve en las imágenes de abajo. </p>

<div align="center"> <img src="https://github.com/user-attachments/assets/2399cc49-08cb-4427-bf8c-5c0175c4231a" width="550" /> <p><em>Figura 6. Confirmación del pedido.</em></p> </div>

<div align="center"> <img src="https://github.com/user-attachments/assets/34ee693b-aa07-4e2e-97c9-38e245a01795" width="550" /> <p><em>Figura 7. Pantalla de pedido realizado.</em></p> </div>

<hr />

<h2 id="extras">🖌️ Personalización</h2>

<p> El menú de la aplicación permite personalizar la experiencia del usuario, incluyendo el cambio de temas, activación de la banda sonora y alternancia de idioma. </p>

<div align="center"> <img src="https://github.com/user-attachments/assets/1a3e123a-16e0-43d6-ae6e-33ece6120a28" width="550" /> <p><em>Figura 8. Sugerencia de personalización.</em></p> </div>

<div align="center"> <img src="https://github.com/user-attachments/assets/9a371f60-c4e4-4ac5-af25-90bd80af7880" width="350" /> <p><em>Figura 9. Menú de la aplicación.</em></p> </div>

<div align="center"> <img src="https://github.com/user-attachments/assets/78f07274-2f23-4602-b9c4-8513f3efeca5" width="550" /> <p><em>Figura 10. Tema Retrowave.</em></p> </div>

<div align="center"> <img src="https://github.com/user-attachments/assets/d594edad-e60b-4fe9-b3f4-ae9d872cd439" width="550" /> <p><em>Figura 11. Tema Darkwave.</em></p> </div>

<hr />

<h2 id="desarrollo">🛠️ Desarrollo</h2>

<p align="justify"> El proyecto comenzó con la planificación de la interfaz de la aplicación, siguiendo criterios de Diseño UI/UX a través de la herramienta Figma. </p>

<div align="center"><img src="https://github.com/user-attachments/assets/801bb864-7811-436f-af39-b0de49e6831a" width="550" /> <p><em>Figura 12. Mocks proyectados en Figma.</em></p> </div>

<p align="justify"> Una vez decidida la interfaz, se establecieron las reglas de negocio y la planificación de cómo se almacenarían los datos y cómo serían devueltos por el backend. </p>

<div align="center"> <img src="https://github.com/user-attachments/assets/e1ecf732-4307-45f9-a99d-2e80a1f61fe3" width="550" /> <p><em>Figura 13. Modelo relacional de la base de datos.</em></p> </div>

<p align="justify"> A continuación, se procedió al desarrollo del front-end y back-end, con el objetivo de lograr una segmentación limpia y organizada que facilitara cualquier mantenimiento futuro. </p>

<div align="center"> <img src="https://github.com/user-attachments/assets/0e6d5ec2-b0f8-423e-a4c0-0c9d975512e5" width="250" /> <p><em>Figura 14. Organización de directorios.</em></p> </div>

<p align="justify"> Por último, se crearon pruebas unitarias para todos los archivos del front-end para garantizar la seguridad y calidad en el funcionamiento de la aplicación. </p>

<div align="center"> <img src="https://github.com/user-attachments/assets/2249f6fc-2342-47ae-93b4-e6b28ed27344" width="550" /> <p><em>Figura 15. Pruebas unitarias.</em></p> </div>

<hr />

<h2 id="como-ejecutar">▶️ Cómo Ejecutar el Proyecto</h2>

<p> El repositorio está organizado en dos carpetas principales: <strong>frontend</strong> y <strong>backend</strong>. Cada parte de la aplicación debe ejecutarse de forma independiente, accediendo previamente al directorio correspondiente. </p>

<h3>📋 Requisitos previos</h3> <ul> <li>Node.js <strong>&gt;= 18</strong></li> <li>Yarn o NPM</li> </ul>

<hr />

<h3>🔧 Backend</h3>

<p> Accede a la carpeta del backend antes de ejecutar los comandos: </p>

<pre> cd backend </pre>

<p>Instala las dependencias, configura la base de datos e inicia el servidor:</p>

<pre> yarn install yarn db:setup yarn dev </pre>

<p> El servidor estará disponible en: <br /> <a href="http://localhost:3001" target="_blank"> http://localhost:3001 </a> </p>

<hr />

<h3>🎨 Frontend</h3>

<p> En otra terminal, accede a la carpeta del frontend: </p>

<pre> cd frontend </pre>

<p>Instala las dependencias e inicia la aplicación:</p>

<pre> yarn install yarn build yarn prod </pre>

<p> La aplicación estará disponible en: <br /> <a href="http://localhost:3000" target="_blank"> http://localhost:3000 </a> </p>

<hr />

<h3>🧪 Pruebas</h3>

<p> Las pruebas unitarias se encuentran exclusivamente en el <strong>frontend</strong>. Asegúrate de estar dentro de la carpeta antes de ejecutarlas: </p>

<pre> cd frontend yarn test </pre>

<p>Para ejecutar las pruebas en modo continuo (CI / ejecución única):</p>

<pre> yarn test:run </pre>

<hr />

<h2 id="agradecimentos">🤝 Agradecimientos</h2>

<p> Este proyecto contó con la colaboración del <strong>Líder Técnico de Desarrollo – Max Milan</strong>, responsable de la definición y arquitectura del <strong>backend</strong> de la aplicación. </p>

<p> A continuación, el enlace a su perfil de GitHub: </p>

<p> 🔗 <a href="https://github.com/crazymaax404" target="_blank"> Max Milan - GitHub </a> </p>

<table> <tr> <td width="120" valign="top"> <img src="https://avatars.githubusercontent.com/u/143542448?v=4" alt="Colaborador del Proyecto" width="125" style="border-radius: 30%;" /> </td> <td valign="middle"> <blockquote> <em> “Participar en este proyecto fue una experiencia gratificante. Tuve la oportunidad de compartir mis conocimientos en backend con un amigo de hace mucho tiempo, en un proceso marcado por el intercambio, el aprendizaje y la colaboración. Proyectos así muestran cómo la colaboración y la amistad marcan la diferencia en el desarrollo.” </em> </blockquote> </td> </tr> </table>
