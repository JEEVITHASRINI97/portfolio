import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Work from './components/Experience/Work';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/Footer';
import ProfessionalSkills from './components/ProfessionalSkills/ProfessionalSkills';
import ScrollUp from './components/scrollup/ScrollUp';
import data from "./MyData.json";

// import { toast } from 'react-toastify';

function App() {
  return (
   <>
     <Header />
     <main className='main'>
      <Home />
      <About />
      <ProfessionalSkills/>
      <Projects data={data.projects} />
      <Work/>
      <Contact />      
     </main>
      <Footer />
      <ScrollUp />
   </>
  );
}

export default App;
