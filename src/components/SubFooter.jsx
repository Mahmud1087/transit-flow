import img from '../assets/Image (1).png';
import logo from '../assets/Logo.svg';
import emailImage from '../assets/Icon (2).png';
import callUsImage from '../assets/Icon (1).png';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function SubFooter() {
  const data = [
    { id: 1, text: 'Email', image: emailImage, other: 'contact@logistics.com' },
    {
      id: 2,
      text: 'Call Us',
      image: callUsImage,
      other: '(00) 112 365 489',
    },
  ];

  return (
    <section className='flex flex-col'>
      <img src={img} alt='Image' />

      <footer className='h-[4rem] bg-[#161f4ff0]'>
        <div className='flex gap-8 w-[52rem] h-full mx-auto'>
          <div className='flex items-center justify-center px-3 pr-24 bg-prim-2 h-full'>
            <img src={logo} alt='Transit logo' className='w-[10rem] px-5' />
          </div>
          <div className='flex items-center gap-32'>
            <a
              href='#pages'
              className='text-[#e8e8e8] text-[1rem] font-medium cursor-pointer font-[Rubik]'
            >
              Pages
            </a>
            <a
              href='#pages'
              className='text-[#e8e8e8] text-[1rem] font-medium cursor-pointer font-[Rubik]'
            >
              Utility
            </a>
            <a
              href='#pages'
              className='text-[#e8e8e8] text-[1rem] font-medium cursor-pointer font-[Rubik]'
            >
              Subscribe
            </a>
          </div>
        </div>
      </footer>

      <article className='bg-prim-2 pb-10'>
        <div className='flex gap-8 w-[52rem] mx-auto'>
          <div className='flex flex-col'>
            <p className='font-normal text-[#e8e8e8] font-[Krub] text-[11px] leading-5 pl-8 py-5 w-[16.5rem]'>
              Leverage agile frameworks to provide a robust synopsis for
              strategy collaborative thinking to further the overall value
              proposition.
            </p>
            <div className='flex flex-col gap-4 pl-8'>
              {data.map((item) => {
                const { id, text, image, other } = item;

                return (
                  <div key={id} className='flex items-center gap-3'>
                    <img src={image} alt='icon' className='w-10' />
                    <div className='flex flex-col'>
                      <p className='text-[#e8e8e8] text-[10px] font-[Krub]'>
                        {text}
                      </p>
                      <p className='text-[#e8e8e8] text-[10px] font-[Krub]'>
                        {other}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className='flex py-3 justify-center gap-24'>
            <ul className='ml-1 w-[5rem]'>
              <li>
                <a
                  href='#about'
                  className='text-[#e8e8e8] text-[11px] font-medium cursor-pointer font-[Krub]'
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href='#expert'
                  className='text-[#e8e8e8] text-[11px] font-medium cursor-pointer font-[Krub]'
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href='#project'
                  className='text-[#e8e8e8] text-[11px] font-medium cursor-pointer font-[Krub]'
                >
                  Our Project
                </a>
              </li>
              <li>
                <a
                  href='#pricing'
                  className='text-[#e8e8e8] text-[11px] font-medium cursor-pointer font-[Krub]'
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='text-[#e8e8e8] text-[11px] font-medium cursor-pointer font-[Krub]'
                >
                  Contact
                </a>
              </li>
            </ul>

            <ul className='w-[5rem]'>
              <li>
                <a
                  href='#style'
                  className='text-[#e8e8e8] text-[11px] font-medium cursor-pointer font-[Krub]'
                >
                  Style Guide
                </a>
              </li>
              <li>
                <a
                  href='#changelog'
                  className='text-[#e8e8e8] text-[11px] font-medium cursor-pointer font-[Krub]'
                >
                  Changelog
                </a>
              </li>
              <li>
                <a
                  href='#licenses'
                  className='text-[#e8e8e8] text-[11px] font-medium cursor-pointer font-[Krub]'
                >
                  Licenses
                </a>
              </li>
              <li>
                <a
                  href='#protected'
                  className='text-[#e8e8e8] text-[11px] font-medium cursor-pointer font-[Krub]'
                >
                  Protected
                </a>
              </li>
              <li>
                <a
                  href='#notFound'
                  className='text-[#e8e8e8] text-[11px] font-medium cursor-pointer font-[Krub]'
                >
                  Not Found
                </a>
              </li>
            </ul>
          </div>

          <div className='py-5 ml-16 flex flex-col gap-3'>
            <input
              type='text'
              placeholder='Enroll here'
              className='text-[12px] p-4 py-2 placeholder-[#999] bg-transparent border border-solid border-[#4e5683] outline-none text-[#e8e8e8]'
            />
            <div className='flex gap-4 w-full justify-center items-center'>
              <button
                type='submit'
                className='text-prim-2 bg-gradient-to-r from-grad-1 via-grad-2 to-grad-3 cursor-pointer w-fit py-2 px-3 text-[12px] font-medium'
              >
                Send Now
              </button>
              <a href='#instagram' className='text-[#e8e8e8]'>
                <FaInstagram />
              </a>
              <a href='#instagram' className='text-[#e8e8e8]'>
                <FaTwitter />
              </a>
              <a href='#instagram' className='text-[#e8e8e8]'>
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
