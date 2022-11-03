import FooterComponent from '../components/FooterComponent';
import Nav from '../components/Nav';
import { BiSearch } from 'react-icons/bi';
import Link from 'next/link';

function Career() {
  const data = [
    'Graphic Design',
    'Social Media Specialist',
    'Marketing',
    'System Analyst',
  ];
  return (
    <div className='overflow-hidden'>
      <Nav />
      <section className='w-full h-[90vh] sm:h-[70vh] lg:h-[50vh] xl:h-[90vh] bg-white flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-around'>
        <div>
          <h1 className='text-[#325BAB] font-bold text-3xl lg:text-[45px] leading-[3rem]'>
            Nusantara Siber <br /> Integrasi Karir
          </h1>
          <p className='text-[#8E8E8E] mt-3'>
            NSI akan konsisten menciptakan lapangan <br /> pekerjaan untuk kamu
          </p>
        </div>
        <img
          className='sm:w-4/5 lg:w-[500px]'
          src='career.svg'
          alt='career'
        />
      </section>
      <section className='bg-[#2EB67D] h-full pb-20 w-full'>
        <div className='flex flex-col items-center text-white pt-8'>
          <h1 className='font-bold text-xl'>Cari Kesempatan Berkarirmu</h1>
          <p className='text-base sm:text-lg text-center'>
            Ayo berkarir bersama NSI untuk memulai kehidupan barumu
          </p>
          <div className='flex items-center rounded-full bg-transparent border border-white w-4/5 sm:w-[450px] h-10 mt-5'>
            <input
              className='bg-transparent w-full outline-none rounded-full pl-3 text-sm placeholder:text-white'
              type='text'
              autoComplete='off'
              placeholder='Cari lowongan'
            />
            <BiSearch className='mr-3 text-2xl' />
          </div>
        </div>
        <div className='px-10 sm:px-20 mt-20'>
          {/* Card */}
          {data.map((items, i) => {
            return (
              <Link
                key={i}
                href='/career-detail'
              >
                <div className='flex items-center cursor-pointer justify-between border-b-2 border-white pb-5 mt-7'>
                  <div className='flex gap-5'>
                    <p className='text-sm sm:text-lg text-white'>{items}</p>
                  </div>
                  <p className='text-xs text-white'>See More</p>
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

export default Career;
