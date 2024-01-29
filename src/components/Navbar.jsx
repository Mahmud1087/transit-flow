import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Navbar() {
  const navLists = [
    { text: 'home', hr: true, socials: <FaInstagram />, href: '#instagram' },
    { text: 'about', hr: true, socials: <FaFacebook />, href: '#facebook' },
    { text: 'project', hr: true, socials: <FaTwitter />, href: '#twitter' },
    { text: 'contact', hr: false, socials: <FaLinkedin />, href: '#linkedIn' },
  ];
  return (
    <nav className='bg-[#09124240] hidden sm:block'>
      <section className='flex justify-between items-center sm:w-[55rem] sm:mx-auto '>
        <ul className='list-none flex justify-center items-center'>
          {navLists.map((item, index) => {
            return (
              <a
                href={`#${item.text}`}
                key={index}
                className={`px-5 text-white text-sm ${
                  item.hr && 'border-r-2 border-[#ffffff33] border-solid'
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
          <div className='flex gap-4'>
            {navLists.map((item, index) => {
              return (
                <a href={item.href} key={index} className='text-white'>
                  {item.socials}
                </a>
              );
            })}
          </div>

          <button className='px-5 py-3 bg-white text-sm border-none font-[Krub] font-[600]'>
            Request Quote
          </button>
        </article>
      </section>
    </nav>
  );
}
