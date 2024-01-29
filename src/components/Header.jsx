import logo from '../assets/Logo.svg';
import { FaBars } from 'react-icons/fa';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';
import Sidebar from './Sidebar';

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <section className='bg-prim-2 py-5 sm:py-8'>
      <Sidebar toggleMenu={toggleMenu} handleToggle={handleToggle} />
      <div className='flex justify-between items-center w-screen px-6 sm:px-auto sm:w-[55rem] sm:mx-auto '>
        <img src={logo} alt='Transit logo' className='w-40 sm:w-[10rem] ' />

        <button
          className='border-none focus:outline-none text-white text-lg sm:hidden'
          onClick={handleToggle}
        >
          <FaBars />
        </button>
        <HeaderMenu className='hidden sm:flex' />
      </div>
    </section>
  );
}
