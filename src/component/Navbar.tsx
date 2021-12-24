import { Link } from 'react-router-dom';
import Logo from '../assets/LogoNesco.png';
import React, { useRef, useEffect, useLayoutEffect, useCallback } from 'react';

export default function Navbar() {

  const [isSticky, setIsSticky] = React.useState(true);

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

    <nav className={`top-0 w-full transition z-10 text-white  ${isSticky ? "fixed bg-gradient-to-r from-nwdc-bg-purple to-nwdc-bg-blue shadow-2xl " : " absolute top-0 bg-transparent"} `}>
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <div className=" inline-flex align-middle h-16 items-center">
          
          <h1 className=" m-4 text-base lg:text-4xl  font-extrabold text-white hover:text-blue-200">Tugas NWDC 2022</h1>


        </div>
        <ul className=' inline-flex justify-around list-none'>
          <li>
            <Link to="/" className='px-4 hover:text-blue-200'>Profil</Link>
          </li>
          <li>
            <Link to="about" className='px-4 hover:text-blue-200'>About</Link>
          </li>
          <li>
            <Link to="daftar" className='px-4 hover:text-blue-200'>Daftar</Link>
          </li>
        </ul>

      </div>

    </nav>
  );
}