import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary font-sans selection:bg-white/20 selection:text-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <footer className="py-8 text-center text-sm text-text-muted border-t border-white/5 mt-12">
          <p>© {new Date().getFullYear()} Atul Pandey. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
