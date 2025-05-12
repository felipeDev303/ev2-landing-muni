import "./App.css"; // Estilos globales
import MultiLevelNavbar from "./MultiLevelNavbar";
import InfoCarousel from "./InfoCarousel";
import HeroActions from "./HeroActions";

import TouristCarousel from "./TouristCarousel";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import MapaMunicipalidad from "./MapaMunicipalidad";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <MultiLevelNavbar />
      <InfoCarousel />

      {/* Sección de acciones principales en fondo oscuro */}
      <section className="w-full bg-[#23272f] py-10">
        <HeroActions />
      </section>

      {/* Slide de turismo al final */}
      <section className="max-w-5xl mx-auto mt-12 px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          Descubre Cholchol
        </h2>
        <TouristCarousel />
      </section>

      <ContactForm />
      <MapaMunicipalidad />
      <Footer />
    </div>
  );
}

export default App;
