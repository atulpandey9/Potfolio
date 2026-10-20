import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary font-sans selection:bg-white/20 selection:text-white overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 w-full">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <footer className="py-6 sm:py-8 text-center text-xs sm:text-sm text-text-muted border-t border-white/5 mt-8 sm:mt-12">
          <p>© {new Date().getFullYear()} Atul Pandey. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
