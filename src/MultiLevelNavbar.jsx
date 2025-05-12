import React, { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

// Opciones de menú 
const menuItemsData = [
  {
    label: "Vecinos",
    submenu: [
      { label: "Trámites Online", href: "/vecinos/tramites-online" },
      { label: "Atención al Vecino", href: "/vecinos/atencion" },
      { label: "Educación", href: "/vecinos/educacion" },
      { label: "Salud", href: "/vecinos/salud" },
      { label: "Seguridad", href: "/vecinos/seguridad" },
      { label: "Beneficios Sociales", href: "/vecinos/beneficios-sociales" },
      { label: "Vivienda", href: "/vecinos/vivienda" },
      { label: "Asistencia Legal", href: "/vecinos/asistencia-legal" },
      { label: "Centro de Desarrollo Laboral", href: "/vecinos/centro-desarrollo-laboral" },
      { label: "Plan Regulador", href: "/vecinos/plan-regulador" },
      { label: "Organizaciones Comunitarias y Oficina Territorial", href: "/vecinos/organizaciones" },
      { label: "Aseo y Ornato", href: "/vecinos/aseo-ornato" },
      { label: "Reciclaje y Cuidado Ambiental", href: "/vecinos/reciclaje" },
      { label: "Mascotas y Animales", href: "/vecinos/mascotas" },
      { label: "Novedades", href: "/vecinos/novedades" },
      { label: "Prevención Juvenil", href: "/vecinos/prevencion-juvenil" },
    ],
  },
  {
    label: "Comunidades",
    submenu: [
      { label: "Red Mujer", href: "/comunidades/red-mujer" },
      { label: "Adulto Mayor", href: "/comunidades/adulto-mayor" },
      { label: "Infanto Juvenil", href: "/comunidades/infanto-juvenil" },
      { label: "Red de Inclusión", href: "/comunidades/inclusion" },
      { label: "Emprendedores", href: "/comunidades/emprendedores" },
      { label: "Participa", href: "/comunidades/participa" },
      { label: "Agrícola y ganadera", href: "/comunidades/agricola-ganadera" },
      { label: "Centro de Desarrollo Laboral", href: "/comunidades/centro-desarrollo-laboral" },
      { label: "Oficina de Asuntos Religiosos", href: "/comunidades/asuntos-religiosos" },
    ],
  },
  {
    label: "Disfruta Cholchol",
    submenu: [
      { label: "Cultura", href: "/disfruta/cultura" },
      { label: "Deportes", href: "/disfruta/deportes" },
      { label: "Cursos y Talleres en Cholchol", href: "/disfruta/cursos-talleres" },
    ],
  },
  {
    label: "Empresas",
    submenu: [
      { label: "Trámites y Solicitudes", href: "/empresas/tramites-solicitudes" },
      { label: "Plan Regulador", href: "/empresas/plan-regulador" },
      { label: "Emprende", href: "/empresas/emprende" },
      { label: "Licitaciones", href: "/empresas/licitaciones" },
      { label: "Centro de Desarrollo Laboral", href: "/empresas/centro-desarrollo-laboral" },
    ],
  },
  {
    label: "Municipalidad",
    submenu: [
      { label: "Autoridades", href: "/municipalidad/autoridades" },
      { label: "Direcciones", href: "/municipalidad/direcciones" },
      { label: "Conócenos", href: "/municipalidad/conocenos" },
      { label: "Cuenta Pública", href: "/municipalidad/cuenta-publica" },
      { label: "Concursos Públicos y Licitaciones", href: "/municipalidad/concursos" },
      { label: "Plan Regulador", href: "/municipalidad/plan-regulador" },
      { label: "Municipalidad en terreno", href: "/municipalidad/en-terreno" },
      { label: "Así usamos tus recursos", href: "/municipalidad/recursos" },
      { label: "Trabaja con Nosotros", href: "/municipalidad/trabaja" },
      { label: "Objetivos de Desarrollo Sostenible", href: "/municipalidad/ods" },
      { label: "Asociaciones", href: "/municipalidad/asociaciones" },
      { label: "Visor de roles y predios", href: "/municipalidad/visor-roles-predios" },
    ],
  },
  {
    label: "Colaboradores de gestión",
    submenu: [
      { label: "Cultura", href: "/colaboradores/cultura" },
      { label: "Deportes", href: "/colaboradores/deportes" },
      { label: "Seguridad", href: "/colaboradores/seguridad" },
      { label: "Servicios", href: "/colaboradores/servicios" },
    ],
  },
];

// Subcomponente para los items del menú con dropdowns
function NavMenuItem({ label, href, submenu }) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Triggers para hover. Para mejor soporte táctil.
  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };

  if (submenu) {
    return (
      <Menu open={isMenuOpen} handler={setIsMenuOpen} allowHover>
        <MenuHandler>
          <Typography as="div" variant="small" className="font-light outline-none text-gray-900 tracking-wide font-sans">
            <Button
              {...triggers}
              variant="text"
              className="flex items-center gap-1 px-3 py-2 text-gray-900 font-light hover:font-semibold focus:outline-none capitalize bg-transparent border-none shadow-none"
            >
              {label}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`h-3.5 w-3.5 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </Button>
          </Typography>
        </MenuHandler>
        <MenuList className="p-2 bg-cyan-400 border-none shadow-none">
          {submenu.map((sub, idx) => (
            <MenuItem key={idx} className="p-0 bg-cyan-400">
              <Typography
                as={Link}
                to={sub.href}
                variant="small"
                className="font-light outline-none text-gray-900 hover:font-bold tracking-wide font-sans"
              >
                {sub.label}
              </Typography>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    );
  }

  return (
    <Typography
      as={Link}
      to={href}
      variant="small"
      className="font-light py-2 px-3 rounded hover:bg-cyan-200 active:bg-cyan-300 focus:bg-cyan-300 capitalize text-gray-900 hover:text-cyan-900 hover:font-semibold tracking-wide font-sans"
    >
      {label}
    </Typography>
  );
}

// Lista de items para el menú principal
function MainNavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-start lg:justify-start lg:gap-3">
      {menuItemsData.map(({ label, href, submenu }) => (
        <NavMenuItem key={label} label={label} href={href} submenu={submenu} />
      ))}
    </ul>
  );
}

// Barra superior
function TopBar() {
  return (
    <div className="w-full px-4 py-2 bg-gradient-to-r from-[#23272f] to-[#37393a] text-white">
      {/* Pantallas medianas y grandes: logo, texto y botones */}
      <div className="hidden sm:flex items-center justify-between w-full">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo-muni.png"
            alt="Logo Municipalidad"
            className="h-9 w-auto"
          />
          <Typography
            variant="h6"
            className="text-white text-xs md:text-sm"
          >
            Municipalidad de Cholchol
          </Typography>
        </Link>
        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="https://www.portaltransparencia.cl/PortalPdT/ingreso-sai-v2?idOrg=498"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm bg-transparent text-gray-300 font-light hover:text-white border-none shadow-none flex items-center px-3 py-2 rounded"
          >
            SOLICITAR INFORMACIÓN
          </a>
          <a
            href="https://www.portaltransparencia.cl/PortalPdT/directorio-de-organismos-regulados/?org=MU045"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm bg-transparent text-gray-300 font-light hover:text-white border-none shadow-none flex items-center px-3 py-2 rounded"
          >
            TRANSPARENCIA ACTIVA
          </a>
          <a
            href="https://www.leylobby.gob.cl/instituciones/MU045"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm bg-transparent text-gray-300 font-light hover:text-white border-none shadow-none flex items-center px-3 py-2 rounded"
          >
            PLATAFORMA LEY LOBBY
          </a>
        </div>
      </div>
      {/* Pantallas pequeñas: solo los botones centrados */}
      <div className="flex sm:hidden items-center justify-center w-full gap-2 mt-1">
        <a
          href="https://www.portaltransparencia.cl/PortalPdT/ingreso-sai-v2?idOrg=498"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs bg-transparent text-gray-300 font-light hover:text-white border-none shadow-none flex items-center px-3 py-2 rounded"
        >
          SOLICITAR INFORMACIÓN
        </a>
        <a
          href="https://www.portaltransparencia.cl/PortalPdT/directorio-de-organismos-regulados/?org=MU045"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs bg-transparent text-gray-300 font-light hover:text-white border-none shadow-none flex items-center px-3 py-2 rounded"
        >
          TRANSPARENCIA ACTIVA
        </a>
        <a
          href="https://www.leylobby.gob.cl/instituciones/MU045"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs bg-transparent text-gray-300 font-light hover:text-white border-none shadow-none flex items-center px-3 py-2 rounded"
        >
          PLATAFORMA LEY LOBBY
        </a>
      </div>
    </div>
  );
}

// Componente principal de Navbar
export default function MultiLevelNavbar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50">
      <TopBar />
      <Navbar
        fullWidth
        className="rounded-none border-none py-2 px-4 lg:px-8 lg:py-3 bg-cyan-400 text-gray-900"
      >
        <div className="flex flex-wrap items-center text-gray-900">
          {/* Contenedor para la lista de navegación principal en pantallas grandes (lg y superiores) */}
          {/* Se oculta por defecto (móvil) y se muestra como bloque en 'lg' y más grandes. */}
          <div className="hidden lg:block">
            <MainNavList />
          </div>

          {/* Botón de hamburguesa para el menú móvil */}
          {/* Visible por defecto y se oculta en 'lg' y más grandes. */}
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>

        {/* Menú colapsable para pantallas pequeñas */}
        <Collapse open={openNav}>
          <div className="container mx-auto py-2">
            <MainNavList /> {/* Se reutiliza MainNavList para el menú móvil */}
          </div>
        </Collapse>
      </Navbar>
    </header>
  );
}