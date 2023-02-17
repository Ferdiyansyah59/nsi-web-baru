import { useRouter } from 'next/router';
import FooterComponent from '../components/FooterComponent';
import Nav from '../components/Nav';

const data = [
  {
    title:
      'Soft Launching PT Nusantara Siber Integrasi yang sudah berbadan hukum sesuai dengan UU No.40 Tahun 2007',
    img: '/banner.png',
    date: '09/10/2022',
    leftContent:
      '<p>Pada tanggal 09 September 2022 PT Nusantara Siber Integrasi mengadakan acara Soft Launching perdana sebagai tanda perusahaan yang sudah resmi berdiri dan berbadan hukum sesuai dengan UU No. 40 Tahun 2007 Tentang Perseroan Terbatas. Hal ini tak terlepas dari proses pengajuan dan pembentukan perusahaan yang sudah mencapai babak akhir setelah melewati berbagai proses selama hampir 10 bulan. </p>',
    rightContent:
      '<p>Pada tanggal 09 September 2022 PT Nusantara Siber Integrasi mengadakan acara Soft Launching perdana sebagai tanda perusahaan yang sudah resmi berdiri dan berbadan hukum sesuai dengan UU No. 40 Tahun 2007 Tentang Perseroan Terbatas. Hal ini tak terlepas dari proses pengajuan dan pembentukan perusahaan yang sudah mencapai babak akhir setelah melewati berbagai proses selama hampir 10 bulan. </p><p style="margin-top: 30px;">Pada tanggal 09 September 2022 PT Nusantara Siber Integrasi mengadakan acara Soft Launching perdana sebagai tanda perusahaan yang sudah resmi berdiri dan berbadan hukum sesuai dengan UU No. 40 Tahun 2007 Tentang Perseroan Terbatas. Hal ini tak terlepas dari proses pengajuan dan pembentukan perusahaan yang sudah mencapai babak akhir setelah melewati berbagai proses selama hampir 10 bulan. </p><p style="margin-top: 30px;">Pada tanggal 09 September 2022 PT Nusantara Siber Integrasi mengadakan acara Soft Launching perdana sebagai tanda perusahaan yang sudah resmi berdiri dan berbadan hukum sesuai dengan UU No. 40 Tahun 2007 Tentang Perseroan Terbatas.</p>',
  },
  {
    title:
      'Open Recruitment Internship program NSI Tahun 2022 dengan sistem kerja WFA & Paid',
    img: '/loker.png',
    date: '20/10/2022',
    leftContent:
      '<p> Untuk meningkatkan produktifitas perusahaan, kami membuka kesempatan untuk kamu memulai pengalaman kerja baru dengan mengikuti internship program selama 3 bulan dengan sistem kerja WFA dan paid.  </p>',
    rightContent:
      '<p>Kami membuka beberapa posisi untuk internship program yang bisa kamu pilih, diantaranya: </p><ol style="list-style-type: decimal; margin-left: 30px;"><li>Front End Developer</li><li>Back End Developer</li><li>UI Designer</li><li>UX Research</li><li>Security Analyst</li><li>Penetration Tester</li></ol><p style="margin-top: 30px;">Adapun kualifikasi umum yang harus diperhatikan diantaranya:</p><ol style="list-style-type: decimal; margin-left: 30px;"><li>Laki-laki/Perempuan Minimal 18 Tahun</li><li>Memiliki passion dibidang teknologi</li><li>Rajin, teliti dan responsif</li><li>Mudah berkomunikasi</li><li>Dapat bekerja dengan target</li></ol><p style="margin-top: 30px;">Demikian berita pilihan kali ini tentang Open Reucruitment Internship Program PT Nusantara Siber Integrasi, kami tunggu kehadiran kalian</p>',
  },
];

function Articles() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className='h-full w-full overflow-hidden'>
      <Nav />
      <section className='flex flex-col-reverse px-5 justify-center lg:flex-row lg:justify-center gap-5 bg-[#2EB67D] h-[90vh] sm:justify-center md:justify-start md:pb-20 sm:h-[70vh] lg:h-[50vh] lg:pb-0 xl:h-[85vh] 2xl:h-[70vh] 2xl:gap-20 items-center'>
        <div className='w-[400px] 2xl:w-2/6'>
          <h1 className='font-bold text-white text-[45px] 2xl:text-[55px]'>
            Media NSI
          </h1>
          <p className='text-base 2xl:text-2xl text-white'>
            Menghadirkan berita terkini seputar kegiatan perusahaan, open
            recruitment dan berita lainnya yang aktual dan terpercaya
          </p>
        </div>
        <img
          className='h-72 2xl:h-[45vh]'
          src='mediansi.webp'
          alt='mediansi'
        />
      </section>
      <section className='grid lg:grid-cols-2 lg:gap-10 px-7 lg:px-20 py-10'>
        <div className='flex flex-col gap-2'>
          <p className='text-lg'>Press release NSI media</p>
          <h1 className='font-semibold text-xl'>
            {slug === 'soft-launching'
              ? data[0].title
              : slug === 'oprec'
              ? data[1].title
              : 'Halaman tidak ditemukan'}
          </h1>
          <p className='text-sm'>
            {slug === 'soft-launching'
              ? data[0].date
              : slug === 'oprec'
              ? data[1].date
              : ''}
          </p>
          <img
            src={
              slug === 'soft-launching'
                ? data[0].img
                : slug === 'oprec'
                ? data[1].img
                : ''
            }
            alt=''
          />
          <div
            className='text-lg'
            dangerouslySetInnerHTML={{
              __html:
                slug === 'soft-launching'
                  ? data[0].leftContent
                  : slug === 'oprec'
                  ? data[1].leftContent
                  : '',
            }}
          />
        </div>
        <div
          className='text-lg mt-10'
          dangerouslySetInnerHTML={{
            __html:
              slug === 'soft-launching'
                ? data[0].rightContent
                : slug === 'oprec'
                ? data[1].rightContent
                : '',
          }}
        />
      </section>
      <FooterComponent />
    </div>
  );
}

export default Articles;
