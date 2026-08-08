import { Link } from 'react-router-dom';

export default function SidebarChronology({ timeline, relatedGames }) {
  const hasTimeline = !!timeline;
  const hasRelated = relatedGames?.length > 0;

  if (!hasTimeline && !hasRelated) return null;

  return (
    <div className="space-y-md">
      <h4 className="font-headline-sm text-headline-sm text-primary flex items-center gap-sm">
        <span className="material-symbols-outlined">link</span>
        Chronology
      </h4>
      <div className="triforce-divider my-4" />

      {/* Timeline era pill */}
      {hasTimeline && (
        <Link
          to={`/timeline#${timeline.era}`}
          className="flex items-center gap-sm p-md bg-primary-container/10 hover:bg-primary-container/20 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 group mb-md"
        >
          <span
            className="material-symbols-outlined text-primary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            timeline
          </span>
          <div>
            <p className="font-label-md text-label-md text-outline uppercase tracking-wider text-xs mb-0.5">
              Era
            </p>
            <p className="font-headline-sm text-[16px] text-on-surface group-hover:text-primary transition-colors">
              {timeline.eraLabel}
            </p>
          </div>
          <span className="material-symbols-outlined ml-auto text-outline group-hover:translate-x-1 transition-transform">
            chevron_right
          </span>
        </Link>
      )}

      {/* Related games */}
      {hasRelated &&
        relatedGames.map(({ relation, slug, title, src }) => (
          <Link
            key={slug}
            to={`/games/${slug}`}
            className="group flex items-center gap-md p-md bg-surface-container-lowest hover:bg-primary-container/10 rounded-lg transition-all duration-300 border border-outline/5 hover:border-primary/30"
          >
            <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
              <img
                className="w-full h-full object-cover"
                src={src}
                alt={title}
              />
            </div>
            <div>
              <p className="font-label-md text-label-md text-outline mb-1 uppercase">{relation}</p>
              <p className="font-headline-sm text-[18px] text-on-surface group-hover:text-primary transition-colors">
                {title}
              </p>
            </div>
            <span className="material-symbols-outlined ml-auto text-outline group-hover:translate-x-1 transition-transform">
              chevron_right
            </span>
          </Link>
        ))}
    </div>
  );
}
