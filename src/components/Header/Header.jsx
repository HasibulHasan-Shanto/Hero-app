import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png'
import { FaGithub } from "react-icons/fa";

const Header = () => {
    return (
        <div className="bg-red-500 p-5">
            <div className="max-w-355 mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img className='w-10' src={logo} alt="" />
                        <Link>
                            <h1 className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">
                                Hero.IO
                            </h1>
                        </Link>
                    </div>
                    <div>
                        <ul className='flex items-center gap-6 text-gray-700'>
                            <li>
                                <NavLink to='/'>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/apps'>
                                    Apps
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/installation'>
                                    Installation
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <a target='blank' href="https://github.com/HasibulHasan-Shanto" className='flex items-center gap-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-2 px-4 rounded-md text-white'>
                            <FaGithub />
                            <button className=''>
                                Contribute
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;