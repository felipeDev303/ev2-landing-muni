import React from "react";
import { Carousel } from "@material-tailwind/react";

// Puedes reemplazar estas imágenes por imágenes turísticas reales
const touristImages = [
  { src: "/public/cholchol-aereo.jpg", alt: "Cholchol aéreo", title: "Cholchol aéreo" },
  { src: "/public/cruce-balsa.jpg", alt: "Cruce en balsa", title: "Cruce en balsa" },
  { src: "/public/puente-principal.jpg", alt: "Puente Principal", title: "Puente Principal" },
  { src: "/public/puente-sur.jpg", alt: "Puente Sur", title: "Puente Sur" },
  { src: "/public/puente-sur-invierno.jpg", alt: "Puente Sur en invierno", title: "Puente Sur en invierno" },
  { src: "/public/puente-viejo.jpg", alt: "Puente Viejo", title: "Puente Viejo" },
  { src: "/public/ruka.jpg", alt: "Ruka", title: "Ruka" },
];

export default function TouristCarousel() {
  return (
    <div className="w-full mt-8">
      <div className="w-full max-w-xs mx-auto px-2 sm:px-0">
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
          {touristImages.map((img, idx) => (
            <div key={idx} className="flex flex-col justify-center items-center bg-white rounded-lg overflow-hidden shadow p-4 md:p-8">
              <img
                src={img.src}
                alt={img.alt}
                className="h-64 md:h-96 object-contain rounded-lg shadow mx-auto"
              />
              <div className="text-center mt-2 text-lg text-gray-900 font-semibold">{img.alt}</div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
