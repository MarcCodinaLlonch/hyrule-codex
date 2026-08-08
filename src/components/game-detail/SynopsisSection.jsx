export default function SynopsisSection({ game }) {
  return (
    <article className="parchment-texture bg-surface-container-low p-lg md:p-xl rounded-lg shadow-sm border border-outline/10 relative overflow-hidden">
      {/* Decorative icon */}
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <span className="material-symbols-outlined text-9xl">auto_stories</span>
      </div>

      {/* Section header */}
      <div className="flex items-center gap-sm mb-6">
        <div className="w-10 h-[1px] bg-primary" />
        <h2 className="font-headline-sm text-headline-sm text-primary uppercase tracking-widest">
          The Legend Begins
        </h2>
        <div className="w-10 h-[1px] bg-primary" />
      </div>

      {/* Tagline */}
      {game.tagline && (
        <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant italic mb-4">
          {game.tagline}
        </p>
      )}

      {/* Synopsis paragraphs */}
      {game.synopsis.map((para, i) => (
        <p
          key={i}
          className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant mt-4"
        >
          {para}
        </p>
      ))}
    </article>
  );
}
