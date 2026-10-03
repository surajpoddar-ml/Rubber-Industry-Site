import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Statistics from './sections/Statistics';
import Products from './sections/Products';
import CustomSolutions from './sections/CustomSolutions';
import Industries from './sections/Industries';
import Manufacturing from './sections/Manufacturing';
import Quality from './sections/Quality';
import Sustainability from './sections/Sustainability';
import Projects from './sections/Projects';
import WhyChooseUs from './sections/WhyChooseUs';
import Testimonials from './sections/Testimonials';
import News from './sections/News';
import Quote from './sections/Quote';
import Contact from './sections/Contact';
import FinalCTA from './sections/FinalCTA';

export default function App() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Statistics />
        <Products />
        <CustomSolutions />
        <Industries />
        <Manufacturing />
        <Quality />
        <Sustainability />
        <Projects />
        <WhyChooseUs />
        <Testimonials />
        <News />
        <Quote />
        <Contact />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
