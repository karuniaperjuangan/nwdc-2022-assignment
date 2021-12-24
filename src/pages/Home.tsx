import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Profil from '../assets/ProfilJuang.jpg';

const Fade = require('react-reveal/Fade');


export default function Home() {

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const { height, width } = windowDimensions;
  function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    },);

  
  return <header className="min-h-screen bg-gradient-to-b from-nwdc-bg-purple via-nwdc-bg-purple to-nwdc-bg-blue justify-start">
    <div className='relative'>
      <div className={`${width/height<1?" h-32":'h-96'} max-w-full overflow-hidden flex items-center`}>
        <ReactPlayer
          width={'100%'}
          height={'100vw'}
          playing={true}
          muted={true}
          url={"https://www.youtube.com/watch?v=UGH_4VYvz0s"}>
        </ReactPlayer>
      </div>
      <h1 className=' absolute text-2xl md:text-5xl hover:text-red-300 text-white text-center top-1/2 w-full'>
        Karunia Perjuangan
      </h1>
      <div className={` absolute w-full  ${width/height<1?" top-2/3 h-1/3":'top-64 h-32'} bg-gradient-to-b from-nwdc-transparent to-nwdc-bg-purple`}>

      </div>
    </div>
<div className=' flex flex-col align-middle items-center'>
<div className=' h-64'></div>
    <Fade up>
      <div className=' flex object-contain mx-28 lg:max-w-6xl align-middle items-center'>
        <img src={Profil} className='rounded-full flex-none aspect-square h-32' alt="logo" />
        <p className=' text-white md:mx-16 my-16 text-justify px-12'>
          Seorang mahasiswa UGM yang gemar mengeksplor berbagai bidang, termasuk pengembangan Web. Memiliki prinsip bahwa segala hal yang dilakukan harus bermanfaat bagi diri sendiri dan juga orang lain. Bercita-cita untuk berkarir di bidang AI, khususnya NLP, namun untuk saat ini lebih banyak bekerja di bidang pengembangan Mobile dan Web.
        </p>

      </div>
    </Fade>
    <div className=' h-64'></div>
    <Fade right>
    <div className=" grid grid-cols-3 gap-16 px-3 md:px-16 flex-wrap justify-around items-start w-full">
      <div className=''>
        <h2 className=' text-white md:text-2xl'>Pendidikan</h2>
        <p className=' text-justify w-auto text-white'>Saat ini menempuh pendidikan di Teknologi Informasi UGM sejak 2020. Pernah mengenyam pendidikan di SMP N 8 Yogyakarta dan SMA N 1 Yogyakarta yang telah dikenal luas.</p>
      </div>
      <div>
        <h2 className=' text-white md:text-2xl'>Pengalaman</h2>
        <p className=' text-justify w-auto text-white'>Pernah dan sedang mengikuti berbagai kegiatan kepanitiaan dan organisasi, terutama KMTETI, NESCO, dan FindIT. Untuk lebih lengkapnya, bisa dicek di Linkedin</p>
      </div>
      <div>
        <h2 className=' text-white md:text-2xl'>Keahlian</h2>
        <p className=' text-justify w-auto text-white'>Menguasai beberapa bahasa pemrograman, seperti C, C#, Python, Javascript, Dart, dan beberapa frameworknya. Memiliki beberapa keahlian sampingan pula di luar kegiatan pemrograman. </p>
      </div>
    </div>
    </Fade>
    <div className=' h-64'></div>
  </div>  
  </header>
}