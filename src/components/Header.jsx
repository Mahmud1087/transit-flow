import logo from '../assets/Logo.svg';
import { FaBars } from 'react-icons/fa';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <section className='bg-prim-2 py-5 sm:py-8'>
      <div className='flex justify-between items-center w-screen px-6 sm:px-auto sm:w-[55rem] sm:mx-auto '>
        <img src={logo} alt='Transit logo' className='w-40 sm:w-[10rem] ' />

        <button
          className='border-none focus:outline-none cursor-pointer text-white text-lg'
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <FaBars />
        </button>
        <HeaderMenu />
      </div>
    </section>
  );
}
