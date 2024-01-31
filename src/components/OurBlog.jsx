import Title from './Title';
import img1 from '../assets/Photo.jpg';
import img2 from '../assets/Photo (1).jpg';
import img3 from '../assets/Image (1).jpg';
import calendarIcon from '../assets/Icon (15).png';

export default function OurBlog() {
  const data = [
    {
      id: 1,
      image: img1,
      day: '08',
      heading: 'Inland freight a worthy solution for your business',
      lastChild: false,
    },
    {
      id: 2,
      image: img2,
      day: '12',
      heading: 'How technology can help redraw the supply chain map',
      lastChild: false,
    },
    {
      id: 3,
      image: img3,
      day: '25',
      heading: 'Five things you should have ready for your broker',
      lastChild: true,
    },
  ];

  return (
    <section className='w-full my-28 flex flex-col items-center justify-center gap-4 lg:w-[45rem] lg:mx-auto'>
      <Title bg='titleBg-2' text='sec-2'>
        Our Blog
      </Title>
      <h1 className='text-sec-2 text-[1.8rem] font-[Rubik] font-semibold leading-7'>
        Our Latest News
      </h1>
      <div className='flex flex-col gap-5 mt-8 px-6 sm:px-0'>
        {data.map((item) => {
          const { id, image, day, heading, lastChild } = item;

          return (
            <div
              key={id}
              className={`flex flex-col gap-3 py-6 border-solid border-[#d6d6d6] border-t-[1px] ${
                lastChild && 'border-b-[1px] '
              } sm:flex-row sm:px-6 lg:px-0`}
            >
              <img
                src={image}
                alt={`image ${id}`}
                className='sm:w-[17rem] lg:w-[22rem]'
              />
              <div className='flex flex-col items-center leading-9'>
                <img src={calendarIcon} alt='calendar icon' className='w-9' />
                <h1 className='text-sec-2 font-semibold text-[30px] font-[Rubik] text-center'>
                  {day}
                </h1>
                <p className='text-center text-[12px] font-[Krub] font-medium text-[#666c89]  leading-[0.5rem]'>
                  September
                </p>
              </div>
              <article className='flex flex-col gap-3 pl-6 pr-4 py-2 border-solid border-l-[1px]'>
                <h1
                  className={`text-sec-2 text-[16px] font-[Rubik] font-medium leading-5`}
                >
                  {heading}
                </h1>
                <p className='text-[12px] font-medium font-[Krub] text-[#666c89] leading-5'>
                  We are dedicated in creating added value for our customers by
                  implementing modern technology in our work.
                </p>
                <ul className='text-sec-2 font-[Krub] text-[13px] font-medium list-disc leading-[1.35rem] px-4'>
                  <li>Urgent transport solution</li>
                  <li>Reliable & experienced staffs</li>
                  <li>Urgent transport solution</li>
                  <li>Reliable & experienced staffs</li>
                </ul>
              </article>
            </div>
          );
        })}
      </div>
      <button className='bg-prim-2 relative py-3 px-12 mt-4 text-sm text-white overflow-hidden border-0 border-prim-1 border-solid font-[Krub] font-semibold'>
        More Blog
        <div className='absolute h-10 w-10 rounded-full bg-prim-3 -bottom-5 -right-5'></div>
      </button>
    </section>
  );
}
