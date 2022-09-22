import { SiInstagram , SiTwitter, SiLinkedin, SiFacebook, SiWhatsapp } from 'react-icons/si'
import Footer from './FooterComponent'
import Link from 'next/link'
function FooterComponent() {
    return ( 
        <footer className='w-screen h-full'>
          {/* TOP */}
            <div className='w-full h-52 bg-[#2EB67D] px-5 sm:px-10 lg:px-16 2xl:px-32 grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-[250px_1fr] lg:grid-cols-[350px_1fr]'>
              {/* LOGO */}
              <img className='w-48 sm:w-60 lg:w-80' src="foot-logo.webp" alt="logo" />
              {/*  */}
              <div className='justify-self-center self-center sm:justify-self-end'>
                {/* MENU */}
                <div className='flex gap-5 text-white text-sm sm:text-base mb-2'>
                  <Link href="/" >Profil</Link>
                  <Link href="/" >Tata Kelola</Link>
                  <Link href="/" >Laporan</Link>
                  <Link href="/" >Kontak</Link>
                </div>
                {/* MEDIA SOCIAL */}
                <div className='flex gap-3'>
                  <button type='button' onClick={() => window.open('https://instagram.com/nsicompany/', '_blank')}>
                    <div className='bg-[#57D4A0] h-10 w-10  sm:h-12 sm:w-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600'>
                      <SiInstagram className='text-white text-xl sm:text-2xl' />
                    </div>
                  </button>
                  <Link href="/">
                    <div className='bg-[#57D4A0] h-10 w-10  sm:h-12 sm:w-12 p-3 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600'>
                      <SiTwitter className='text-white text-xl sm:text-2xl' />
                    </div>
                  </Link>
                  <Link href="/">
                    <div className='bg-[#57D4A0] h-10 w-10  sm:h-12 sm:w-12 p-3 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600'>
                      <SiLinkedin className='text-white text-xl sm:text-2xl' />
                    </div>
                  </Link>
                  <Link href="/">
                    <div className='bg-[#57D4A0] h-10 w-10  sm:h-12 sm:w-12 p-3 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600'>
                      <SiFacebook className='text-white text-xl sm:text-2xl' />
                    </div>
                  </Link>
                  <Link href="/">
                    <div className='bg-[#57D4A0] h-10 w-10 sm:h-12 sm:w-12 p-3 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600'>
                      <SiWhatsapp className='text-white sm:text-2xl' />
                    </div>
                  </Link>
                  
                </div>
              </div>
            </div>
            {/* MIDDLE */}
            <div className='w-full py-4 bg-[#27A36F] flex justify-center items-center px-5 sm:px-10'>
              <p className='font-medium text-white text-xs sm:text-base text-center'>Terima kasih sudah berkunjung! kami akan terus meningkatkan kenyamanan laman ini baik di ponsel pintar dan desktop. </p>
            </div>
            {/* LOWER */}
            <div className='w-full h-24 bg-[#808080] flex justify-center items-center'>
              <p className='font-medium text-white text-sm sm:text-base'>©PT Nusantara Siber Integrasi 2022</p>
            </div>
        </footer>
     );
}

export default FooterComponent;