import { headerDetails } from '../../data';

const HeaderMenu = ({ className }) => {
  return (
    <article
      className={`${className} flex flex-col gap-4 sm:gap-7 sm:flex-row sm:justify-between sm:items-center`}
    >
      {headerDetails.map((item) => {
        const { id, icon, text, details } = item;
        return (
          <div className='flex items-center gap-3' key={id}>
            <img src={icon} alt='icon' className=' w-9' />
            <div className='flex flex-col justify-center font-semibold text-prim-2 text-lg sm:text-xs sm:text-white sm:font-normal font-[krub]'>
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
