import { Button, Card } from "@material-tailwind/react";

export default function HeroActions() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-4">
      {/* Encuesta de Gustos y Actividades */}
      <Card className="flex flex-col justify-between p-8 bg-white rounded-2xl shadow-lg border border-cyan-100">
        <div>
          <h3 className="text-2xl font-bold text-cyan-700 mb-2">
            ENCUESTA DE GUSTOS Y ACTIVIDADES
          </h3>
          <p className="text-gray-700 mb-6">
            Queremos conocer tus intereses y actividades favoritas para mejorar
            la oferta de talleres, deportes y cultura en Cholchol. ¡Tu opinión
            es importante!
          </p>
        </div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScBBsnUVPRz9K-SMc7p-sMfZ_s3tTOPvUYjnOr_viCpk6u3TQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-cyan-500 hover:bg-cyan-700 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-md transition-colors duration-200"
        >
          Responder Encuesta
        </a>
      </Card>
      {/* Encuesta de Cambio Climático y Medidas */}
      <Card className="flex flex-col justify-between p-8 bg-white rounded-2xl shadow-lg border border-cyan-100">
        <div>
          <h3 className="text-2xl font-bold text-cyan-700 mb-2">
            ENCUESTA DE CAMBIO CLIMÁTICO Y MEDIDAS
          </h3>
          <p className="text-gray-700 mb-6">
            Ayúdanos a identificar cómo el cambio climático afecta a nuestra
            comuna y qué acciones podemos tomar juntos para adaptarnos y
            proteger nuestro entorno.
          </p>
        </div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScbQ-UPctjQiDLlZRugqqbz1XkY-YPuxFAHfcySveaAMzvBkw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-cyan-500 hover:bg-cyan-700 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-md transition-colors duration-200"
        >
          Responder Encuesta
        </a>
      </Card>
    </section>
  );
}
