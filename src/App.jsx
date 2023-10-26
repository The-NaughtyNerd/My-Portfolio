import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import './sass/main.scss';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Modal from './components/Modal';

import { ContextProvider } from './Contexts/Context';

const App = () => {
  return (
    <>
      <ContextProvider>
        <div className="relative min-h-screen min-w-screen">
          <Navbar />
          {/* <Modal /> */}

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </ContextProvider>
    </>
  );
};

export default App;
