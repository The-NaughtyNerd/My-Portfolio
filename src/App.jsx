import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import './sass/main.scss';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
  return (
    <>
      <div className="relative h-full lg:h-screen w-full">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
