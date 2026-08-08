export default function VillainSection({ villain }) {
  if (!villain) return null;

  return (
    <div className="parchment-texture bg-on-secondary-container rounded-xl text-on-secondary relative overflow-hidden flex flex-col md:flex-row shadow-lg border border-error/10">
      
      {/* Left Column: Full-Height Image */}
      {villain.src && (
        <div className="w-full md:w-2/5 lg:w-1/3 relative min-h-[250px] flex-shrink-0 border-b md:border-b-0 md:border-r border-error/20">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={villain.src}
            alt={villain.name}
          />
          {/* Subtle gradient overlay to darken the bottom on mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-on-secondary-container/80 to-transparent md:hidden" />
        </div>
      )}

      {/* Right Column: Text Content */}
      <div className="flex-1 p-lg md:p-xl relative z-10 flex flex-col justify-center">
        {/* Decorative background icon */}
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
          <span className="material-symbols-outlined text-[200px] text-error">volcano</span>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-sm mb-4">
            <span
              className="material-symbols-outlined text-error"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              warning
            </span>
            <span className="font-label-md text-label-md text-error/80 uppercase tracking-widest text-xs">
              Primary Antagonist
            </span>
          </div>

          <h3 className="font-headline-md text-headline-md text-primary-fixed mb-4">
            {villain.name}
          </h3>

          <p className="font-body-lg text-body-lg text-surface-container-low leading-relaxed mb-6">
            {villain.desc}
          </p>

          {villain.tags?.length > 0 && (
            <div className="flex flex-wrap gap-sm mt-auto">
              {villain.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-error/20 border border-error/50 rounded-full text-xs font-bold tracking-widest uppercase text-error-container backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
