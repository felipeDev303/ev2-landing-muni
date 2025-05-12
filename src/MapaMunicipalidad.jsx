import React from "react";

export default function MapaMunicipalidad() {
  return (
    <div className="w-full max-w-2xl mx-auto my-8">
      <div className="w-full rounded-lg overflow-hidden shadow-lg" style={{ height: 450 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2182.886258235258!2d-72.8484949631809!3d-38.60304895797806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966ad17524277319%3A0xd3ccc73108ced70b!2sIlustre%20Municipalidad%20de%20Chol-Chol!5e1!3m2!1ses!2sus!4v1747014306836!5m2!1ses!2sus"
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: 300 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Municipalidad de Cholchol"
        ></iframe>
      </div>
    </div>
  );
}
