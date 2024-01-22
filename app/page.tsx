import Contact from "./components/home/Contact";
import Features from "./components/home/Features";
import Hero from "./components/home/Hero";
import TripSection from "./components/home/TripSection";

export default function HomePage() {
  return (
    <div className='container mx-auto'>
      <Hero />
      <Features />
      <TripSection />
      <Contact />
    </div>
  );
}
