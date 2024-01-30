import { projectData } from '../../data';

export default function ImageBox() {
  return (
    <section className='grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-5 '>
      {projectData.map((item) => {
        const { id, image, header, text } = item;
        return (
          <div className='relative' key={id}>
            <div className='relative'>
              <img src={image} alt='image' className='w-full' />
            </div>
            <div className='bg-gradient-to-b from-[#1c1f3500] via-[#01062bd1] to-[#04092a] w-full absolute inset-auto bottom-0 blur-0 h-36 lg:h-[90px]'>
              <div className='flex flex-col gap-2 absolute bottom-4 p-4 sm:p-3 lg:gap-0 lg:bottom-0 '>
                <h3 className=' text-xl text-white text-start font-[Rubik] lg:text-[12px] '>
                  {header}
                </h3>
                <p className='text-prim-1 text-start lg:text-[10px]'>{text}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
