import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Navbar({ className }) {
  const navLists = [
    { text: 'home', hr: true, socials: <FaInstagram />, href: '#instagram' },
    { text: 'about', hr: true, socials: <FaFacebook />, href: '#facebook' },
    { text: 'project', hr: true, socials: <FaTwitter />, href: '#twitter' },
    { text: 'contact', hr: false, socials: <FaLinkedin />, href: '#linkedIn' },
  ];
  return (
    <nav className={`${className} bg-[#091242c5] w-full sm:bg-[#09124240] `}>
      <section className='flex flex-col items-center gap-10 py-7 sm:gap-0 sm:py-0 sm:flex-row sm:justify-between sm:w-[55rem] sm:mx-auto '>
        <ul className='list-none flex flex-col gap-7 sm:flex-row sm:gap-0 sm:justify-center sm:items-center'>
          {navLists.map((item, index) => {
            return (
              <a
                href={`#${item.text}`}
                key={index}
                className={`text-white text-xl sm:px-5 sm:text-sm ${
                  item.hr &&
                  'border-none text-center sm:border-[#ffffff33] sm:border-solid sm:border-r-2'
                } font-[Krub]`}
              >
                <li>
                  {item.text[0].toUpperCase()}
                  {item.text.slice(1)}
                </li>
              </a>
            );
          })}
        </ul>

        <article className='flex justify-center items-center gap-8'>
          <div className='flex gap-12 sm:gap-4'>
            {navLists.map((item, index) => {
              return (
                <a
                  href={item.href}
                  key={index}
                  className='text-white text-2xl sm:text-base'
                >
                  {item.socials}
                </a>
              );
            })}
          </div>

          <button className='hidden px-5 py-3 bg-white text-sm border-none font-[Krub] font-[600] sm:block'>
            Request Quote
          </button>
        </article>
      </section>
    </nav>
  );
}
