export default function MechanicsSection({ mechanics }) {
  if (!mechanics?.length) return null;

  return (
    <section>
      <div className="flex items-center gap-sm mb-lg">
        <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
          settings_suggest
        </span>
        <h2 className="font-headline-sm text-headline-sm text-primary uppercase tracking-widest">
          Game Mechanics
        </h2>
      </div>
      <div className="triforce-divider mb-lg" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {mechanics.map((m, i) => (
          <div
            key={i}
            className="parchment-texture bg-surface-container p-lg rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 group"
          >
            <div className="flex items-start gap-md">
              <div className="w-10 h-10 rounded-lg bg-primary-container/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-container/60 transition-colors">
                <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  extension
                </span>
              </div>
              <div>
                <h3 className="font-headline-sm text-[18px] text-on-surface mb-1">{m.name}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{m.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
