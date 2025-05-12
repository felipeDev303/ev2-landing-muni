# EV2 Landing Muni

Este proyecto es una landing page desarrollada en React utilizando Vite, enfocada en la gestión y servicios municipales para vecinos. Incluye una barra de navegación multinivel (MultiLevelNavbar) con distintas secciones y submenús para acceder a trámites, servicios, educación, salud, seguridad y más.

## Tecnologías principales
- React
- Vite
- TailwindCSS
- Material Tailwind
- React Router DOM
- Heroicons

## Estructura del proyecto

La estructura principal del proyecto es la siguiente:

- `/src/App.jsx`: Componente principal de la aplicación.
- `/src/MultiLevelNavbar.jsx`: Barra de navegación multinivel con categorías y submenús.
- `/src/ContactForm.jsx`, `/src/Footer.jsx`, `/src/HeroActions.jsx`, `/src/InfoCarousel.jsx`, `/src/MapaMunicipalidad.jsx`, `/src/TouristCarousel.jsx`: Componentes individuales para distintas secciones y funcionalidades.
- `/src/assets/`: Recursos estáticos como imágenes o íconos.
- `tailwind.config.js` y `postcss.config.js`: Configuración de TailwindCSS.
- `vite.config.js`: Configuración de Vite.

Esta organización permite un desarrollo modular y facilita la escalabilidad del proyecto.

## Próximo Sprint
El próximo sprint estará enfocado en **agregar información detallada a cada `MenuItem`** del menú de navegación. Esto incluirá contenido del municipio,     descripciones, iconos y enlaces adicionales para mejorar la experiencia del usuario y facilitar el acceso a los servicios municipales.

---

Para visualizar el proyecto, es necesario ejecutar el siguiente comando:

```powershell
pnpm run dev
```
