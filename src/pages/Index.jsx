import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Project';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

export default function Index() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}