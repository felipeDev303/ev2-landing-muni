import React, { useState } from "react";

function validateEmail(email) {
  // Simple email regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm() {
  const [values, setValues] = useState({ nombre: "", email: "", mensaje: "" });
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function validate(fieldValues = values) {
    let temp = { ...errors };
    if ("nombre" in fieldValues)
      temp.nombre = !fieldValues.nombre ? "El nombre es obligatorio" : "";
    if ("email" in fieldValues)
      temp.email = !fieldValues.email
        ? "El email es obligatorio"
        : !validateEmail(fieldValues.email)
        ? "Formato de email inválido"
        : "";
    if ("mensaje" in fieldValues)
      temp.mensaje = !fieldValues.mensaje ? "El mensaje es obligatorio" : "";
    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setTouched({ ...touched, [name]: true });
    validate({ ...values, [name]: value });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
    validate(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        setSuccess("¡Tu mensaje fue enviado exitosamente!");
        setValues({ nombre: "", email: "", mensaje: "" });
        setTouched({});
        setErrors({});
        setTimeout(() => setSuccess(""), 4000);
      }, 1200);
    } else {
      setSuccess("");
      setTouched({ nombre: true, email: true, mensaje: true });
    }
  };

  return (
    <div
      className="relative w-full min-h-[600px] flex items-center justify-center mt-16 mb-20 px-2"
      style={{
        backgroundImage: 'url(/municipalidad.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay oscuro para legibilidad */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/30 rounded-2xl pointer-events-none" />
      <form
        className="relative z-10 w-full max-w-xs md:max-w-2xl lg:max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl border border-cyan-100 p-4 md:p-7 flex flex-col gap-5"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="flex flex-col items-center mb-3">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cyan-100 mb-1 shadow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#0891b2" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.5 7.5a2.25 2.25 0 01-3.182 0l-7.5-7.5A2.25 2.25 0 012.25 6.993V6.75" />
            </svg>
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-cyan-800 text-center tracking-tight mb-1">
            Contáctanos
          </h2>
          <span className="block w-12 h-1 mt-2 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-600 mx-auto" />
        </div> 
      <div>
        <label htmlFor="nombre" className="block text-xs font-bold text-cyan-700 tracking-widest uppercase mb-1">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={values.nombre}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full px-3 py-2 md:px-4 md:py-2 text-sm md:text-base bg-white/90 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-500 border border-transparent transition-all placeholder-gray-400 ${
            errors.nombre && touched.nombre ? "border-red-400 focus:ring-red-400" : ""
          }`}
          placeholder="Tu nombre"
        />
        {errors.nombre && touched.nombre && (
          <div className="flex items-center gap-2 mt-1 text-red-700 bg-red-100/70 rounded px-2 py-1 text-xs font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" /></svg>
            {errors.nombre}
          </div>
        )} 
      </div>
      <div>
        <label htmlFor="email" className="block text-xs font-bold text-cyan-700 tracking-widest uppercase mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full px-3 py-2 md:px-4 md:py-2 text-sm md:text-base bg-white/90 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-500 border border-transparent transition-all placeholder-gray-400 ${
            errors.email && touched.email ? "border-red-400 focus:ring-red-400" : ""
          }`}
          placeholder="tu@email.com"
        />
        {errors.email && touched.email && (
          <div className="flex items-center gap-2 mt-1 text-red-700 bg-red-100/70 rounded px-2 py-1 text-xs font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" /></svg>
            {errors.email}
          </div>
        )} 
      </div>
      <div>
        <label htmlFor="mensaje" className="block text-xs font-bold text-cyan-700 tracking-widest uppercase mb-1">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={values.mensaje}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full px-3 py-2 md:px-4 md:py-2 text-sm md:text-base bg-white/90 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-500 border border-transparent min-h-[80px] md:min-h-[120px] resize-y transition-all placeholder-gray-400 ${
            errors.mensaje && touched.mensaje ? "border-red-400 focus:ring-red-400" : ""
          }`}
          placeholder="Escribe tu mensaje"
        />
        {errors.mensaje && touched.mensaje && (
          <div className="flex items-center gap-2 mt-1 text-red-700 bg-red-100/70 rounded px-2 py-1 text-xs font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" /></svg>
            {errors.mensaje}
          </div>
        )} 
      </div>
      <button
        type="submit"
        className="bg-gradient-to-r from-cyan-500 to-cyan-700 hover:from-cyan-600 hover:to-cyan-800 text-white font-bold py-2 px-6 md:py-2.5 md:px-8 text-base rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed"
        disabled={submitting}
      >
        {submitting ? (
          <span className="flex items-center gap-2 justify-center">
            <svg className="animate-spin w-5 h-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
            Enviando...
          </span>
        ) : (
          <span className="flex items-center gap-2 justify-center group">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-rotate-12 text-cyan-50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.01 21l20.99-9-20.99-9-.01 7 15 2-15 2z" />
            </svg>
            Enviar
          </span>
        )}
      </button>
      {success && (
        <div className="flex items-center gap-2 justify-center mt-2 py-2 px-4 rounded bg-green-100/80 text-green-800 font-semibold text-center text-base shadow">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          {success}
        </div>
      )}
    </form>
  </div>
  );
}
