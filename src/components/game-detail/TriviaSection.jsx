export default function TriviaSection({ trivia }) {
  if (!trivia?.length) return null;

  return (
    <section>
      <div className="flex items-center gap-sm mb-lg">
        <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
          lightbulb
        </span>
        <h2 className="font-headline-sm text-headline-sm text-primary uppercase tracking-widest">
          Lore & Curiosities
        </h2>
      </div>
      <div className="triforce-divider mb-lg" />

      <div className="parchment-texture bg-surface-container-low rounded-xl border border-outline/10 overflow-hidden">
        {trivia.map((item, i) => (
          <div
            key={i}
            className={`flex gap-md p-lg ${i < trivia.length - 1 ? 'border-b border-outline/10' : ''} hover:bg-primary-container/5 transition-colors`}
          >
            <span
              className="material-symbols-outlined text-primary/60 flex-shrink-0 mt-0.5"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
