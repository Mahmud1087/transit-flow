import { headerDetails } from '../../data';

const HeaderMenu = () => {
  return (
    <article className='hidden sm:flex justify-between items-center gap-7'>
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
  );
};
export default HeaderMenu;
