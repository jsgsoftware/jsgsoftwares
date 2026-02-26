# JSG Softwares — Sitio web

Landing de una sola página para ofrecer servicios de desarrollo de software (API, web, automatizaciones, Zoho e integraciones) con botones de contacto por correo y WhatsApp.

## Requisitos

- Node.js + npm

## Comandos

- Instalar dependencias: `npm install`
- Desarrollo (HMR): `npm run dev`
- Build producción: `npm run build`
- Previsualizar build: `npm run preview`

## Personalización rápida

- Contenido y datos de contacto: [src/App.tsx](src/App.tsx)
- Estilos: [src/index.css](src/index.css) y [src/App.css](src/App.css)

## Deploy

El build queda en `dist/`. Puedes subir esa carpeta a cualquier hosting estático o usar un proveedor tipo Vercel/Netlify.

## Docker

### Build y run (Docker)

- Build: `docker build -t jsgsoftwares .`
- Run: `docker run --rm -p 8085:80 jsgsoftwares`
- Abre: `http://localhost:8085`

### Docker Compose

- `docker compose up --build`
- Abre: `http://localhost:8085`

Si ya tienes ocupado el puerto `8085`, puedes cambiar el mapeo en `docker-compose.yml` o usar otro puerto en `docker run`.
