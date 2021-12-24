import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LogoKMTETI from '../assets/LogoKMTETI.png';
import LogoMagatrika from '../assets/LogoMagatrika.png';
import { faFacebookSquare, faInstagramSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';


export default function Footer(){
    return (
        <footer className=" bg-white">
            <div className="container mx-auto px-6 py-2 text-left">
                <div className="flex flex-wrap justify-between items-start">
                <div className=" items-start justify-start">
                    <h1 className=" text-2xl font-bold">NEVER LOGOUT</h1>
                </div>
                <div>
                    <p>Quick Links</p>
                </div>
                <div className=' list-none align-middle items-center'>
                
                    <p>Kunjungi Akun:</p>
                    <li className='flex items-center'>
                        <FontAwesomeIcon icon={faInstagramSquare} size='2x' className=' mx-2'></FontAwesomeIcon>
                        <a className='mt-2' href='https://www.instagram.com/karuniaperjuangan'>
                            Akun Instagram
                        </a>
                    </li>
                    <li className='flex items-center'>
                    <FontAwesomeIcon icon={faFacebookSquare} size='2x' className=' mx-2'></FontAwesomeIcon>
                        <a className='mt-2' href='https://www.facebook.com/karuniaperjuangan'>
                            Akun Facebook
                        </a>
                    </li>
                    <li className='flex items-center'>
                        <FontAwesomeIcon icon={faLinkedin} size='2x' className=' mx-2'></FontAwesomeIcon>
                        <a className='mt-2' href='https://www.linkedin.com/in/karunia-perjuangan-620420175/'>
                            Akun Linkedin
                        </a>
                    </li>

                </div>
                
                </div>
                <div className=" w-full">
                    <p className="text-gray-800 text-sm text-center">All rights reserved.</p>
                </div>
            </div>
            </footer>
    );
}