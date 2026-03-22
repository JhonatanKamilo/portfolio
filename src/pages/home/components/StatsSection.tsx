import { statsData } from '@data';

export function StatsSection() {
  return (
    <section className="relative grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-(--color-border)/20 mb-5">
      {statsData.map((stat) => (
        <div key={`${stat.label1}-${stat.label2}`} className="flex flex-row items-center gap-4 group justify-center">
          <p className="text-(--color-strong) text-4xl sm:text-5xl font-bold tracking-tight group-hover:text-(--color-accent) transition-colors duration-500">
            {stat.number}
          </p>
          <div>
            <p className="text-(--color-text) text-sm leading-snug">{stat.label1}</p>
            <p className="text-(--color-text) text-sm leading-snug">{stat.label2}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
