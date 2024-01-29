export default function Footer() {
  return (
    <section className='border-solid border-t-[1px] border-[#4e5683] bg-prim-2'>
      <div className='flex justify-between items-center py-5 w-[52rem] mx-auto'>
        <p className='text-[12px] font-normal font-[Krub] text-white ml-8'>
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
