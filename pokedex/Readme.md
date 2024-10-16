Aplicación Pokedex
Esta es una aplicación dinámica e interactiva de Pokedex creada con Vue 3. La aplicación permite a los usuarios ver, crear y administrar una colección de Pokémon. El frontend se comunica con una API de backend para manejar operaciones CRUD en datos de Pokémon. La aplicación usa Vue Router para navegación, Pinia para administración de estado y se conecta a una API alojada en http://localhost:8080/api/pokemons.

Características
Ver Pokémon : muestra una lista de Pokémon con detalles como nombre, descripción, altura, peso e imagen.
Crear Pokémon : un formulario para crear y agregar nuevos Pokémon a la base de datos.
Interfaz de usuario dinámica : utiliza componentes reutilizables para mostrar datos de Pokémon y administrar el diseño.
Integración de API : se conecta a una API REST para obtener, crear y administrar datos de Pokémon.
Gestión de estado : aprovecha Pinia para gestionar el estado global en todos los componentes.
Tecnologías utilizadas
Vue 3 : Marco de interfaz moderno para crear la interfaz de usuario.
Pinia : Sistema de gestión de estados para administrar los datos de Pokémon de la aplicación.
Vue Router : para navegar y administrar múltiples vistas.
HTML5 y CSS3 : para estructurar y dar estilo a la aplicación.
JavaScript (ES6+) : lenguaje de programación central para la implementación lógica.
API REST : Punto final del backend para manejar datos de Pokémon.

Estructura del proyecto
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── FooterComponent.vue
│   │   ├── HeaderComponent.vue
│   │   ├── PokemonCard.vue
│   ├── views/
│   │   ├── HomeView.vue
│   │   ├── CreatorView.vue
│   ├── stores/
│   │   └── Pokemon.js
│   ├── App.vue
│   ├── main.js
│   ├── router/
│   │   └── index.js
├── README.md
├── package.json

App.vue : el componente de entrada principal que contiene el encabezado, el pie de página y el contenido principal enrutado dinámicamente.
HomeView.vue : muestra la lista de todos los Pokémon disponibles usando PokemonCard.
CreatorView.vue : contiene un formulario para crear y agregar nuevos Pokémon a la lista.
PokemonCard.vue : componente reutilizable que representa datos individuales de Pokémon.
Pokemon.js : tienda Pinia que maneja la obtención y creación de Pokémon.
FooterComponent.vue y HeaderComponent.vue : componentes estándar para el diseño de página.
Configuración e instalación
Para ejecutar este proyecto localmente, siga estos pasos:

1. Clonar el repositorio
git clone https://github.com/Marconidas/pokedex-vue3.git
cd pokedex-vue3
2. Instalar dependencias
Asegúrate de tener instalado Node.js. Luego, ejecuta:
npm install
3. Iniciar el servidor de desarrollo
npm run dev
Esto iniciará la aplicación en http://localhost:3000.
4. Configuración de la API de back-end
Asegúrese de que la API de backend se esté ejecutando en http://localhost:8080/api/pokemons. Puede personalizar la URL base en la Pokemon.jstienda si es necesario.

Mejoras futuras
Actualizar Pokémon : permite a los usuarios editar los detalles de los Pokémon.
Búsqueda avanzada : agrega filtros y funcionalidad de búsqueda para Pokémon.
Paginación : Paginar resultados para una gran cantidad de entradas de Pokémon.
Licencia
Este proyecto está licenciado bajo la licencia MIT.

Contribuyendo
¡Se aceptan contribuciones! Envíe una solicitud de incorporación de cambios o abra un problema para analizar posibles cambios.

Contacto
Si tienes alguna pregunta o problema, no dudes en comunicarte con nosotros:

Correo electrónico : marquitosbcn80@gmail.com
GitHub : Marconidas
Esta README.mdguía sirve para configurar y comprender la aplicación Pokedex. Siéntete libre de ajustar cualquier detalle específico para tu proyecto.











ChatGPT puede cometer 