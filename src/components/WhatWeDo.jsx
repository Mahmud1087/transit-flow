import { aboutData } from '../../data';
import Title from './Title';

export default function WhatWeDo() {
  return (
    <section id='about' className='flex w-[55rem] py-20 mx-auto'>
      <article className='px-5 w-1/4 flex flex-col gap-y-3'>
        <Title title='What We Do' bg='#e8e8e880' text='#1c1f35' />
        <h1 className='font-[Rubik] font-[600] leading-[1.5rem] text-heading text-[1.3rem]'>
          Safe & Reliable <br /> Cargo Solutions
        </h1>
      </article>

      <div className='w-3/4 grid grid-cols-2 gap-x-10 gap-y-16 grid-rows-2 justify-center items-center'>
        {aboutData.map((item) => {
          return (
            <div key={item.id} className='flex justify-center gap-8'>
              <img src={item.icon} alt='icon' className='h-10 w-9' />
              <div className='flex flex-col gap-y-2 border-solid border-l-[1px] border-[#d8d8d8] px-5'>
                <h3 className='text-heading font-[600]'>{item.header}</h3>
                <p className='text-paragraph text-[13px]'>{item.parag}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
