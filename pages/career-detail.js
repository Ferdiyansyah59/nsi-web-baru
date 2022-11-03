import FooterComponent from '../components/FooterComponent';
import Nav from '../components/Nav';

const data = [
  {
    desc: [
      'Membuat segala jenis desain, digital desain (Facebook, Instagram, Youtube',
      'Membuat desain cetak (Katalog, Brosur, Banner, Company Profile)',
      'Sistem Kerja WFH atau WFA Selama 3 Bulan',
    ],
    requirement: [
      'Pria/Wanita minimal 17 Tahun',
      'Mampu menggunakan software design (Adobe Photoshop, Canva, Figma dll)',
      'Memiliki taste design yang baik',
      'Mampu bekerja secara target',
      'Update dengan berita IT terkini',
    ],
    benefit: [
      'Uang Transport dan makan',
      'Sertifikat Magang',
      'Rekomendasi Linkedin',
      'Relasi dan pengalaman bekerja',
    ],
  },
];

function CareerDetail() {
  return (
    <div className='overflow-hidden'>
      <Nav />
      <section className='w-full h-full flex flex-col justify-center items-center my-32'>
        <h1 className='text-[#2EB67D] text-xl sm:text-2xl font-bold'>
          Graphic Design-<span className='font-normal italic'>Internship</span>
        </h1>
        <div className='px-10 text-sm sm:text-base'>
          <div className='mt-10'>
            <h1 className='text-[#2EB67D] font-semibold'>
              Deskripsi Pekerjaan
            </h1>
            <ol className='list-decimal'>
              {data[0].desc.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ol>
          </div>
          <div className='mt-3'>
            <h1 className='text-[#2EB67D] font-semibold'>Requirement</h1>
            <ol className='list-decimal'>
              {data[0].requirement.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ol>
          </div>
          <div className='mt-3'>
            <h1 className='text-[#2EB67D] font-semibold'>Benefit</h1>
            <ol className='list-decimal'>
              {data[0].benefit.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ol>
          </div>
        </div>
      </section>
      <section className='lg:absolute xl:relative bottom-0'>
        <FooterComponent />
      </section>
    </div>
  );
}

export default CareerDetail;
