// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { useState } from 'react'
import FooterComponent from '../components/FooterComponent.js'
import Nav from '../components/Nav'

export default function Home() {

  const [isAbout, setIsAbout] = useState(false);


  const hiddenAbout = [
    "Nusantara Siber Integrasi merupakan perusahaan yang bergerak dibidang IT Software dan consultant yang memberikan pelayanan pembuatan perangkat lunak dan konsultasi dibidang digital. Dengan identitas ini, NSI berkomitmen untuk terus meracik ide baru untuk inovasi layanan dan produk digital yang bisa memberikan pelayanan terbaik untuk kamu.",

    "Dan tanpa melupakan hal terpenting, NSI akan selalu meninggalkan dampak positif dalam setiap jejak langkah kami demi menciptakan pelayanan digital yang lebih baik",

    "Sesuai dengan undang-undang nomor 11 Tahun 2008 Tentang Informasi dan Transaksi Elektronik (1) Setiap Penyelenggara Sistem Elektronik harus menyelenggarakan Sistem Elektronik secara andal dan aman serta bertanggung jawab terhadap beroperasinya Sistem Elektronik sebagaimana mestinya. "
  ]

  return (
    <div className=' h-full w-full bg-white font-[Montserrat] overflow-hidden'>
      <div className='m-auto'>
        {/* Nav */}
        
        <Nav />


        {/* Cover */}
        <section className='flex flex-col-reverse px-5 z-10 justify-center mt-10 h-[80vh] sm:h-[60vh] lg:h-[50vh] xl:h-screen lg:px-16 lg:grid lg:grid-cols-2 items-center 2xl:px-32'>
          <div className='lg:justify-self-start'>
          <h1 className='text-[#325BAB] font-bold text-[45px] lg:text-[75px] 2xl:text-[85px] leading-tight' data-aos="fade-right" data-aos-duration="900" data-aos-delay="100">Tentang</h1>
          <h2 className='text-[#325BAB] font-bold text-2xl leading-none lg:mt-2 lg:text-[45px] 2xl:text-[65px]' data-aos="fade-right" data-aos-duration="900" data-aos-delay="200">Nusantara Siber Integrasi</h2>
          <p className='text-[#8B8B8B] font-normal text-xs lg:mt-6 sm:text-lg 2xl:text-2xl' data-aos="fade-right" data-aos-duration="900" data-aos-delay="300">Kami adalah perusahaan TI yang lahir seutuhnya <br/> dalam dunia digital</p>
          </div>
          {/* HERO */}
          <div className='flex justify-center lg:justify-end lg:justify-self-end'>
            <img className='sm:w-4/5 2xl:h-[700px]' src="hero.svg" alt="hero" />
          </div>
        </section>


        {/* About */}
        <section className='w-full py-12 flex justify-center items-center bg-[#2EB67D] lg:py-20 px-10 lg:px-16 2xl:px-32'>
          <div>
            {/* 1 */}
            <p className='text-white text-justify text-base 2xl:text-xl' data-aos="fade-up" data-aos-duration="700">Kami hadir sebagai bagian menuju era digitalisasi di indonesia. Lewat <i>platform</i> yang akan terus dikembangkan sesuai kemajuan teknologi, NSI akan selalu berusaha untuk bisa menjadi <b>jawaban atas kebutuhan layanan digital kamu.</b> </p>
            {/* FOR HIDDEN */}
            <div className={`${ isAbout ? 'block' : 'hidden' }`}>
              {
                hiddenAbout.map((items, i)=>{
                  return (
                    <p key={i} className='text-white text-justify text-base 2xl:text-xl mt-10'>{ items }</p>
                  )
                })
              }
            </div>
            <button onClick={()=>setIsAbout(!isAbout)} className='mt-5 text-white 2xl:text-lg' data-aos="fade-up" data-aos-duration="700">Read more</button>
          </div>
        </section>


        {/* VISI MISI */}
        <section className='w-full flex flex-col lg:grid lg:grid-cols-2 px-10 py-20'>
          <img data-aos="fade-right" data-aos-duration="1500" data-aos-delay="100" className='justify-self-center md:w-4/5' src="visimisi.svg" alt="visimisi" />
          <div className='flex flex-col justify-center'>
            {/* VISI */}
            <h1 className='text-[#325BAB] font-bold text-[35px] md:text-[45px]' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">VISI</h1>
            <p className='text-justify text-[#707070] text-sm md:text-base 2xl:text-lg' data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">Menjadi salah satu perusahaan konsultan IT dan pengembangan teknologi informasi yang termuka di Indonesia. Dengan fokus pada layanan di bidang teknologi informasi, antara lain: sistem integrasi, manajemen infrastruktur teknologi informasi, dan pengembangan perangkat lunak.</p>
            {/* MISI */}
            <h1 className='text-[#325BAB] font-bold text-[35px] md:text-[45px] mt-10' data-aos="fade-up" data-aos-duration="950" data-aos-delay="150">MISI</h1>
            <p className='text-justify text-[#707070] text-sm md:text-base 2xl:text-lg' data-aos="fade-up" data-aos-duration="900" data-aos-delay="200">Menyediakan layanan sistem integrasi infrastruktur teknologi informasi meliputi implementasi infrastruktur teknologi informasi maupun pengembangan perangkat lunak dengan fokus pada solusi yang inovatif dan kreatif untuk memenuhi kebutuhan pelanggan.</p>
            <p className='text-justify text-[#707070] mt-5 text-sm md:text-base 2xl:text-lg' data-aos="fade-up" data-aos-duration="850" data-aos-delay="250">Melayani jasa konsultasi bidang manajemen teknologi informasi sehingga meningkatkan efektivitas, efisiensi, dan produktivitas infrastruktur TI yang dimiliki oleh pelanggan.</p>
          </div>
        </section>


        {/* Product */}
        <section className='w-full py-20 flex justify-center items-center bg-[#2EB67D] px-5 lg:px-16 2xl:px-32'>
          <div className='w-full flex flex-col items-center'>
            <h1 className='font-bold text-white text-lg lg:text-3xl 2xl:text-[40px] text-center'>Kami membangun layanan untuk membantumu memasuki keamanan di era digital yang lebih baik</h1>
            <div className='flex items-end justify-center my-20'>
              <img className='h-44 sm:h-52 lg:h-[400px] 2xl:h-[450px]' src="hp.webp" alt="product" />
              <img className='h-32 sm:h-44 lg:h-[350px] 2xl:h-[400px]' src="lepi.webp" alt="product" />
            </div>
            <p className='text-white text-justify text-sm lg:text-xl'><b>Patrolin</b> merupakan produk layanan digital untuk para petugas keamanan berbasis mobile dan desktop pertama di indonesia. Patrolin ingin tumbuh bersama dengan para perusahaan lain dalam menjaga kondusifitas dan keamanan, Kami ada untuk menyebarkan good vibes dan memberikan semangat dalam memulai langkahmu mewujudkan keamanan yang lebih baik</p>
            <button className='text-[#2EB67D] bg-white h-10 font-bold mt-10 px-5 rounded-full'>Lihat detail layanan</button>
          </div>
        </section>


        {/* Direksi */}
        <section className='w-full flex flex-col justify-center items-center my-32 px-5 lg:px-16 2xl:px-32'>
          <div className='w-[90%]'>
            <h1 className='font-bold text-[#325BAB] text-3xl sm:text-[35px]'>Pimpinan Perusahaan</h1>
            <h1 className='font-bold text-black text-3xl sm:text-[35px]'>Board of Directors</h1>
          </div>
          <div id='direksi' className='mt-10 w-[90%] rounded-3xl p-10'>
            {/* PICTURE */}
            <div className='flex gap-10 justify-center items-center flex-col sm:flex-row sm:items-center sm:justify-start'>
              <div className='bg-[#2EB67D] rounded-xl px-5 w-fit'>
                <img src="ceo.png" alt="ceo" />
              </div>
              {/* NAME */}
              <div className='font-bold text-base sm:text-xl lg:text-3xl'>
                <h1 className='text-black'>Muhammad LUTHFI KIRANSYAH</h1>
                <h2 className='text-[#727272]'>Chief Executive Officer</h2>
              </div>
            </div>
            {/* DESC */}
              <p className='text-black text-[13px] sm:text-base lg:text-2xl text-justify font-normal mt-5'>
              Chief Executive Officer NSI ini dikenal sebagai leader yang membangun team berdasarkan strength-nya masing-masing. karirnya dimulai sebagai Tenaga IT dengan spesialisasi keamanan siber. kini ia membangun dan memimpinn PT Nusantara Siber Integrasi secara optimis dengan meletakan landasan transformasi layanan dan budaya kerja modern di NSI
              </p>
          </div>
        </section>
        <FooterComponent />
      </div>
    </div>
  )
}
