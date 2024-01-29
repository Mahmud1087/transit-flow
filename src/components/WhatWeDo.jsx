import { aboutData } from '../../data';
import Title from './Title';

export default function WhatWeDo() {
  return (
    <section
      id='about'
      className='flex flex-col py-10 w-full sm:flex-row sm:py-20 sm:w-[55rem] sm:mx-auto '
    >
      <article className='px-5 flex flex-col items-center gap-5 text-center sm:text-start sm:items-start sm:gap-3 sm:w-1/4 '>
        <Title bg='titleBg-2' text='sec-2'>
          What We Do
        </Title>
        <h1 className='font-[Rubik] font-semibold leading-[1.5rem] text-sec-2 text-[1.3rem]'>
          Safe & Reliable <br /> Cargo Solutions
        </h1>
      </article>

      <div className='w-full my-8 px-6 grid grid-flow-row gap-y-10 sm:gap-x-10 sm:gap-y-16 sm:grid-rows-2 sm:px-0 sm:my-0 sm:grid-cols-2 sm:w-3/4 sm:justify-center sm:items-center'>
        {aboutData.map((item) => {
          const { id, icon, header, parag } = item;
          return (
            <div key={id} className='flex justify-center gap-8'>
              <img src={icon} alt='icon' className='h-10 w-9' />
              <div className='flex flex-col gap-y-2 border-solid border-l-[1px] border-[#d8d8d8] px-5'>
                <h3 className='text-sec-2 font-semibold'>{header}</h3>
                <p className='text-sec-3 text-[13px] font-[Krub] leading-5'>
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
