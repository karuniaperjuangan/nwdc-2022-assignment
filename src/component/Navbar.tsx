import { Link } from 'react-router-dom';
import Logo from '../assets/LogoNesco.png';
import React, { useRef, useEffect, useLayoutEffect, useCallback } from 'react';

export default function Navbar() {

  const [isSticky, setIsSticky] = React.useState(true);
  const [isOpened, setIsOpened] = React.useState(false);

const onScroll = () => {
      if(window.scrollY> 30){
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }}


  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  });


  return (
    <div className={`fixed top-0  inline-block  w-full items-stretch`}>
    <nav className={` top-0 w-full transition z-10 text-white  ${isSticky ? "bg-gradient-to-r from-nwdc-bg-purple to-nwdc-bg-blue shadow-2xl " : " absolute top-0 bg-transparent"} `}>
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <div className=" inline-flex align-middle h-16 items-center">
          
          <h1 className=" m-4 text-base lg:text-4xl  font-extrabold text-white hover:text-blue-200">Tugas NWDC 2022</h1>


        </div>
        <ul className=' hidden md:inline-flex justify-around list-none'>
          <li>
            <Link to="/" className='px-4 hover:text-blue-200'>Profil</Link>
          </li>
          <li>
            <Link to="about" className='px-4 hover:text-blue-200'>NWDC</Link>
          </li>
          <li>
            <Link to="daftar" className='px-4 hover:text-blue-200'>Tech Stack</Link>
          </li>
        </ul>
        <div className=' md:hidden' onClick={() => setIsOpened(!isOpened)}>
        <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" width={3} />
            </svg>
        </div>
        
      </div>
    </nav>
    {isOpened && (<div className=' md:hidden '>
          <ul className=' rounded-lg transition-all bg-nwdc-bg-blue shadow-md fixed right-0 top-20 justify-around list-none text-white z-10'>
          <li className=' m-8'>
            <Link to="/" className='px-4 hover:text-blue-200'>Profil</Link>
          </li>
          <li className=' m-8'>
            <Link to="about" className='px-4 hover:text-blue-200'>NWDC</Link>
          </li>
          <li className=' m-8'>
            <Link to="daftar" className='px-4 hover:text-blue-200'>Tech Stack</Link>
          </li>
        </ul>
        </div>)}
    </div>
  );
}