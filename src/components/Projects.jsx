import ImageBox from './ImageBox';

export default function Projects() {
  return (
    <section
      id='project'
      className='w-full mt-[52rem] px-6 py-5 text-center sm:mt-[38rem] sm:px-12 lg:w-[60rem] lg:mx-auto lg:px-0'
    >
      <h1 className='text-center text-prim-2 text-[1.5rem] font-[Rubik] font-semibold my-8 sm:text-[1.8rem] lg:text-[1.55rem] '>
        Transporting Across The World
      </h1>
      <ImageBox />
      <div className='w-full my-12 flex justify-center'>
        <button className='bg-prim-2 relative py-2 px-6 text-sm text-white overflow-hidden border-0 border-prim-1 border-solid font-[Krub] font-semibold'>
          More Work
          <div className='absolute h-10 w-10 rounded-full bg-prim-3 -bottom-5 -right-5'></div>
        </button>
      </div>
    </section>
  );
}
