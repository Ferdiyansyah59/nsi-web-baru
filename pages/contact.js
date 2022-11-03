import Nav from '../components/Nav';
import { FiPhoneCall, FiMail } from 'react-icons/fi';
import FooterComponent from '../components/FooterComponent';

function Contact() {
  return (
    <div className=''>
      <Nav />
      <section className='bg-[#2EB67D] w-full h-[90vh] sm:h-[70vh] lg:h-[50vh] xl:h-[90vh] flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-around'>
        <div>
          <h1 className='font-bold text-[45px] text-white'>Butuh Bantuan?</h1>
          <p className='text-white text-base'>
            Kami senantiasa membantu setiap permasalahan <br></br> yang kamu
            hadapi
          </p>
        </div>
        <img
          className='h-72'
          src='/contact.webp'
          alt='contact'
        />
      </section>
      <section className='flex flex-col sm:flex-row items-center justify-center lg:justify-between my-20'>
        {/* Left */}
        <div className='flex flex-col items-center sm:items-start sm:pl-10'>
          <img
            src='/logo.webp'
            alt='Logo'
          />
          <p className='text-[#686868] mt-5 w-4/5'>
            Terima kasih sudah berkunjung! Jika kamu memiliki pertanyaan seputar
            PT Nusantara Siber Integrasi, hubungi kami melalui kontak berikut
            ini
          </p>
        </div>
        {/* Right */}
        <div className='w-full lg:w-1/2 px-10 mt-10 sm:mt-0'>
          <h1 className='font-bold'>Kantor PT Nusantara Siber Integrasi</h1>
          <p className='text-[#686868]'>
            Maldives Garden Blok B2, Bekasi, Jawa Barat 17510
          </p>
          {/* Contact */}
          <div className='mt-5'>
            {/* Phone */}
            <div className='flex items-center gap-4'>
              <div className='h-16 w-16 bg-[#2EB67D] rounded-full flex justify-center items-center text-white'>
                <FiPhoneCall />
              </div>
              <div>
                <h3>Telepon</h3>
                <h1 className='font-bold'>(+62 8571-4123-7540)</h1>
              </div>
            </div>
            {/* Mail */}
            <div className='flex mt-4 items-center gap-4'>
              <div className='h-16 w-16 bg-[#325BAB] rounded-full flex justify-center items-center text-white'>
                <FiMail />
              </div>
              <div>
                <h3>Telepon</h3>
                <h1 className='font-bold'>(+62 8571-4123-7540)</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterComponent />
    </div>
  );
}

export default Contact;
