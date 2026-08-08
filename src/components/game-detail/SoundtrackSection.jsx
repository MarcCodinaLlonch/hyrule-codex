export default function SoundtrackSection({ soundtrack }) {
  if (!soundtrack?.length) return null;

  return (
    <section>
      <div className="flex items-center gap-sm mb-lg">
        <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
          music_note
        </span>
        <h2 className="font-headline-sm text-headline-sm text-primary uppercase tracking-widest">
          Soundtrack
        </h2>
      </div>
      <div className="triforce-divider mb-lg" />

      <div className="space-y-md">
        {soundtrack.map((track, i) => {
          const ContentWrapper = track.url ? 'a' : 'div';
          const wrapperProps = track.url 
            ? { href: track.url, target: "_blank", rel: "noopener noreferrer" } 
            : {};

          return (
            <ContentWrapper
              key={i}
              {...wrapperProps}
              className="parchment-texture bg-surface-container p-lg rounded-xl border border-outline/10 hover:border-primary/20 transition-all duration-300 flex items-start gap-md group cursor-pointer block no-underline"
            >
              {/* Track number badge */}
              <div className="w-10 h-10 rounded-full bg-primary-container/30 flex items-center justify-center flex-shrink-0 font-label-md text-label-md text-primary group-hover:bg-primary-container/60 transition-colors">
                {i + 1}
              </div>
              <div className="flex-1">
                <h3 className="font-headline-sm text-[18px] text-on-surface">{track.title}</h3>
                {track.note && (
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1 italic">
                    {track.note}
                  </p>
                )}
              </div>
              {/* Play icon decoration */}
              <span
                className="material-symbols-outlined text-primary/30 ml-auto group-hover:text-primary transition-colors"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                play_circle
              </span>
            </ContentWrapper>
          );
        })}
      </div>
    </section>
  );
}
