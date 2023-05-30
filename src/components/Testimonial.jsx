import Title from './Title';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { CgQuote } from 'react-icons/cg';
import { testmData } from '../../data';

export default function Testimonial() {
  return (
    <section className='w-[55rem] mx-auto py-10'>
      <Title bg='titleBg2' text='#heading'>
        Testimonial
      </Title>
      <div className='flex justify-between items-center my-3'>
        <h1 className='text-prim2 text-xl font-semibold font-[Rubik]'>
          What Our Customer Say
        </h1>
        <div className='flex gap-2'>
          <div className='p-1 rounded-full text-prim2 bg-gradient-to-r from-grad1 via-grad2 to-grad3'>
            <BsArrowLeftShort />
          </div>
          <div className='p-1 rounded-full bg-prim2 text-white'>
            <BsArrowRightShort />
          </div>
        </div>
      </div>

      <article className='my-5 flex justify-center items-center'>
        {testmData.map((item) => {
          const {
            id,
            img,
            name,
            company,
            testimonial,
            star,
            bgColor,
            paragColor,
            headColor,
          } = item;
          return (
            <section className={`p-12 bg-${bgColor}`} key={id}>
              <div className='flex justify-between items-center'>
                <div className='flex gap-2'>
                  <img src={img} alt='customer image' className='w-14' />
                  <div className='flex flex-col justify-center font-[Rubik]'>
                    <h4
                      className={`text-[14px] font-[Rubik] font-semibold text-${headColor}`}
                    >
                      {name}
                    </h4>
                    <p
                      className={`text-xs text-${headColor} font-[Krub] leading-normal`}
                    >
                      {company}
                    </p>
                  </div>
                </div>

                <div className='rounded-full text-[40px] text-prim2 bg-gradient-to-r from-grad1 via-grad2 to-grad3'>
                  <CgQuote />
                </div>
              </div>

              <p
                className={`text-[12px] text-${paragColor} font-[Krub] italic py-6`}
              >
                {testimonial}
              </p>
              <div className='flex gap-1 mt-2'>
                <img src={star} alt='star' className='w-5 h-5' />
                <img src={star} alt='star' className='w-5 h-5' />
                <img src={star} alt='star' className='w-5 h-5' />
                <img src={star} alt='star' className='w-5 h-5' />
                <img src={star} alt='star' className='w-5 h-5' />
              </div>
            </section>
          );
        })}
      </article>
    </section>
  );
}
