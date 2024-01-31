import { quotes } from './quotes';

const QuoteContainer = ({ toggleQuote }) => {
  const randomNo = Math.floor(Math.random() * quotes.length);

  return (
    <div
      className={`hidden absolute transition-all top-[55px] right-0 w-[20rem] h-fit p-5 rounded-xl font-[Krub] bg-white before:absolute before:w-0 before:h-0 before:right-[calc(130px/2)] before:border-b-white before:z-10 before:-top-2 before:border-r-8 before:border-l-8 before:border-b-8 before:border-l-transparent before:border-r-transparent ${
        toggleQuote && 'sm:block'
      }`}
    >
      <p>{`- ${quotes[randomNo].text} `}</p>

      <p className='text-right italic font-[Krub] mt-4 text-sm font-bold'>{`- ${quotes[randomNo].author}`}</p>
    </div>
    // <div className='absolute top-0 left-0 bg-transparent w-0 h-0 border-l-[75px] border-r-[75px] border-b-[50px] border-l-transparent border-r-transparent'></div>
  );
};
export default QuoteContainer;
