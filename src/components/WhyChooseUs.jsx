import Title from './Title';
import icon1 from '../assets/Icon (8).png';
import icon2 from '../assets/Icon (9).png';
import icon3 from '../assets/Icon (10).png';
import icon4 from '../assets/Icon (11).png';
import icon5 from '../assets/Icon (12).png';
import icon6 from '../assets/Icon (13).png';
import smallPlane from '../assets/Icon (14).png';
import img from '../assets/Image.png';

export default function () {
  const data = [
    { id: 1, icon: icon1, text: 'Safe Package' },
    { id: 4, icon: icon4, text: 'Ship Everyone' },
    { id: 2, icon: icon2, text: 'Global Tracking' },
    { id: 5, icon: icon5, text: '24/7 Support' },
    { id: 3, icon: icon3, text: 'In Time Delivery' },
    { id: 6, icon: icon6, text: 'Transparent Pricing' },
  ];

  return (
    <section className='my-12 w-full h-[90vh] grid grid-cols-2'>
      <div className='bg-prim-2'>
        <div className='relative -right-24 top-1/2 bottom-1/2 -translate-y-1/2 z-[3] sm:w-[40rem] h-[25rem]'>
          <img src={img} alt='plane image' className='w-full h-full' />
          <div className='box absolute bottom-0 left-[45%] -translate-x-1/2 h-[5.5rem] w-72 z-[3] flex justify-center items-center gap-8 py-5 px-8'>
            <img src={smallPlane} alt='small plane icon' className='w-10' />
            <p className='text-prim-2 font-[Rubik] text-sm font-normal leading-5'>
              Moving your products across borders
            </p>
          </div>
        </div>
      </div>

      <div className='bg-sec-1 relative'>
        <div className='absolute left-36 top-1/2 -translate-y-1/2 flex flex-col gap-3 w-[58%]'>
          <Title bg='titleBg-2' text='sec-2'>
            Why Choose
          </Title>
          <h1 className='text-prim-2 text-[1.55rem] font-[Rubik] font-semibold leading-7'>
            We create opportunity to reach potential
          </h1>
          <p className='text-[#666C89] font-[Krub] text-[13px] leading-6 font-medium'>
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition.
          </p>
          <div className='grid grid-cols-2 gap-5 mt-6'>
            {data.map((item) => {
              const { icon, id, text } = item;
              return (
                <div key={id} className='flex items-center gap-3'>
                  <img src={icon} alt={text} className='w-9' />
                  <p className='text-prim-2 font-[Rubik] text-[13.5px] leading-6 font-normal'>
                    {text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
