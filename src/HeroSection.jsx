import React from "react";
import InfoCarousel from "./InfoCarousel";
import HeroActions from "./HeroActions";

export default function HeroSection() {
  return (
    <section className="flex flex-col gap-10 max-w-5xl mx-auto mt-10 px-4 text-gray-900">
      {/* Carrousel de información relevante */}
      <InfoCarousel />
    </section>
  );
}