import img1 from '../assets/Photo (1).png';
import img2 from '../assets/Images.png';
import boxImg from '../assets/Icon (6).png';
import cashImg from '../assets/Icon (7).png';
import Title from './Title';

export default function WhyUs() {
  return (
    <section className=' w-full relative'>
      <div className='relative h-[17rem]'>
        <img src={img1} alt='container image' className='h-full w-full' />
        <div className='bg-gradient-to-b from-[#1c1f3500] via-[#1c1f35b4] to-[#091242e8] w-full m-auto h-[9rem] absolute bottom-0 left-0 inset-auto blur-0'></div>
      </div>

      <article className='p-14 absolute bottom-0 top-[12.5rem] left-0 right-0 flex flex-col gap-3 bg-white w-[62vw] mx-auto'>
        <section className='grid grid-cols-2 gap-2 w-full'>
          <div className='flex flex-col'>
            <Title bg='titleBg-2' text='sec-2'>
              Why us
            </Title>
            <h1 className='text-prim-2 text-[1.55rem] font-[Rubik] font-semibold my-3 leading-7'>
              We provide full range global logistics solution
            </h1>
            <div className='text-[#666C89] font-[Krub] text-[13px] leading-6 flex flex-col gap-3'>
              <p>
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value proposition.
              </p>
              <p>
                Organically grow the holistic world view of disruptive
                innovation via workplace diversity and empowerment.
              </p>
            </div>

            <div className='flex items-center gap-4 my-5'>
              <img src={boxImg} alt='box image' className='w-10' />
              <p className='text-sec-2 text-lg leading-normal font-[Rubik]'>
                Delivery on Time
              </p>
            </div>
            <div className='flex items-center gap-4'>
              <img src={cashImg} alt='cash image' className='w-10' />
              <p className='text-sec-2 text-lg leading-normal font-[Rubik]'>
                Optimized Travel Cost
              </p>
            </div>
          </div>

          <img src={img2} alt='image' className='h-full' />
        </section>

        <section className='grid grid-cols-2 mt-24 border-solid border-y-[1px] border-[#d4d4d4] '>
          <div className='flex gap-3 items-center justify-center py-6'>
            <h1 className=' text-sec-2 text-[1.7rem] font-semibold font-[Rubik]'>
              1294
            </h1>
            <span className='bg-gradient-to-r from-grad-1 via-grad-2 to-grad-3 w-3 h-3'></span>
            <p className='text-sm font-normal text-sec-2 font-[League Spartan]'>
              Delivered Packages
            </p>
          </div>

          <div className='border-solid border-l-[1px] border-[#d4d4d4] flex gap-3 items-center justify-center py-6'>
            <h1 className=' text-sec-2 text-[1.7rem] font-semibold font-[Rubik]'>
              3594
            </h1>
            <span className='bg-gradient-to-r from-grad-1 via-grad-2 to-grad-3 w-3 h-3'></span>
            <p className='text-sm font-normal text-sec-2 font-[League Spartan]'>
              Satisfied Clients
            </p>
          </div>
        </section>
      </article>
    </section>
  );
}
