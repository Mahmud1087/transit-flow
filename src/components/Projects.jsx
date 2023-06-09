import ImageBox from './ImageBox';

export default function Projects() {
  return (
    <section className='w-[60rem] mx-auto'>
      <h1 className='text-center text-prim-2 text-xl font-[Rubik] font-semibold my-8'>
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
