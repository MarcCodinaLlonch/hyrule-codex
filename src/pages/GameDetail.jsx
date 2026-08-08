import { useParams } from 'react-router-dom';
import { getGameBySlug } from '../data/games';
import '../styles/game-detail.css';
import '../styles/base.css';

// Subcomponents
import HeroSection         from '../components/game-detail/HeroSection';
import StatsBar            from '../components/game-detail/StatsBar';
import SynopsisSection     from '../components/game-detail/SynopsisSection';
import MechanicsSection    from '../components/game-detail/MechanicsSection';
import ProtagonistsSection from '../components/game-detail/ProtagonistsSection';
import VillainSection      from '../components/game-detail/VillainSection';
import RegionsSection      from '../components/game-detail/RegionsSection';
import GallerySection      from '../components/game-detail/GallerySection';
import TriviaSection       from '../components/game-detail/TriviaSection';
import SoundtrackSection   from '../components/game-detail/SoundtrackSection';
import SidebarCodexEntry   from '../components/game-detail/SidebarCodexEntry';
import SidebarChronology   from '../components/game-detail/SidebarChronology';
import SidebarTheories     from '../components/game-detail/SidebarTheories';
import NotFound404         from '../components/game-detail/NotFound404';

export default function GameDetail() {
  const { slug } = useParams();
  const game = getGameBySlug(slug);

  // 404 — unknown slug
  if (!game) return <NotFound404 />;

  return (
    <div className="game-detail-page">
      {/* ── Hero ──────────────────────────────────────── */}
      <HeroSection game={game} />

      <main className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl grid grid-cols-1 lg:grid-cols-12 gap-xl">

        {/* ── Main Column ───────────────────────────── */}
        <div className="lg:col-span-8 space-y-xl">

          {/* Stats bar */}
          <StatsBar stats={game.stats} />

          {/* Synopsis */}
          <SynopsisSection game={game} />

          {/* Mechanics */}
          <MechanicsSection mechanics={game.mechanics} />

          {/* Protagonists */}
          <ProtagonistsSection protagonists={game.protagonists} />

          {/* Villain */}
          <VillainSection villain={game.villain} />

          {/* Regions */}
          <RegionsSection regions={game.regions} />

          {/* Gallery */}
          <GallerySection gallery={game.gallery} />

          {/* Trivia */}
          <TriviaSection trivia={game.trivia} />

          {/* Soundtrack */}
          <SoundtrackSection soundtrack={game.soundtrack} />

        </div>

        {/* ── Sidebar ───────────────────────────────── */}
        <aside className="lg:col-span-4 space-y-xl">

          {/* Codex Entry (always) */}
          <SidebarCodexEntry codexEntry={game.codexEntry} />

          {/* Chronology + Related Games */}
          <SidebarChronology
            timeline={game.timeline}
            relatedGames={game.relatedGames}
          />

          {/* Related Theories */}
          <SidebarTheories relatedTheoryTags={game.relatedTheoryTags} />

        </aside>

      </main>
    </div>
  );
}
