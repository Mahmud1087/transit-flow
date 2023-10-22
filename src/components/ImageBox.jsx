import { projectData } from '../../data';

export default function ImageBox() {
  return (
    <section className='grid grid-cols-5 gap-4'>
      {projectData.map((item) => {
        const { id, image, header, text } = item;
        return (
          <div className='relative' key={id}>
            <div className='relative'>
              <img src={image} alt='image' />
            </div>
            <div className='flex flex-col bg-gradient-to-b from-[#1c1f3500] via-[#01062bd1] to-[#04092a] w-full absolute bottom-0 inset-auto blur-0 h-[90px]'>
              <div className='absolute bottom-0 p-3'>
                <h3 className='text-[12px] text-white font-[Rubik]'>
                  {header}
                </h3>
                <p className='text-prim-1 text-[10px]'>{text}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
