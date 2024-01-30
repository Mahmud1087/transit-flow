import Header from './Header';
import SubHero from './SubHero';

export default function HeroSection({ toggleMenu, handleToggle }) {
  return (
    <>
      <Header toggleMenu={toggleMenu} handleToggle={handleToggle} />
      <SubHero />
    </>
  );
}
