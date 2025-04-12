import React from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css'; // Ensure Tailwind styles are imported

function App() {
  return (
    <div className="bg-white text-black"> {/* Set base background/text color */}
      <Navbar />
       {/* Add horizontal margins for overall content width control */}
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Adjust max-width and padding as needed */}
          <Profile />
          <About />
          <Experience />
          <Projects />
          <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;