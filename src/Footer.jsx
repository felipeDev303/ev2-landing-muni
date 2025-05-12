import React from "react";
import { Typography } from "@material-tailwind/react";
import { FaInstagram, FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-[#23272f] text-white py-10 px-4 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Alcalde y Sedes */}
        <div>
          <Typography variant="h6" className="mb-2 font-bold uppercase">
            Alcalde
          </Typography>
          <Typography variant="paragraph" className="mb-4">
            Álvaro Labraña Soto
          </Typography>
          <Typography variant="h6" className="mb-2 font-bold uppercase">
            Sedes Municipales
          </Typography>
          <Typography variant="paragraph">
            Centro Cívico: José Joaquín Pérez 449
          </Typography>
        </div>
        {/* Servicios Externos */}
        <div>
          <Typography variant="h6" className="mb-2 font-bold uppercase">
            Servicios Externos
          </Typography>
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
          <Typography variant="h6" className="mb-2 font-bold uppercase">
            Servicios Municipales
          </Typography>
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
          <Typography variant="h6" className="mb-2 font-bold uppercase">
            Contáctanos Aquí
          </Typography>
          <Typography variant="paragraph" className="mb-2">
            Teléfono: 452 734200
          </Typography>
          <Typography variant="paragraph" className="mb-2">
            Horario de atención: 08:30 a 14:00
          </Typography>
          <Typography variant="h6" className="mb-2 font-bold uppercase">
            Redes Sociales
          </Typography>
          <ul className="flex gap-4 mt-2">
            <li>
              <a
                href="https://www.instagram.com/municholchol_oficial/"
                aria-label="Instagram"
                className="text-xs bg-transparent text-gray-300 font-light hover:text-cyan-400 border-none shadow-none flex items-center px-3 py-2 rounded"
              >
                <FaInstagram className="w-5 h-5 mr-2" /> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/p/Municipalidad-de-Cholchol-100065025870874/"
                aria-label="Facebook"
                className="text-xs bg-transparent text-gray-300 font-light hover:text-cyan-400 border-none shadow-none flex items-center px-3 py-2 rounded"
              >
                <FaFacebook className="w-5 h-5 mr-2" /> Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center mt-8">
        <Link to="/" aria-label="Ir al inicio">
          <img
            src="/logo-muni.png"
            alt="Logo Municipalidad"
            className="h-16 w-auto mb-2 hover:scale-105 transition-transform duration-200"
          />
        </Link>
        <div className="text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Municipalidad de Cholchol. Todos los
          derechos reservados.
        </div>
      </div>
    </footer>
  );
}
