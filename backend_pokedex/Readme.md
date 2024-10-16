# Pokedex Backend

Este proyecto es una API RESTful desarrollada con **Java Spring Boot** para gestionar una base de datos de Pokemons. La aplicación permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los datos de los Pokemons almacenados en una base de datos **MySQL**. La API está diseñada para ser consumida por aplicaciones frontend que se ejecutan en **Vue.js** o cualquier otro cliente web.

## Tecnologías

- **Java 17**
- **Spring Boot 3.3.3**
- **MySQL** como base de datos relacional
- **Spring Data JPA** para la persistencia de datos
- **Lombok** para la reducción de boilerplate en los modelos
- **Jakarta Persistence API (JPA)**
- **CORS** configurado para permitir peticiones desde aplicaciones frontend

## Configuración del Proyecto

### 1. Requisitos Previos

- **Java 17** o superior instalado
- **MySQL** instalado y en ejecución
- **Maven** para gestionar las dependencias

### 2. Clonar el Repositorio

```bash
git clone https://github.com/tu_usuario/pokedex-backend.git
cd pokedex-backend

3. Configuración de la Base de Datos
Asegúrese de tener una instancia de MySQL en ejecución y modifique las propiedades de conexión en el archivo application.propertiessi es necesario:

spring.datasource.url=jdbc:mysql://localhost:3306/pokemons?createDatabaseIfNotExist=true
spring.datasource.username=root
spring.datasource.password=IRONHACK
spring.jpa.hibernate.ddl-auto=update
Estas propiedades permiten que la base de datos se cree automáticamente si no existe. Se recomienda cambiar la configuración ddl-auto a update para entornos de producción.

4. Ejecutar la aplicación
Puedes ejecutar la aplicación con el siguiente comando:
mvn spring-boot:run
La API estará disponible en http://localhost:8080/api/pokemons.

Puntos finales de la API
Método	Punto final	Descripción
CONSEGUIR	/api/pokemons	Obtén la lista de todos los Pokémon.
CONSEGUIR	/api/pokemons/{id}	Consigue un Pokémon por su ID
CORREO	/api/pokemons	Crea un nuevo Pokémon
BORRAR	/api/pokemons/{id}	Eliminar un Pokémon por su ID
Ejemplo de petición POST
intento
POST /api/pokemons
Content-Type: application/json

{
   "name": "Pikachu",
   "description": "Un pokemon eléctrico",
   "image": "https://imagen.com/pikachu.png",
   "altura": 0.4,
   "peso": 6.0
}
Ejemplo de Petición DELETE
DELETE /api/pokemons/1
Configuración CORS
La configuración CORS permite solicitudes desde los siguientes orígenes:

http://localhost:5174
http://localhost:5173
Esto es útil si estás desarrollando un cliente frontend en Vue.js u otro framework.
@Override
public void addCorsMappings(CorsRegistry registry) {
   registry.addMapping("/api/**")
           .allowedOrigins("http://localhost:5174", "http://localhost:5173")
           .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
           .allowedHeaders("*")
           .allowCredentials(true);
}
Contribución
Las contribuciones son bienvenidas. Si deseas mejorar el proyecto, por favor sigue los siguientes pasos:

Haz una bifurcación del proyecto.
Crea una nueva rama ( git checkout -b feature/nueva-funcionalidad).
Realiza tus cambios y comete ( git commit -am 'Añadir nueva funcionalidad').
Haz push de la rama ( git push origin feature/nueva-funcionalidad).
Abrir una solicitud de extracción .
Licencia
Este proyecto está licenciado bajo la Licencia MIT - ver el archivo LICENSE para más detalles.








