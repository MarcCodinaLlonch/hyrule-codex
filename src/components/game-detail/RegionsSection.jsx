export default function RegionsSection({ regions }) {
  if (!regions?.length) return null;

  return (
    <section>
      <div className="flex items-center gap-sm mb-lg">
        <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
          map
        </span>
        <h2 className="font-headline-sm text-headline-sm text-primary uppercase tracking-widest">
          Regions of Hyrule
        </h2>
      </div>
      <div className="triforce-divider mb-lg" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {regions.map((region, i) => (
          <div
            key={i}
            className="parchment-texture bg-surface-container-low p-lg rounded-lg border border-outline/10 hover:border-primary/20 transition-all duration-300 group"
          >
            <div className="flex items-start gap-sm">
              <span
                className="material-symbols-outlined text-primary/60 mt-1 flex-shrink-0 group-hover:text-primary transition-colors"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                location_on
              </span>
              <div>
                <h3 className="font-headline-sm text-[18px] text-on-surface mb-1">{region.name}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{region.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
