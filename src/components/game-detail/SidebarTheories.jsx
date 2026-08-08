import { Link } from 'react-router-dom';

export default function SidebarTheories({ relatedTheoryTags }) {
  if (!relatedTheoryTags?.length) return null;

  return (
    <div className="space-y-md">
      <h4 className="font-headline-sm text-headline-sm text-primary flex items-center gap-sm">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
          psychology
        </span>
        Related Theories
      </h4>
      <div className="triforce-divider my-4" />

      <div className="flex flex-wrap gap-sm mb-md">
        {relatedTheoryTags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-tertiary-container/30 border border-tertiary/20 rounded-full text-xs font-bold tracking-widest uppercase text-tertiary"
          >
            #{tag}
          </span>
        ))}
      </div>

      <Link
        to={`/theories`}
        className="group flex items-center gap-sm p-md bg-surface-container-lowest hover:bg-tertiary-container/20 rounded-lg border border-outline/5 hover:border-tertiary/30 transition-all duration-300"
      >
        <span
          className="material-symbols-outlined text-tertiary"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          auto_stories
        </span>
        <span className="font-body-md text-body-md text-on-surface group-hover:text-tertiary transition-colors">
          Explore Speculative Archive
        </span>
        <span className="material-symbols-outlined ml-auto text-outline group-hover:translate-x-1 transition-transform">
          chevron_right
        </span>
      </Link>
    </div>
  );
}
