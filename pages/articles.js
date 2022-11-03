import Link from 'next/link';
import { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Api from '../config/Api';
import FooterComponent from '../components/FooterComponent';

function articles() {
  const { http } = Api();
  const [data, setData] = useState();

  const newsData = [
    {
      title:
        'Open Recruitment Internship program NSI Tahun 2022 dengan sistem kerja WFA & Paid',
      date: '20/10/2022',
      image: 'loker.png',
    },
    {
      title:
        'Soft Launching PT Nusantara Siber Integrasi yang sudah berbadan hukum sesuai dengan UU No. 40 Tahun 2007',
      date: '09/10/2022',
      image: 'soft.png',
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
      <section className='flex flex-col-reverse px-5 justify-center lg:flex-row lg:justify-center gap-5 bg-[#2EB67D] h-[90vh] items-center'>
        <div className='w-[400px]'>
          <h1 className='font-bold text-white text-[45px]'>Media NSI</h1>
          <p className='text-base text-white'>
            Menghadirkan berita terkini seputar kegiatan perusahaan, open
            recruitment dan berita lainnya yang aktual dan terpercaya
          </p>
        </div>
        <img
          className='h-72'
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
        <div className='flex gap-32'>
          <div className='w-1/2 flex flex-col'>
            <div>
              <img
                className='w-full'
                src='side-article.png'
                alt=''
              />
            </div>
          </div>
          <div className='w-2/5'>
            {sideArticles.map((items, i) => {
              return (
                <div
                  key={i}
                  className='flex gap-3 mb-3'
                >
                  <img
                    className='w-60'
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
      </section>
      {/* Berita Pilihan */}

      <section className='bg-[#2EB67D] w-full h-full pb-20'>
        <h1 className='text-white font-bold text-center text-2xl py-10'>
          Berita Pilihan
        </h1>
        <div className='flex justify-center gap-10'>
          {newsData.map((items, i) => {
            return (
              <div
                key={i}
                className='bg-white w-2/5 p-5 rounded-lg'
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
                    Lihat selengkapnya
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
      </section>
      <FooterComponent />
    </div>
  );
}

export default articles;
