import React from "react";
import { Typography } from "@material-tailwind/react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#23272f] text-white py-10 px-4 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Alcalde y Sedes */}
        <div>
          <Typography variant="h6" className="mb-2 font-bold uppercase">Alcalde</Typography>
          <Typography variant="paragraph" className="mb-4">Álvaro Labraña Soto</Typography>
          <Typography variant="h6" className="mb-2 font-bold uppercase">Sedes Municipales</Typography>
          <Typography variant="paragraph">Centro Cívico: José Joaquín Pérez 449</Typography>
        </div>
        {/* Servicios Externos */}
        <div>
          <Typography variant="h6" className="mb-2 font-bold uppercase">Servicios Externos</Typography>
          <ul className="space-y-1">
            <li>Registro Civil</li>
            <li>Juzgado de Policía Local</li>
            <li>Servicio de Impuestos Internos</li>
            <li>Sernac</li>
            <li>Tesorería General de la República</li>
          </ul>
        </div>
        {/* Servicios Municipales */}
        <div>
          <Typography variant="h6" className="mb-2 font-bold uppercase">Servicios Municipales</Typography>
          <ul className="space-y-1">
            <li>Regístrese aquí</li>
            <li>Trabaja con Nosotros</li>
            <li>Servicios Disponibles</li>
            <li>Oficina de Partes</li>
            <li>Reclamos y Sugerencias</li>
          </ul>
        </div>
        {/* Contacto y Redes */}
        <div>
          <Typography variant="h6" className="mb-2 font-bold uppercase">Contáctanos Aquí</Typography>
          <Typography variant="paragraph" className="mb-2">Teléfono: 452 734200</Typography>
          <Typography variant="paragraph" className="mb-2">Horario de atención: 08:30 a 14:00</Typography>
          <Typography variant="h6" className="mb-2 font-bold uppercase">Redes Sociales</Typography>
          <ul className="flex gap-4 mt-2">
            <li><a href="#" aria-label="Instagram" className="hover:text-cyan-400">Instagram</a></li>
            <li><a href="#" aria-label="Facebook" className="hover:text-cyan-400">Facebook</a></li>
            <li><a href="#" aria-label="Twitter" className="hover:text-cyan-400">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-8">&copy; {new Date().getFullYear()} Municipalidad de Cholchol. Todos los derechos reservados.</div>
    </footer>
  );
}
