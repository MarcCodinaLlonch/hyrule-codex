export default function GallerySection({ gallery }) {
  if (!gallery?.length) return null;

  return (
    <section>
      <div className="flex items-center gap-sm mb-lg">
        <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
          photo_library
        </span>
        <h2 className="font-headline-sm text-headline-sm text-primary uppercase tracking-widest">
          Gallery
        </h2>
      </div>
      <div className="triforce-divider mb-lg" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-gutter">
        {gallery.map((src, i) => (
          <div
            key={i}
            className="aspect-video rounded-lg overflow-hidden border border-primary/10 hover:border-primary/40 transition-all duration-300 group shadow-sm hover:shadow-md"
          >
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={src}
              alt={`Gallery image ${i + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
