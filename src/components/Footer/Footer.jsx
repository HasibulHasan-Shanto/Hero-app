import { Link } from 'react-router';
import logo from '../../assets/logo.png'
import { TbXboxXFilled } from "react-icons/tb";
import { FaLinkedin, FaFacebook } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-[#031427] text-white py-10 px-6 font-sans">
            <div className="max-w-355 mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end pb-6 border-b border-white/10 gap-6 sm:gap-0">

                    <div className="flex items-center gap-3">
                        <img className='w-10' src={logo} alt="" />
                        <Link>
                            <h1 className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">
                                Hero.IO
                            </h1>
                        </Link>
                    </div>

                    <div className="flex flex-col items-center sm:items-end gap-2.5">
                        <span className="text-sm font-medium text-gray-200">Social Links</span>
                        <div className="flex items-center gap-3">

                            <a href="/" aria-label="X" className="text-white hover:opacity-80 transition-opacity">
                                <TbXboxXFilled />
                            </a>
                            <a
                                target='blank'
                                href="www.linkedin.com/in/thehasibulhasanshanto" aria-label="LinkedIn" className="text-white hover:opacity-80 transition-opacity">
                                <FaLinkedin />
                            </a>

                            <a
                                target='blank'
                                href="https://www.facebook.com/thehasibulhasanshanto" aria-label="Facebook" className="text-white hover:opacity-80 transition-opacity">
                                <FaFacebook />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="mt-6 text-center">
                    <p className="text-xs sm:text-sm text-gray-300">Copyright © 2025 - All right reserved</p>
                </div>
            </div>
        </footer >
    );
};

export default Footer;