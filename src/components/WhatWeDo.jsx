import { aboutData } from '../../data';
import Title from './Title';

export default function WhatWeDo() {
  return (
    <section id='about' className='flex w-[55rem] py-20 mx-auto'>
      <article className='px-5 w-1/4 flex flex-col gap-y-3'>
        <Title bg='titleBg-2' text='sec-2'>
          What We Do
        </Title>
        <h1 className='font-[Rubik] font-semibold leading-[1.5rem] text-sec-2 text-[1.3rem]'>
          Safe & Reliable <br /> Cargo Solutions
        </h1>
      </article>

      <div className='w-3/4 grid grid-cols-2 gap-x-10 gap-y-16 grid-rows-2 justify-center items-center'>
        {aboutData.map((item) => {
          const { id, icon, header, parag } = item;
          return (
            <div key={id} className='flex justify-center gap-8'>
              <img src={icon} alt='icon' className='h-10 w-9' />
              <div className='flex flex-col gap-y-2 border-solid border-l-[1px] border-[#d8d8d8] px-5'>
                <h3 className='text-sec-2 font-semibold'>{header}</h3>
                <p className='text-sec-3 text-[13px] font-[Krub leading-5'>
                  {parag}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
