import React from "react";
import { Carousel } from "@material-tailwind/react";

// Ejemplo de slides de información relevante (puedes editar el contenido)
const infoSlides = [
  {
    title: "Permiso de Circulación",
    description: "Realiza tu trámite de permiso de circulación en línea o en la nueva oficina municipal.",
    image: "/public/permiso-circulacion.jpeg",
  },
  {
    title: "Taller Comunitario sobre el Cambio Climático",
    description: "Participa en el taller gratuito para aprender sobre el impacto y soluciones locales.",
    image: "/public/publicaciones.jpg",
  },
  {
    title: "Taller de Acondicionamiento Físico",
    description: "Inscríbete en las clases de acondicionamiento físico para todas las edades.",
    image: "/public/acondicionamiento.jpg",
  },
  {
    title: "Nueva Ubicación Unidad de Tránsito",
    description: "La Unidad de Tránsito se ha trasladado a José Joaquín Pérez 500. Más espacio y mejor atención.",
    image: "/public/oficina.jpg",
  },
  {
    title: "Movilización para Estudiantes Vespertinos",
    description: "Solicita tu pase para el transporte municipal destinado a estudiantes vespertinos.",
    image: "/public/bus-estudiantes.jpg",
  },
  {
    title: "Programa Beca Municipal 2025",
    description: "Infórmate y postula a la beca municipal para estudiantes de educación superior.",
    image: "/public/bec2.jpg",
  },
  {
    title: "Transmisión del Consejo",
    description: "Sigue en vivo las sesiones del consejo municipal todos los Lunes a las 10:00 hrs.",
    image: "/public/youtube.png",
  },
];

export default function InfoCarousel() {
  return (
    <div className="w-full mb-8">
      <div className="w-full max-w-xs md:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-0">
        <Carousel
          className="rounded-lg shadow-lg"
          transition={{ type: "tween", duration: 0.5 }}
          autoplay={{ delay: 5000, pauseOnHover: true }}
          loop
          prevArrow={({ handlePrev }) => (
            <button onClick={handlePrev} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow hover:bg-cyan-200">
              <span className="sr-only">Anterior</span>
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
          )}
          nextArrow={({ handleNext }) => (
            <button onClick={handleNext} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow hover:bg-cyan-200">
              <span className="sr-only">Siguiente</span>
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          )}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="flex justify-center gap-2 mt-4">
              {Array.from({ length }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-3 h-3 rounded-full ${activeIndex === i ? "bg-cyan-500" : "bg-gray-300"}`}
                  aria-label={`Ir al slide ${i + 1}`}
                />
              ))}
            </div>
          )}
        >
          {infoSlides.map((slide, idx) => (
            <div key={idx} className="flex flex-col justify-center items-center bg-white rounded-lg overflow-hidden shadow p-4 md:p-8">
              <img
                src={slide.image}
                alt={slide.title}
                className="h-72 md:h-[420px] object-contain rounded-lg shadow mx-auto"
              />
              <div className="flex flex-col justify-center items-center bg-white rounded-lg mt-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 text-center">{slide.title}</h3>
                <p className="text-gray-700 text-base text-center">{slide.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
