import FooterComponent from '../components/FooterComponent';
import Nav from '../components/Nav';
import { RiLoader4Fill, RiArrowDropRightLine } from 'react-icons/ri';
import Link from 'next/link';

function Gevornance() {
  return (
    <div className='overflow-hidden'>
      <Nav />
      <section className='w-full h-[90vh] sm:h-[70vh] lg:h-[50vh] xl:h-[90vh] bg-white flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-around'>
        {/* Left */}
        <div>
          <h1 className='text-[#325BAB] font-bold text-3xl lg:text-[45px] leading-[3rem]'>
            Tata Kelola <br></br> Perusahaan
          </h1>
          <p className='text-[#868686] mt-5'>
            Segala transparasi dan seluk beluk tata kelola <br></br> perusahaan
            NSI bisa kami lihat pada halaman ini
          </p>
        </div>
        {/* Right */}
        <img
          className='sm:h-72'
          src='/tata.svg'
          alt='tata'
        />
      </section>
      <section className='bg-[#2EB67D] h-96'>
        <div className='flex justify-center pt-10 mb-14'>
          <p className='font-semibold w-[90%] text-center lg:text-lg text-white'>
            PT Nusantara Siber Integrasi Beroperasi dengan transparan dan
            mengikuti peraturan yang berlaku
          </p>
        </div>
        <div className='px-10 md:px-20'>
          <Link href='/'>
            <div className='flex items-center cursor-pointer justify-between border-b-2 border-white pb-5'>
              <div className='flex gap-5'>
                <RiLoader4Fill className='text-white text-3xl' />
                <p className='text-sm sm:text-lg text-white'>
                  Laporan dan tata kelola Perusahaan
                </p>
              </div>
              <RiArrowDropRightLine className='text-white text-[40px]' />
            </div>
          </Link>
        </div>
      </section>
      <FooterComponent />
    </div>
  );
}

export default Gevornance;
