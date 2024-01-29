import { FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.svg';
import HeaderMenu from './HeaderMenu';
import Navbar from './Navbar';

const Sidebar = ({ toggleMenu, handleToggle }) => {
  return (
    <aside
      className={`${
        !toggleMenu ? ' -left-full' : 'left-0'
      } fixed z-10 top-0 w-[100vw] h-screen bg-white transition-all delay-[400ms] sm:hidden`}
    >
      <section className=' bg-prim-2 py-5 px-6 flex justify-between items-center'>
        <img src={logo} alt='Logo' className='w-40' />
        <button
          className='border-none focus:outline-none text-2xl text-red-600 '
          onClick={handleToggle}
        >
          <FaTimes />
        </button>
      </section>

      <article className='w-full flex flex-col gap-5 items-center'>
        <Navbar />
        <HeaderMenu />
      </article>
    </aside>
  );
};
export default Sidebar;
