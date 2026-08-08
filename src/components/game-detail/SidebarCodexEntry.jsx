export default function SidebarCodexEntry({ codexEntry }) {
  const rows = [
    { label: 'Publisher', value: codexEntry.publisher },
    { label: 'Genre',     value: codexEntry.genre },
    { label: 'Director',  value: codexEntry.director },
    { label: 'Producer',  value: codexEntry.producer },
  ].filter((r) => r.value);

  return (
    <div className="parchment-texture bg-surface-container p-lg rounded-lg border-2 border-primary/10">
      <h4 className="font-headline-sm text-headline-sm text-primary mb-4 border-b border-primary/20 pb-2">
        Codex Entry
      </h4>
      <div className="space-y-4">
        {rows.map(({ label, value }) => (
          <div key={label} className="flex justify-between border-b border-outline/10 pb-2">
            <span className="font-label-md text-label-md text-outline">{label}</span>
            <span className="font-body-md text-body-md font-semibold text-secondary text-right max-w-[60%]">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
