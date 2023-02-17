import Link from 'next/link';
import { useEffect, useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useRouter } from 'next/router';

function Nav() {
  let [isOpen, setIsOpen] = useState(false);
  let [navOpen, setNavOpen] = useState(false);
  let [navBg, setNavBg] = useState('lg:bg-transparent');
  // let [mediaDrop, setMediaDrop] = useState(false)
  const { pathname } = useRouter();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let scr = window.scrollY;
      let nav = document.getElementById('nav');
      if (scr >= 50) {
        if (
          pathname === '/media' ||
          pathname === '/contact' ||
          pathname === '/articles'
        ) {
          setNavBg(
            'bg-[#2EB67D] lg:bg-[#2EB67D] shadow-sm shadow-gray-[#41D698]',
          );
        } else {
          setNavBg('bg-white lg:bg-white shadow-sm shadow-gray-300');
        }
      } else {
        setNavBg('lg:bg-transparent');
      }
    });
  }, []);

  const toggleMenu = () => {
    document.getElementById('toggle').classList.toggle('open');
    setNavOpen(!isOpen);
    // if(!isOpen){
    //     document.getElementById("top").classList.add("overflow-hidden")
    // }else{
    //     document.getElementById("top").classList.remove("overflow-hidden")
    // }
    document.getElementById('menu').classList.toggle('hidden');
  };

  const dropMenu = [
    {
      title: 'Rilis Media',
      path: '/media',
    },
    {
      title: 'Galeri',
      path: '/media',
    },
    {
      title: 'Berita Pilihan',
      path: '/media',
    },
  ];

  return (
    <nav
      id='nav'
      className={`noselect flex flex-col lg:py-5 w-full fixed z-20 top-0 left-0 items-center lg:px-16 font-normal ${navBg} lg:bg-transparent lg:py-0 lg:grid lg:grid-cols-[250px_1fr] xl:grid-cols-[400px_1fr] 2xl:px-32 ${
        navOpen
          ? pathname === '/media' ||
            pathname === '/contact' ||
            pathname === '/articles'
            ? 'bg-[#2EB67D]'
            : 'bg-white'
          : ''
      }`}
    >
      {/* HEADER */}
      <div className='grid grid-cols-2 items-center px-4 w-full lg:w-fit lg:px-0'>
        <Link href='/'>
          {pathname === '/media' ||
          pathname === '/contact' ||
          pathname === '/articles' ? (
            <img
              className='h-24 cursor-pointer'
              src='./foot-logo.webp'
              alt='Logo'
            />
          ) : (
            <img
              className='h-14  2xl:h-20 my-5 cursor-pointer'
              src='./logo.webp'
              alt='Logo'
            />
          )}
        </Link>
        <button
          type='button'
          onClick={toggleMenu}
          id='toggle'
          className={`justify-self-end ${
            pathname === '/media' ||
            pathname === '/contact' ||
            pathname === '/articles'
              ? 'toggle-white'
              : 'toggle-menu'
          } mt-1 lg:hidden`}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      {/* MENU */}
      <div
        id='menu'
        className={`${
          navOpen === false ? 'hidden' : 'flex'
        } justify-self-end lg:flex items-start flex-col gap-10 w-4/5 lg:w-full font-semibold mt-5 lg:mt-0 lg:font-normal ${
          pathname === '/media' ||
          pathname === '/contact' ||
          pathname === '/articles'
            ? 'text-white'
            : 'text-[#264789] lg:text-[#8B8B8B]'
        } lg:flex-row lg:justify-end lg:items-center h-screen lg:h-fit `}
      >
        <div className=' hover:text-black lg:border-none'>
          <Link href='/'>Profil</Link>
        </div>
        {/* <div className=' hover:text-black lg:border-none'>
          <Link href='/governance'>Tata Kelola</Link>
        </div>
        <div className=' hover:text-black lg:border-none'>
          <Link href='/report'>Laporan</Link>
        </div> */}
        <div className=' hover:text-black lg:border-none'>
          <Link href='/career'>Karir</Link>
        </div>
        <div
          className={`${
            isOpen ? 'border-none' : ''
          } hover:text-black w-full lg:border-none cursor-pointer relative lg:w-fit`}
        >
          <div
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            onClick={() => setIsOpen(!isOpen)}
            className='grid grid-cols-2 lg:flex gap-2 items-center'
          >
            <p
              className={`${
                pathname === '/media' ||
                pathname === '/contact' ||
                pathname === '/articles'
                  ? 'text-white'
                  : 'text-[#264789] lg:text-[#8B8B8B]'
              }`}
            >
              Media NSI
            </p>
            <RiArrowDropDownLine
              className={`justify-self-end text-3xl ${
                pathname === '/media' ||
                pathname === '/contact' ||
                pathname === '/articles'
                  ? 'text-white'
                  : 'text-[#264789] lg:text-[#8B8B8B]'
              }`}
            />
          </div>
          <div
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className={`${isOpen ? 'basket pt-2' : 'basket hide'} ${
              pathname === '/media' ||
              pathname === '/contact' ||
              pathname === '/articles'
                ? 'bg-[#0b4532]'
                : 'bg-[#2EB67D]'
            } w-full lg:w-32 rounded-lg lg:absolute`}
          >
            {dropMenu.map((item, i) => {
              return (
                <div
                  key={i}
                  className={`${
                    isOpen ? '' : 'hidden'
                  } hover:bg-[#77D6AE] py-2`}
                >
                  <Link href={item.path}>
                    <span className='flex items-center ml-3 gap-2'>
                      <svg
                        width='10'
                        height='10'
                        viewBox='0 0 10 10'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle
                          cx='5'
                          cy='5'
                          r='5'
                          fill='white'
                        />
                      </svg>
                      <p className='font-bold text-white text-xs'>
                        {item.title}
                      </p>
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className=' hover:text-black lg:border-none'>
          <Link href='/contact'>Kontak</Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
