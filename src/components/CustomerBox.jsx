import { CgQuote } from 'react-icons/cg';

export default function CustomerBox({
  id,
  img,
  name,
  company,
  testimonial,
  star,
  bgColor,
  paragColor,
  headColor,
  bold,
}) {
  return (
    <section className={`p-12 bg-${bgColor}`} key={id}>
      <div className='flex justify-between items-center'>
        <div className='flex gap-2'>
          <img src={img} alt='customer image' className='w-12' />
          <div className='flex flex-col justify-center font-[Rubik]'>
            <h4
              className={`text-[12px] font-[Rubik] font-semibold text-${headColor}`}
            >
              {name}
            </h4>
            <p
              className={`text-[10px] text-${headColor} font-[Krub] leading-normal ${
                bold && 'font-medium'
              }`}
            >
              {company}
            </p>
          </div>
        </div>

        <div className='rounded-full text-[34px] text-prim-2 bg-gradient-to-r from-grad-1 via-grad-2 to-grad-3'>
          <CgQuote />
        </div>
      </div>

      <p
        className={`text-[11px] text-${paragColor} font-[Krub] italic py-5 ${
          bold && 'font-medium'
        }`}
      >
        {testimonial}
      </p>
      <div className='flex gap-1 mt-[[2px]'>
        <img src={star} alt='star' className='w-4 h-4' />
        <img src={star} alt='star' className='w-4 h-4' />
        <img src={star} alt='star' className='w-4 h-4' />
        <img src={star} alt='star' className='w-4 h-4' />
        <img src={star} alt='star' className='w-4 h-4' />
      </div>
    </section>
  );
}
