import Title from './Title';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import img1 from '../assets/photo (7).png';
import img2 from '../assets/Photo (8).png';
import img3 from '../assets/Image.jpg';

export default function Expert() {
  const data = [
    {
      id: 1,
      image: img1,
      name: 'Jessca Arow',
      skill: 'Designer',
      socials: {
        fb: <FaFacebook />,
        X: <FaTwitter />,
        ig: <FaInstagram />,
        lkIn: <FaLinkedin />,
      },
    },
    {
      id: 2,
      image: img2,
      name: 'Kathieen Smith',
      skill: 'Designer',
      socials: {
        fb: <FaFacebook />,
        X: <FaTwitter />,
        ig: <FaInstagram />,
        lkIn: <FaLinkedin />,
      },
    },
    {
      id: 3,
      image: img3,
      name: 'Rebecca Tylor',
      skill: 'Designer',
      socials: {
        fb: <FaFacebook />,
        X: <FaTwitter />,
        ig: <FaInstagram />,
        lkIn: <FaLinkedin />,
      },
    },
  ];

  return (
    <section
      id='expert'
      className='w-full flex flex-col justify-center items-center gap-5 my-28'
    >
      <Title bg='titleBg-2' text='sec-2'>
        The Transporters
      </Title>
      <h1 className='font-[Rubik] font-semibold leading-[1.5rem] text-sec-2 text-[1.55rem] sm:text-3xl lg:text-2xl'>
        Meet Expert Team
      </h1>
      <div className='flex flex-col px-6 justify-center items-center gap-10 mt-5 sm:w-full sm:flex-row sm:gap-5 lg:gap-10 lg:w-[52rem] lg:px-0'>
        {data.map((item, i) => {
          const {
            id,
            image,
            name,
            skill,
            socials: { fb, ig, X, lkIn },
          } = item;

          return (
            <div key={id} className='flex flex-col'>
              <img src={image} alt={`${name} image`} className='w-full' />
              <div className='h-28 w-full bg-sec-2 p-6 pt-7 relative sm:h-24 sm:p-4 sm:pt-6 lg:p-6 '>
                <h1 className='text-white font-medium text-xl font-[Rubik] sm:text-base lg:text-sm '>
                  {name}
                </h1>
                <p className='font-normal text-white text-[Krub] text-lg sm:text-[12px] '>
                  {skill}
                </p>
                <div className='box2 absolute -top-4 right-0 p-4 h-8 flex justify-center items-center gap-3'>
                  <a href='#' className='text-black cursor-pointer'>
                    {lkIn}
                  </a>
                  <a href='#' className='text-black cursor-pointer'>
                    {X}
                  </a>
                  <a href='#' className='text-black cursor-pointer'>
                    {fb}
                  </a>
                  <a href='#' className='text-black cursor-pointer'>
                    {ig}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
