export default function Footer() {
  return (
    <section className='border-solid border-t-[1px] border-[#4e5683] bg-prim-2 px-6 sm:px-0'>
      <div className='flex justify-between items-center flex-col-reverse py-5 w-full gap-5 lg:gap-0 lg:w-[52rem] lg:mx-auto lg:flex-row'>
        <p className='text-[12px] font-normal font-[Krub] text-white text-center sm:text-start sm:ml-8'>
          Copyright © TransitFlow | Designed by VictorFlow - Powered by Webflow.
        </p>
        <div className='flex gap-4'>
          <p className='text-[12px] font-normal font-[Krub] text-[#8388a7]'>
            Style Guide
          </p>
          <p className='text-[12px] font-normal font-[Krub] text-[#8388a7]'>
            Licenses
          </p>
          <p className='text-[12px] font-normal font-[Krub] text-[#8388a7]'>
            Changelog
          </p>
          <p className='text-[12px] font-normal font-[Krub] text-[#8388a7]'>
            Password
          </p>
        </div>
      </div>
    </section>
  );
}
