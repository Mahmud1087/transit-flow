import Navbar from './Navbar';
import Title from './Title';

export default function SubHero() {
  return (
    <section className='bg-heroImage bg-no-repeat bg-center bg-cover h-screen relative'>
      <Navbar />
      <article className='h-full w-[55rem] mx-auto flex flex-col justify-center'>
        <div className='w-1/2 px-5'>
          <Title bg='title1' text='white'>
            Logistics & Supply Chain Solutions
          </Title>
          <h1 className='font-[Rubik] font-[700] text-[2.4rem] text-white leading-[1.2] my-3'>
            Your Gateway <br /> to any Destination <br /> in the World
          </h1>
          <p className='text-white text-xs leading-[1.5] mb-3'>
            In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie
            in arcu <br /> no, iaculis vehicula ipsum. Nunc faucibus, nisl id
            dapibus finibus, enim <br /> diam interdum nulla, sed laoreet risus
            lectus.
          </p>
          <button className='bg-gradient-to-r from-grad1 via-grad2 to-grad3 relative py-2 px-6 text-sm overflow-hidden border-0 border-prim1 border-solid font-[Krub] font-[600]'>
            Explore More
            <div className='absolute h-10 w-10 rounded-full bg-white -bottom-5 -right-5'></div>
          </button>
        </div>
      </article>
    </section>
  );
}
