import project from '@assets/images/project_1.webp';
import project2 from '@assets/images/project_2.webp';
import project3 from '@assets/images/project_3.webp';
import type { Project } from '@models';

export const projects: Project[] = [
  {
    title: 'Módulo de Evaluación de Poomsae',
    description: 'Sistema diseñado para automatizar las calificaciones de jurados en competencias de Taekwondo. Desarrollado en conjunto con la empresa PayBluem, transformó el cálculo manual en un proceso digital en tiempo real.\n\nFue implementado con éxito en múltiples eventos a nivel nacional (Colombia) e internacionalmente en Aruba.',
    image: project,
    tags: ['Php', 'Js', 'Css', 'Mysql'],
    stats: [
      { label: 'Personas alcanzadas', value: '700+' },
      { label: 'Reducción de errores', value: '95%' },
    ],
    href: 'https://poomsae.comunisoft.com/',
    status: 'public'
  },
  {
    title: 'Plataforma IoT de Alertas Tempranas',
    description: 'Sistema IoT escalable para el análisis y detección de humo y gas, diseñado para garantizar la seguridad de personas vulnerables. Funciona como un mediador inteligente que envía advertencias en tiempo real a través de una app móvil, alertando al usuario, a su red de amigos y directamente a las estaciones de bomberos ante emergencias en el hogar.\n\nEn fase avanzada de desarrollo, la meta es integrar cientos de sensores en el futuro y crear una red masiva de asistencia mediante alianzas gubernamentales. Esto permitirá brindar tranquilidad a miles de familias, asegurando atención inmediata incluso si te encuentras de viaje.',
    image: project2,
    tags: ['Laravel', 'Tailwind', 'Livewire', 'Filament', 'MariaDB'],
    stats: [
      { label: 'Dispositivos (Est.)', value: '1k+' },
      { label: 'Incendios evitados (Est.)', value: '150+' },
    ],
    href: '#',
    status: 'in-progress'
  },
   {
    title: 'Plataforma de E-Learning Reanimar',
    description: 'Sistema integral de gestión de cursos desarrollado exclusivamente para la institución Reanimar. Permite la creación, exploración y certificación automática de estudiantes al finalizar cada plan de estudios.\n\nCuenta con un panel de administración avanzado que integra webhooks de PayU para automatizar las validaciones de pago en tiempo real y desplegar notificaciones de estado transaccional directo a los usuarios.',
    image: project3,
    tags: ['Laravel', 'Tailwind', 'Livewire', 'Filament', 'Mysql'],
    stats: [
      { label: 'Certificaciones', value: 'Auto' },
      { label: 'Pagos con PayU', value: '100%' },
    ],
    href: '#',
    status: 'private'
  },
];
