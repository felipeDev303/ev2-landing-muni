// tailwind.config.js
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html", // Si tienes un index.html en la raíz
    "./src/**/*.{js,ts,jsx,tsx}", // Escanea todos los archivos JS/TS/JSX/TSX en la carpeta src
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}", // Para los componentes de Material Tailwind
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}", // Para el tema de Material Tailwind
  ],
  theme: {
    extend: {
      // Aquí puedes extender el tema de Tailwind, por ejemplo, con tus colores personalizados
      // colors: {
      //   'custom-blue': '#1DA1F2',
      // },
    },
  },
  plugins: [
    // Aquí puedes añadir plugins de Tailwind si los necesitas
  ],
});