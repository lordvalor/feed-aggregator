# Feed Aggregator

Este proyecto es un agregador de feeds RSS/Atom creado con [Eleventy](https://www.11ty.dev/). Permite consumir los últimos posts de blogs mediante sus feeds y organizarlos por categorías en una página web estática que se actualiza automáticamente.

## Características
- Consume feeds RSS o Atom de diferentes blogs.
- Muestra el último post de cada feed.
- Organiza los posts por categorías.
- Actualización automática cuando hay nuevos posts en los feeds.

## Requisitos
- Node.js v16 o superior.
- npm v7 o superior.

## Instalación
1. Clona este repositorio:
   ```bash
   git clone https://github.com/lordvalor/feed-aggregator.git
   cd feed-aggregator
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura los feeds que deseas consumir:
   - Edita el archivo `feeds.json` para agregar las URLs de los feeds y sus categorías. Ejemplo:
     ```json
     [
       { "url": "https://ejemplo.com/feed", "categoria": "Tecnología" },
       { "url": "https://otroblog.com/rss", "categoria": "Cultura" }
     ]
     ```

## Uso
1. Genera el sitio estático con Eleventy:
   ```bash
   npx @11ty/eleventy
   ```

2. Los archivos generados estarán en la carpeta `_site`.

3. Puedes servir el sitio localmente para pruebas:
   ```bash
   npx @11ty/eleventy --serve
   ```

4. Abre `http://localhost:8080` en tu navegador para ver el sitio.

## Estructura del Proyecto
```
feed-aggregator/
├── .eleventy.js        # Configuración de Eleventy
├── feeds.json          # Listado de feeds y sus categorías
├── package.json        # Dependencias y scripts
├── src/                # Directorio de fuentes
│   ├── _data/          # Datos generados (incluye el archivo posts.js)
│   └── index.njk       # Plantilla principal del sitio
└── _site/              # Archivos generados (carpeta de salida)
```

## Automatización
Para mantener el sitio actualizado con los últimos posts:
- Configura una tarea programada (cron job) o un pipeline de CI/CD (por ejemplo, GitHub Actions) para regenerar el sitio periódicamente.

## Tecnologías Utilizadas
- [Eleventy](https://www.11ty.dev/): Generador de sitios estáticos.
- [rss-parser](https://www.npmjs.com/package/rss-parser): Librería para consumir y parsear feeds RSS y Atom.

## Despliegue
Puedes desplegar este proyecto en servicios como [Netlify](https://www.netlify.com/) o [Vercel](https://vercel.com/):
1. Conecta tu repositorio al servicio de despliegue.
2. Configura el comando de construcción:
   ```bash
   npx @11ty/eleventy
   ```
3. Configura la carpeta de salida como `_site`.

## Contribuciones
Las contribuciones son bienvenidas. Si encuentras un error o tienes una sugerencia, abre un issue o envía un pull request.

## Licencia
Este proyecto está licenciado bajo la [MIT License](LICENSE).