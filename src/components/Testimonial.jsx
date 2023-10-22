import Title from './Title';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { testmData } from '../../data';
import CustomerBox from './CustomerBox';

export default function Testimonial() {
  return (
    <section className='w-[45rem] mx-auto py-10'>
      <Title bg='titleBg-2' text='#heading'>
        Testimonial
      </Title>
      <div className='flex justify-between items-center my-3'>
        <h1 className='text-prim-2 text-2xl font-semibold font-[Rubik]'>
          What Our Customers Say
        </h1>
        <div className='flex gap-2'>
          <div className='p-1 text-xl rounded-full text-prim-2 bg-gradient-to-r from-grad-1 via-grad-2 to-grad-3 cursor-pointer'>
            <BsArrowLeftShort />
          </div>
          <div className='p-1 text-xl rounded-full bg-prim-2 text-white cursor-pointer'>
            <BsArrowRightShort />
          </div>
        </div>
      </div>

      <article className='my-8 flex justify-center items-center'>
        {testmData.map((item) => {
          return <CustomerBox key={item.id} {...item} />;
        })}
      </article>
    </section>
  );
}
