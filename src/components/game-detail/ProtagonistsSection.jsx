export default function ProtagonistsSection({ protagonists }) {
  if (!protagonists?.length) return null;

  return (
    <section>
      <div className="flex items-center gap-sm mb-lg">
        <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
          group
        </span>
        <h2 className="font-headline-sm text-headline-sm text-primary uppercase tracking-widest">
          Protagonists
        </h2>
      </div>
      <div className="triforce-divider mb-lg" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {protagonists.map((char, i) => (
          <div
            key={i}
            className="parchment-texture bg-surface-container-high p-lg rounded-xl flex items-center gap-lg border-2 border-primary/5 hover:border-primary/20 transition-all duration-300"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 flex-shrink-0">
              <img
                className="w-full h-full object-cover"
                src={char.src}
                alt={char.name}
              />
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary">{char.name}</h3>
              <p className="font-label-md text-label-md text-secondary uppercase">{char.role}</p>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">{char.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
