import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import Testimonial from './components/Testimonial';
import WhatWeDo from './components/WhatWeDo';
import WhyChooseUs from './components/WhyChooseUs';
import WhyUs from './components/WhyUs';
import Expert from './components/Expert';
import Contact from './components/Contact';
import OurBlog from './components/OurBlog';
import FooterSection from './components/FooterSection';
import { useState } from 'react';

export default function App() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className={`${toggleMenu && 'fixed'}`}>
      <HeroSection toggleMenu={toggleMenu} handleToggle={handleToggle} />
      <WhatWeDo />
      <WhyUs />
      <Projects />
      <Testimonial />
      <WhyChooseUs />
      <Expert />
      <Contact />
      <OurBlog />
      <FooterSection />
    </div>
  );
}
