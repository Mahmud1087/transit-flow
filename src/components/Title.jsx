export default function Title({ text, bg, children, ...rest }) {
  return (
    <div className={`flex bg-${bg} w-fit`} {...rest}>
      <div className='px-[2.5px] bg-prim-1'></div>
      <h1 className={`py-1 px-2 font-[Rubik] text-[13px] text-${text}`}>
        {children}
      </h1>
    </div>
  );
}
