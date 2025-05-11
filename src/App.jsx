import "./App.css"; // Tus estilos globales si los tienes
import MultiLevelNavbar from "./MultiLevelNavbar";
import HeroSection from "./HeroSection";
import HeroActions from "./HeroActions";

import TouristCarousel from "./TouristCarousel";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import { Button, Typography } from "@material-tailwind/react";
import {
  MagnifyingGlassIcon,
  CalendarDaysIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline"; // Importar iconos

function App() {

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <MultiLevelNavbar />
      <HeroSection />

      {/* Sección de acciones principales en fondo oscuro */}
      <section className="w-full bg-[#23272f] py-10">
        <HeroActions />
      </section>

      {/* Slide de turismo al final */}
      <section className="max-w-5xl mx-auto mt-12 px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Descubre Cholchol</h2>
        <TouristCarousel />
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;