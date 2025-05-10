import { Button } from "@material-tailwind/react";
import { MagnifyingGlassIcon, CalendarDaysIcon, ClipboardDocumentListIcon } from "@heroicons/react/24/outline";

export default function HeroActions() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto px-4">
      <Button
        as="a"
        href="#"
        color="cyan"
        size="lg"
        className="flex items-center justify-center gap-3 text-lg font-semibold px-6 py-8 rounded-lg shadow-md bg-white hover:bg-cyan-50 transition-colors text-gray-900"
        fullWidth
      >
        <MagnifyingGlassIcon className="w-7 h-7" />
        <span>Postula a los beneficios sociales</span>
      </Button>
      <Button
        as="a"
        href="#"
        color="cyan"
        size="lg"
        className="flex items-center justify-center gap-3 text-lg font-semibold px-6 py-8 rounded-lg shadow-md bg-white hover:bg-cyan-50 transition-colors text-gray-900"
        fullWidth
      >
        <CalendarDaysIcon className="w-7 h-7" />
        <span>Calendario de Actividades</span>
      </Button>
      <Button
        as="a"
        href="#"
        color="cyan"
        size="lg"
        className="flex items-center justify-center gap-3 text-lg font-semibold px-6 py-8 rounded-lg shadow-md bg-white hover:bg-cyan-50 transition-colors text-gray-900"
        fullWidth
      >
        <ClipboardDocumentListIcon className="w-7 h-7" />
        <span>Encuestas Ciudadanas</span>
      </Button>
    </section>
  );
}
