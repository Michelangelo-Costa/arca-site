import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';
import { DownloadSection } from '../components/sections/DownloadSection';
import { FeatureStrip } from '../components/sections/FeatureStrip';
import { HeroSection } from '../components/sections/HeroSection';
import { MapSection } from '../components/sections/MapSection';

function HomePage() {
  return (
    <div className="min-h-screen bg-siap-ice font-sans text-siap-navy">
      <Header />
      <main>
        <HeroSection />
        <FeatureStrip />
        <MapSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
