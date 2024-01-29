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

export default function App() {
  return (
    <>
      <HeroSection />
      <WhatWeDo />
      <WhyUs />
      <Projects />
      <Testimonial />
      <WhyChooseUs />
      <Expert />
      <Contact />
      <OurBlog />
      <FooterSection />
    </>
  );
}
