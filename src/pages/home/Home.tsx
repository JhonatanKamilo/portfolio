import { HeroSection, StatsSection, ProjectsSection, AboutSection, ContactSection } from './components';
import { useRadius } from '@hooks';

export default function Home() {
  const radius = useRadius();

  return (
    <main className="relative flex flex-col px-6 sm:px-10 lg:px-16 h-auto overflow-hidden">

      {/* Glow para el fondo */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-(--color-accent)/10 blur-[120px]" />
        <div className="absolute -bottom-32 right-0 w-[400px] h-[400px] rounded-full bg-(--color-muted)/10 blur-[100px]" />
      </div>
      {/* Vista principal */}
      <div id="hero" className="flex flex-col min-h-[calc(100vh-64px)] scroll-mt-16">
        <HeroSection radius={radius} />
        <StatsSection />
      </div>
      {/* Seccion acerca de mi */}
      <AboutSection />
      {/* Proyectos que he creado */}
      <ProjectsSection />
      {/* Seccion de contacto */}
      <ContactSection />

    </main>
  );
}