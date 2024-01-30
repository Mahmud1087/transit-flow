import Title from './Title';
import emailImage from '../assets/Icon (2).png';
import callUsImage from '../assets/Icon (1).png';
import timeImage from '../assets/Icon.png';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.jpg';

export default function Contact() {
  const data = [
    { id: 1, text: 'Email', image: emailImage, other: 'contact@logistics.com' },
    {
      id: 2,
      text: 'Call Us',
      image: callUsImage,
      other: '(00) 112 365 489',
    },
    {
      id: 3,
      text: 'Mon - Sat 9.00 - 18.00',
      image: timeImage,
      other: 'Sunday Closed',
    },
  ];

  const data2 = [
    { image: img1, alt: 'image 1' },
    { image: img2, alt: 'image 2' },
    { image: img3, alt: 'image 3' },
    { image: img4, alt: 'image 4' },
  ];

  return (
    <section
      id='contact'
      className='flex flex-col gap-5 justify-center items-center bg-prim-2 px-6 py-14 sm:px-0 sm:py-28 '
    >
      <article className='flex flex-col gap-8 sm:gap-3 sm:w-[52rem]'>
        <Title bg='titleBg-3' text='white'>
          Contact
        </Title>
        <section className='flex flex-col gap-16 sm:flex-row'>
          <div className='flex w-full flex-col gap-6 sm:gap-3 sm:w-[38%] '>
            <h1 className='font-[Rubik] font-medium text-white text-[1.8rem] leading-6'>
              Get in touch with us
            </h1>
            <p className='text-white leading-8 font-[Krub] sm:leading-6 sm:text-[13px]'>
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value.
            </p>
            <div className='grid grid-cols-2 gap-6 sm:mt-5 sm:flex sm:flex-col'>
              {data.map((item) => {
                const { id, text, image, other } = item;

                return (
                  <div key={id} className='flex items-center gap-3'>
                    <img src={image} alt='icon' className=' w-9 sm:w-12' />
                    <div className='flex flex-col'>
                      <p className='text-white text-[11px] font-[Krub]'>
                        {text}
                      </p>
                      <p className='text-white text-[11px] font-[Krub]'>
                        {other}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className='w-full flex flex-col gap-5 sm:w-[62%] '>
            <div className='grid grid-cols-2 gap-5'>
              <input
                type='text'
                placeholder='Your name*'
                className='text-[13px] p-4 placeholder-white bg-transparent border border-solid border-[#4e5683] text-white outline-none'
              />
              <input
                type='email'
                placeholder='Email*'
                className='text-[13px] p-4 placeholder-white bg-transparent border border-solid border-[#4e5683] outline-none text-white'
              />
              <input
                type='text'
                placeholder='Phone Number*'
                className='text-[13px] p-4 placeholder-white bg-transparent border border-solid border-[#4e5683] outline-none text-white'
              />
              <input
                type='text'
                placeholder='City*'
                className='text-[13px] p-4 placeholder-white bg-transparent border border-solid border-[#4e5683] outline-none text-white'
              />
            </div>

            <textarea
              name='message'
              id='message'
              cols='20'
              rows='6'
              placeholder='Message'
              className='text-[13px] p-4 text-white placeholder-white bg-transparent border border-solid border-[#4e5683] outline-none resize-none'
            ></textarea>

            <button
              type='submit'
              className='w-full text-prim-2 text-sm bg-gradient-to-r from-grad-1 via-grad-2 to-grad-3 cursor-pointer py-4 px-5 font-bold sm:font-medium sm:py-2 sm:text-[12.5px] '
            >
              Submit Message
            </button>
          </div>
        </section>

        <div className='w-full mt-12 grid grid-cols-2 px-3 sm:px-0 sm:grid-cols-4 '>
          {data2.map((item, index) => {
            const { image, alt } = item;

            return <img key={index} src={image} alt={alt} />;
          })}
        </div>
      </article>
    </section>
  );
}
