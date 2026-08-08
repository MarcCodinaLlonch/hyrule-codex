export default function StatsBar({ stats }) {
  if (!stats) return null;

  const items = [
    stats.metacritic != null && {
      icon: 'military_tech',
      label: 'Metacritic',
      value: `${stats.metacritic}/100`,
      highlight: stats.metacritic >= 95,
    },
    stats.avgPlaytime && {
      icon: 'timer',
      label: 'Avg. Playtime',
      value: stats.avgPlaytime,
    },
    stats.salesApprox && {
      icon: 'bar_chart',
      label: 'Sales',
      value: stats.salesApprox,
    },
  ].filter(Boolean);

  if (!items.length) return null;

  return (
    <div className="parchment-texture bg-surface-container-high/80 rounded-xl border border-primary/10 px-lg py-md flex flex-wrap gap-lg justify-around">
      {items.map(({ icon, label, value, highlight }) => (
        <div key={label} className="flex items-center gap-sm">
          <span
            className={`material-symbols-outlined text-2xl ${highlight ? 'text-primary' : 'text-outline'}`}
            style={{ fontVariationSettings: highlight ? "'FILL' 1" : "'FILL' 0" }}
          >
            {icon}
          </span>
          <div>
            <p className="font-label-md text-label-md text-outline uppercase tracking-wider text-xs">
              {label}
            </p>
            <p className={`font-headline-sm text-headline-sm ${highlight ? 'text-primary' : 'text-on-surface'}`}>
              {value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
