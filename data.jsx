// Hero Images imports
import clockIcon from './src/assets/Icon.png';
import msgIcon from './src/assets/Icon (2).png';
import phoneIcon from './src/assets/Icon (1).png';
// WhatWeDo component images imports
import icon1 from './src/assets/Icon.svg';
import icon2 from './src/assets/Icon (3).png';
import icon3 from './src/assets/Icon (4).png';
import icon4 from './src/assets/Icon (5).png';
// ImageBox component images imports
import img1 from './src/assets/Photo (2).png';
import img2 from './src/assets/Photo (3).png';
import img3 from './src/assets/Photo (4).png';
import img4 from './src/assets/Photo (5).png';
import img5 from './src/assets/Photo (6).png';
// Testimonial component images imports
import testmImage1 from './src/assets/User.png';
import testmImage2 from './src/assets/User (1).png';
import starIcon from './src/assets/Star 5.png';

// HeroSection data
const now = new Date();
const nowDay = now.toString().split(' ')[0];
let isClosed;
now.getHours() < 9 || now.getHours() > 18 || now.getDay() === 0
  ? (isClosed = 'Closed')
  : (isClosed = 'Open');

export const headerDetails = [
  {
    id: 1,
    text: 'Mon - Sat 9:00 - 18:00',
    details: `${nowDay} ( ${isClosed} )`,
    icon: clockIcon,
  },
  {
    id: 2,
    text: 'Email',
    details: 'contact@logistics.com',
    icon: msgIcon,
  },
  {
    id: 3,
    text: 'Call Us',
    details: '(00) 112 365 485',
    icon: phoneIcon,
  },
];

// WhatWeDo data
export const aboutData = [
  {
    id: 1,
    icon: icon2,
    header: 'Sea Transport Services',
    parag:
      'Following the quality of our service thus having gained trust of our many clients.',
  },
  {
    id: 2,
    icon: icon3,
    header: 'Warehousing Services',
    parag:
      'Following the quality of our service thus having gained trust of our many clients.',
  },
  {
    id: 3,
    icon: icon1,
    header: 'Air Fright Services',
    parag:
      'Following the quality of our service thus having gained trust of our many clients.',
  },
  {
    id: 4,
    icon: icon4,
    header: 'Local Shipping Services',
    parag:
      'Following the quality of our service thus having gained trust of our many clients.',
  },
];

// Projects Component data
export const projectData = [
  {
    id: 1,
    image: img1,
    header: 'Liquid Transportation',
    text: 'Premium Tankers',
  },
  {
    id: 2,
    image: img2,
    header: 'Packaging Solutions',
    text: 'Warehouse Management',
  },
  {
    id: 3,
    image: img3,
    header: 'Contract Logistics',
    text: 'Road Transportation',
  },
  {
    id: 4,
    image: img4,
    header: 'Warehouse & Distribution',
    text: 'Large Warehouse',
  },
  {
    id: 5,
    image: img5,
    header: 'Specialized Transport',
    text: 'Ocean Transports',
  },
];

// Testimonial data
export const testmData = [
  {
    id: 1,
    img: testmImage1,
    name: 'Kathieen Smith',
    company: 'Fuel Company',
    testimonial:
      'Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
    star: starIcon,
    bgColor: '#F4F4F4',
  },
  {
    id: 2,
    img: testmImage2,
    name: 'John Marlin',
    company: 'Restoration Company',
    testimonial:
      'Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
    star: starIcon,
    bgColor: '#091242',
  },
];
