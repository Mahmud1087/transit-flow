import logo from '../assets/Logo.svg';
import { headerDetails } from '../../data';

export default function Header() {
  return (
    <section className='bg-prim-2 py-8'>
      <div className='flex justify-between items-center w-[55rem] mx-auto'>
        <img src={logo} alt='Transit logo' className='w-[10rem] px-5' />

        <article className='flex justify-between items-center gap-7'>
          {headerDetails.map((item) => {
            const { id, icon, text, details } = item;
            return (
              <div className='flex items-center gap-3' key={id}>
                <img src={icon} alt='icon' className='w-[2.5rem] h-[2.5srem]' />
                <div className='flex flex-col justify-center text-xs text-white font-[krub]'>
                  <h4>{text}</h4>
                  <h4>{details}</h4>
                </div>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}
