import Title from './Title';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

export default function Testimonial() {
  return (
    <section className='w-[55rem] mx-auto py-10'>
      <Title title='Testimonial' bg='#e8e8e880' text='#1c1f35' />
      <div className='flex justify-between items-center'>
        <h1 className='text-prim2 text-xl'>What Our Customer Say</h1>
        <div className='flex gap-4'>
          <FaChevronCircleLeft />
          <FaChevronCircleRight />
        </div>
      </div>
    </section>
  );
}
