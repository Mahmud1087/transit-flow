import Title from './Title';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { CgQuote } from 'react-icons/cg';
import { testmData } from '../../data';

export default function Testimonial() {
  return (
    <section className='w-[55rem] mx-auto py-10'>
      <Title title='Testimonial' bg='#e8e8e880' text='#1c1f35' />
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
          const { id, img, name, company, testimonial, star, bgColor } = item;
          return (
            <section className={`px-8 py-12 `} key={id}>
              <div className='flex justify-between items-center'>
                <div className='flex gap-2'>
                  <img src={img} alt='customer image' className='w-16' />
                  <div className='flex flex-col justify-center font-[Rubik]'>
                    <h4 className='text-[1rem] font-[Rubik] font-semibold text-prim2'>
                      {name}
                    </h4>
                    <p className='text-sm font-[Krub] font-medium'>{company}</p>
                  </div>
                </div>

                <div className='p-1 rounded-full text-[40px] text-prim2 bg-gradient-to-r from-grad1 via-grad2 to-grad3'>
                  <CgQuote />
                </div>
              </div>

              <p className='text-sm font-[Krub] font-medium italic py-5'>
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
