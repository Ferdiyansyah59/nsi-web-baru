import FooterComponent from '../components/FooterComponent';
import Nav from '../components/Nav';
import { RiLoader4Fill, RiArrowDropRightLine } from 'react-icons/ri';
import Link from 'next/link';

const data = ['Laporan Tahunan', 'Laporan Keuangan Tahunan', 'Laporan Lainnya'];

function Report() {
  return (
    <div className='overflow-hidden'>
      <Nav />
      <section className='w-full h-[90vh] sm:h-[70vh] lg:h-[50vh] xl:h-[90vh] bg-white flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-around'>
        <div>
          <h1 className='text-[#325BAB] font-bold text-3xl lg:text-[45px] leading-[3rem]'>
            Laporan <br />
            Perusahaan
          </h1>
          <p className='text-[#8B8B8B] mt-3'>
            Berikut ringkasan dan laporan perusahaan NSI
          </p>
        </div>
        <img
          src='report.svg'
          alt='report'
        />
      </section>
      <section className='bg-[#2EB67D] h-full pb-20'>
        {/* Title */}
        <div className='flex justify-center pt-10 mb-20'>
          <p className='font-semibold text-base sm:text-lg text-white text-center w-[90%] sm:w-4/5'>
            Setiap pencapaian yang kami raih merupakan kebanggaan bersama. Oleh
            karena itu, dengan senang hati kami menyampaikan setiap pencapaian
            yang kami raih
          </p>
        </div>
        <div className='px-10 sm:px-20'>
          {/* Card */}
          {data.map((items, i) => {
            return (
              <Link
                key={i}
                href='/'
              >
                <div className='flex items-center cursor-pointer justify-between border-b-2 border-white pb-5 mt-7'>
                  <div className='flex gap-5'>
                    <RiLoader4Fill className='text-white text-xl sm:text-3xl' />
                    <p className='text-sm sm:text-lg text-white'>{items}</p>
                  </div>
                  <RiArrowDropRightLine className='text-white text-[40px]' />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <FooterComponent />
    </div>
  );
}

export default Report;
