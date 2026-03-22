import type { ProjectCardProps } from '@models';

export function ProjectCard({ project: proj, index: i, isLast }: ProjectCardProps) {
  return (
    <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-10 ${!isLast ? 'border-b border-(--color-border)/15' : ''} pb-12`}>

      <div className="w-full md:w-3/5 relative group">
        <div className="rounded-xl overflow-hidden border border-(--color-border)/20 shadow-[0_4px_24px_rgba(0,0,0,0.12)]">
          <img 
            src={proj.image} 
            alt={proj.title} 
            className="w-full h-auto object-contain" 
          />
        </div>

        {/* el boton de estado */}
        {proj.status === 'public' && (
          <a
            href={proj.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`absolute px-5 py-2 bg-[var(--color-primary)] text-[var(--color-accent)] rounded-lg border border-[var(--color-accent)] text-sm font-medium hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all duration-300 shadow-md ${i % 2 === 0 ? 'right-3 top-3' : 'left-3 top-3'} flex items-center gap-2`}
          >
            Ver proyecto
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
        
        {proj.status === 'private' && (
          <div
            className={`absolute px-5 py-2 bg-red-500/90 text-white rounded-lg border border-red-400 text-sm font-medium backdrop-blur-md shadow-md ${i % 2 === 0 ? 'right-3 top-3' : 'left-3 top-3'} flex items-center gap-2`}
            title="Este repositorio o proyecto es privado"
          >
            <svg className="w-4 h-4 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Privado
          </div>
        )}

        {proj.status === 'in-progress' && (
          <div
            className={`absolute px-5 py-2 bg-orange-500/90 text-white rounded-lg border border-orange-400 text-sm font-medium backdrop-blur-md shadow-md ${i % 2 === 0 ? 'right-3 top-3' : 'left-3 top-3'} flex items-center gap-2`}
            title="Sigo trabajando en este proyecto"
          >
            <svg className="w-4 h-4 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            En proceso
          </div>
        )}
      </div>

      <div className="w-full md:w-2/5 flex flex-col gap-6 py-2">
        
        <div className="flex flex-col">
          <div className="flex gap-8 justify-center flex-row">
            {proj.stats.map((s, j) => (
              <div key={j} className="flex flex-col">
                <span className="text-(--color-accent) text-3xl font-bold tracking-tight text-center">{s.value}</span>
                <span className="text-(--color-text) text-sm font-medium mt-0.5">{s.label}</span>
              </div>
            ))}
          </div>

          {/* tags de techs utilizadas en el proyecto */}
          <div className="flex flex-wrap gap-2 py-4 justify-center">
            {proj.tags.map((tag, j) => (
              <span key={j} className="px-3 py-1 rounded-full text-xs font-medium bg-(--color-surface) border border-(--color-border)/30 text-(--color-text-muted)">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <h4 className="relative text-(--color-text) text-xl font-bold leading-snug">{proj.title}</h4>
        </div>

        <p className="text-(--color-text)/80 text-sm leading-relaxed whitespace-pre-line">{proj.description}</p>

      </div>
    </div>
  );
}
