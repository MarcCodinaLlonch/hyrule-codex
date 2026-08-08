import { Link } from 'react-router-dom';

export default function HeroSection({ game }) {
  return (
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
      {/* Breadcrumb */}
      <div className="absolute top-6 left-0 right-0 z-20 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <nav className="flex items-center gap-sm text-sm">
          <Link
            to="/games"
            className="font-label-md text-label-md text-on-surface/60 hover:text-primary transition-colors flex items-center gap-xs"
          >
            <span className="material-symbols-outlined text-base">menu_book</span>
            The Legend Archive
          </Link>
          <span className="text-on-surface/30">›</span>
          <span className="font-label-md text-label-md text-primary truncate max-w-xs">{game.title}</span>
        </nav>
      </div>

      {/* Hero Image */}
      <div className="absolute inset-0 hero-mask">
        <img
          className="w-full h-full object-cover"
          src={game.heroImage}
          alt={game.title}
        />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#fff8f1] via-[#fff8f1]/10 to-transparent" />

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 right-0 p-margin-mobile md:p-margin-desktop z-10 max-w-7xl mx-auto">
        {/* Category badge */}
        <div className="inline-block bg-primary-container/90 backdrop-blur-sm px-4 py-1 rounded-sm mb-4 border border-on-primary-container/20">
          <span className="font-label-md text-label-md text-on-primary-container uppercase tracking-widest">
            {game.category}
          </span>
        </div>

        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-2 leading-tight">
          {game.title}
        </h1>

        <div className="flex flex-wrap gap-md items-center mt-4">
          <div className="flex items-center gap-xs px-3 py-1 bg-surface-container-highest/80 rounded-sm border border-outline/20">
            <span className="material-symbols-outlined text-outline text-sm">calendar_today</span>
            <span className="font-label-md text-label-md text-outline">{game.year}</span>
          </div>
          <div className="flex items-center gap-xs px-3 py-1 bg-surface-container-highest/80 rounded-sm border border-outline/20">
            <span className="material-symbols-outlined text-outline text-sm">videogame_asset</span>
            <span className="font-label-md text-label-md text-outline">{game.platform}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
