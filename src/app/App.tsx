import { Toaster } from './components/ui/sonner';
import { Hero } from './components/Hero';
import { DateReveal } from './components/DateReveal';
import { BrideGroom } from './components/BrideGroom';
import { OurStory } from './components/OurStory';
import { Events } from './components/Events';
import { Gallery } from './components/Gallery';
import { RSVP } from './components/RSVP';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Hero />
      <DateReveal />
      <BrideGroom />
      <Events />
      {/* <Gallery /> */}
      <RSVP />
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}
