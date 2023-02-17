import Link from 'next/link';
import { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Api from '../config/Api';
import FooterComponent from '../components/FooterComponent';

function Media() {
  const { http } = Api();
  const [data, setData] = useState();

  const newsData = [
    {
      title:
        'Open Recruitment Internship program NSI Tahun 2022 dengan sistem kerja WFA & Paid',
      date: '20/10/2022',
      image: 'loker.png',
      slug: 'oprec',
    },
    {
      title:
        'Soft Launching PT Nusantara Siber Integrasi yang sudah berbadan hukum sesuai dengan UU No. 40 Tahun 2007',
      date: '09/10/2022',
      image: 'soft.png',
      slug: 'soft-launching',
    },
  ];

  useEffect(() => {
    try {
      http
        .get('/article')
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log('aws', err);
        });
    } catch (error) {
      console.log(error);
    }
  }, [data]);

  const sideArticles = [
    {
      title: 'Pengembangan Produk pertama PT Nusasntara Siber Integrasi',
      date: '24/9/2022',
      cover: 'side-article.png',
    },
    {
      title: 'Pengembangan Produk pertama PT Nusasntara Siber Integrasi',
      date: '24/9/2022',
      cover: 'side-article.png',
    },
    {
      title: 'Pengembangan Produk pertama PT Nusasntara Siber Integrasi',
      date: '24/9/2022',
      cover: 'side-article.png',
    },
    {
      title: 'Pengembangan Produk pertama PT Nusasntara Siber Integrasi',
      date: '24/9/2022',
      cover: 'side-article.png',
    },
  ];

  return (
    <div className='h-full w-full overflow-hidden'>
      <Nav />
      <section className='flex flex-col-reverse px-5 justify-center lg:flex-row lg:justify-center gap-5 bg-[#2EB67D] h-[90vh] sm:justify-center md:justify-start md:pb-20 sm:h-[70vh] lg:h-[50vh] lg:pb-0 xl:h-[85vh] 2xl:h-[70vh] 2xl:gap-20 items-center'>
        <div className='w-[95%] sm:w-[400px] 2xl:w-2/6'>
          <h1 className='font-bold text-white text-3xl sm:text-[45px] 2xl:text-[55px]'>
            Media NSI
          </h1>
          <p className='text-sm sm:text-base 2xl:text-2xl text-white'>
            Menghadirkan berita terkini seputar kegiatan perusahaan, open
            recruitment dan berita lainnya yang aktual dan terpercaya
          </p>
        </div>
        <img
          className='sm:h-72 2xl:h-[45vh]'
          src='mediansi.webp'
          alt='mediansi'
        />
      </section>
      <section className='w-full h-full mb-10 px-10 mt-24'>
        {/* Title */}
        <div className='flex'>
          <div className='mb-2'>
            <h1 className='font-bold text-3xl text-[#325BAB]'>
              NSI Media Post
            </h1>
            <h3 className='text-xl font-medium'>
              Update berita terkini seputar NSI
            </h3>
          </div>
        </div>
        {/* Content */}
        <div className='flex flex-col lg:flex-row gap-10 xl:gap-32'>
          <div className='w-full xl:w-1/2 flex flex-col'>
            <img
              className='w-full'
              src='banner.png'
              alt=''
            />
            <div className='flex flex-col gap-2'>
              <p className='text-lg'>Press release NSI media</p>
              <p className='font-semibold'>
                Soft Launching PT Nusantara Siber Integrasi yang sudah berbadan
                hukum sesuai dengan UU No.40 Tahun 2007
              </p>
              <p>09/10/2022</p>
              <div className='text-[#325BAB] font-bold text-lg'>
                <Link href='/articles?slug=soft-launching'>Baca Artikel</Link>
              </div>
            </div>
          </div>
          {/* Side */}
          <div className='w-full xl:w-2/5'>
            {sideArticles.map((items, i) => {
              return (
                <div
                  key={i}
                  className='flex flex-col lg:flex-row gap-3 mb-3'
                >
                  <img
                    className='w-full lg:w-60'
                    src={items.cover}
                    alt='cover'
                  />
                  <div>
                    <p className='text-sm'>Press release NSI media</p>
                    <h1 className='font-semibold'>{items.title}</h1>
                    <p className='text-xs'>{items.date}</p>
                    <h1 className='text-[#325BAB] font-bold'>
                      <Link href='/'>Baca Artikel</Link>
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* End Content */}
      </section>
      {/* Berita Pilihan */}

      <section className='bg-[#2EB67D] w-full h-full pb-20'>
        <h1 className='text-white font-bold text-center text-2xl py-10'>
          Berita Pilihan
        </h1>
        <div className='flex flex-col px-5 lg:px-0 lg:flex-row justify-center gap-10'>
          {newsData.map((items, i) => {
            return (
              <div
                key={i}
                className='bg-white w-ful lg:w-2/5 p-5 rounded-lg'
              >
                <img
                  src={items.image}
                  alt='gambar'
                />
                <div>
                  <p className='text-sm'>Press release NSI media</p>
                  <h1 className='font-semibold text-sm my-2'>{items.title}</h1>
                  <p className='text-xs'>{items.date}</p>
                  <h2 className='text-[#325BAB] text-xl font-bold mt-2 cursor-pointer'>
                    <Link href={`articles?slug=${items.slug}`}>
                      Lihat selengkapnya
                    </Link>
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* Galeri */}
      <section className='flex flex-col items-center py-20'>
        <div className='text-center'>
          <h1 className='text-[#325BAB] font-bold text-3xl mb-3'>Galeri</h1>
          <p className='text-[#616161]'>
            Berisi kumpulan aset digital kami yang rutin di publikasikan
            <br></br> untuk kebutuhan entertainment
          </p>
        </div>
        {/* Gambar */}
        <div className='flex flex-col px-10 sm:px-0 sm:flex-row justify-center gap-10 mt-10'>
          <img
            className='sm:w-1/4 sm:h-1/4'
            src='gambar1.jpg'
            alt='gambar'
          />
          <img
            className='sm:w-1/4 sm:h-1/4'
            src='gambar2.jpg'
            alt='gambar'
          />
        </div>
        <div className='flex flex-col px-10 sm:px-0 sm:flex-row justify-center gap-10 mt-10'>
          <img
            className='sm:w-1/4 sm:h-1/4'
            src='gambar3.jpg'
            alt='gambar'
          />
          <img
            className='sm:w-1/4 sm:h-1/4'
            src='gambar4.png'
            alt='gambar'
          />
        </div>
      </section>
      <FooterComponent />
    </div>
  );
}

export default Media;
