import icon1 from '../assets/Icon (8).png';
import icon2 from '../assets/Icon (9).png';
import icon3 from '../assets/Icon (10).png';
import icon4 from '../assets/Icon (11).png';
import icon5 from '../assets/Icon (12).png';
import icon6 from '../assets/Icon (13).png';
import img from '../assets/Image.png';

export default function () {
  const data = [
    { icon: icon1, text: 'Safe Package' },
    { icon: icon2, text: 'Global Tracking' },
    { icon: icon3, text: 'In Time Delivery' },
    { icon: icon4, text: 'Ship Everyone' },
    { icon: icon5, text: '24/7 Support' },
    { icon: icon6, text: 'Transparent Pricing' },
  ];

  return (
    <section className='h-[500px] mx-auto flex my-5'>
      <div className='relative w-1/2 h-full bg-prim-2 pl-36'>
        <div className='absolute top-0 left-6'>
          <img src={img} alt='airplane image' />
        </div>
      </div>
      <div className='w-1/2 bg-sec-1 h-full'></div>
    </section>
  );
}
