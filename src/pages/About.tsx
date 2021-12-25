import NWDC from '../assets/LogoNL.png';

export default function About(){
    return <header className="min-h-screen block right bg-gradient-to-b w-full  from-nwdc-bg-purple via-nwdc-bg-purple to-nwdc-bg-blue">
    <div className='w-full items-center object-center  justify-items-center px-12'>
    <div className=' h-32'></div>
    <img src={NWDC} alt='' className="h-20 mx-auto">
    </img>
    <div className=' h-12'></div>
    <p className=' text-white text-justify max-w-3xl mx-0 md:mx-auto'>
      Motivasi saya bergabung dengan komunitas NWDC adalah karena masih banyak teknologi web yang masih perlu ditelusuri lebih lanjut secara bersama-sama. Saya juga ingin mencari informasi internship dan proyek yang bisa saya ikuti.
    </p>
    <div className=' h-12'></div>
    <p className=' text-white text-justify max-w-3xl mx-0  md:mx-auto'>
      Ekspektasi saya untuk NWDC adalah tidak vakum seperti periode sebelumnya.
    </p>
    </div>
  </header>
}