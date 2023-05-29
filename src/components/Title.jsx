export default function Title({ title, bg, text }) {
  return (
    <div className={`flex bg-[${bg}] w-fit`}>
      <div className='px-[2.5px] bg-prim1'></div>
      <h1 className={`py-1 px-2 font-[Rubik] font-[400] text-xs text-${text}`}>
        {title}
      </h1>
    </div>
  );
}
