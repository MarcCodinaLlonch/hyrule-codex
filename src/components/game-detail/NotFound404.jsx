import { Link } from 'react-router-dom';

export default function NotFound404() {
  return (
    <div className="game-detail-page min-h-screen flex items-center justify-center px-margin-mobile md:px-margin-desktop">
      <div className="max-w-lg mx-auto text-center">
        {/* Triforce decoration */}
        <div className="flex justify-center mb-lg">
          <div className="relative">
            <span
              className="material-symbols-outlined text-[80px] text-primary/30"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              change_history
            </span>
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 font-display-lg text-display-lg text-primary/20 select-none">
              ▲
            </span>
          </div>
        </div>

        <div className="parchment-texture bg-surface-container-low p-xl rounded-xl border-2 border-primary/10 shadow-lg">
          {/* Header */}
          <div className="inline-block bg-error/10 border border-error/30 px-4 py-1 rounded-sm mb-6">
            <span className="font-label-md text-label-md text-error uppercase tracking-widest">
              Record Not Found
            </span>
          </div>

          <h1 className="font-display-lg-mobile text-display-lg-mobile text-on-surface mb-4 leading-tight">
            The Legend is Lost
          </h1>

          <div className="triforce-divider my-lg" />

          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-xl">
            The ancient scribes have no record of this adventure. Perhaps the tale has been swallowed by time, or perhaps it never existed in this timeline.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-md justify-center">
            <Link
              to="/games"
              className="flex items-center justify-center gap-sm px-lg py-3 bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider rounded-full hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md"
            >
              <span className="material-symbols-outlined text-base">menu_book</span>
              Browse the Archive
            </Link>
            <Link
              to="/"
              className="flex items-center justify-center gap-sm px-lg py-3 bg-surface-container border border-outline/20 text-on-surface font-label-md text-label-md uppercase tracking-wider rounded-full hover:bg-surface-container-high transition-all duration-300"
            >
              <span className="material-symbols-outlined text-base">home</span>
              Return to Hyrule
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
