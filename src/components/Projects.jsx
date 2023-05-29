import ImageBox from './ImageBox';

export default function Projects() {
  return (
    <section className='w-[60rem] mx-auto'>
      <h1 className='text-center text-prim2 text-xl font-[Rubik] font-[600] my-8'>
        Transporting Across The World
      </h1>
      <ImageBox />
      <div className='w-full my-12 flex justify-center'>
        <button className='bg-prim2 relative py-2 px-6 text-sm text-white overflow-hidden border-0 border-prim1 border-solid font-[Krub] font-[600]'>
          More Work
          <div className='absolute h-10 w-10 rounded-full bg-prim3 -bottom-5 -right-5'></div>
        </button>
      </div>
    </section>
  );
}
