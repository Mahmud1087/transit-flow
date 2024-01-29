import Navbar from './Navbar';
import Title from './Title';

export default function SubHero() {
  return (
    <section className="bg-[url('./assets/Photo.png')] bg-no-repeat bg-center bg-cover h-full sm:h-screen">
      <Navbar className='hidden sm:block' />
      <article className='h-full flex flex-col justify-center items-center sm:items-start sm:w-[55rem] sm:mx-auto '>
        <div className='w-full flex flex-col items-center text-center px-5 py-24 sm:text-start sm:block sm:w-1/2 sm:px-5'>
          <Title bg='titleBg-1' text='white'>
            Logistics & Supply Chain Solutions
          </Title>
          <h1 className='font-[Rubik] font-bold text-4xl text-white leading-[1.2] my-3 sm:text-[2.4rem]'>
            Your Gateway <br /> to any Destination <br /> in the World
          </h1>
          <p className='text-white leading-[1.5] mb-4 sm:text-xs'>
            In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie
            in arcu <br className='hidden sm:block' /> no, iaculis vehicula
            ipsum. Nunc faucibus, nisl id dapibus finibus, enim{' '}
            <br className='hidden sm:block' /> diam interdum nulla, sed laoreet
            risus lectus.
          </p>
          <button className='bg-gradient-to-r from-grad-1 via-grad-2 to-grad-3 relative py-2 px-6 text-sm overflow-hidden border-0 border-prim-1 border-solid font-[Krub] font-semibold'>
            Explore More
            <div className='absolute h-10 w-10 rounded-full bg-white -bottom-5 -right-5'></div>
          </button>
        </div>
      </article>
    </section>
  );
}
