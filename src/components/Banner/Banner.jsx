import { FaGooglePlay } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";
import banner from '../../assets/hero.png'
const Banner = () => {
    return (
        <div className="text-center">
            <h1 className="text-7xl font-bold">
                We Build <br /><span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">Productive</span> Apps
            </h1>
            <p className="text-gray-600 py-5">
                At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>
            <div className="flex justify-center gap-3">
                <div className="flex items-center gap-2 bg-white py-2 px-3 rounded-sm border border-gray-400 font-bold">
                    <FaGooglePlay></FaGooglePlay>
                    <button>
                        Google Play
                    </button>
                </div>
                <div className="flex items-center gap-2 bg-white py-2 px-3 rounded-sm border border-gray-400 font-bold">
                    <FaAppStore />
                    <button>
                        App Store
                    </button>
                </div>
            </div>
            <img className="m-auto mt-10" src={banner} alt="" />
            <div className='gap-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] rounded-md text-white font-bold py-10'>
                <h2 className="text-4xl mb-4">
                    Trusted by Millions, Built for You
                </h2>
                <div className="flex justify-center gap-25">
                    <div className="space-y-4">
                        <p className="font-medium text-sm">
                            Total Downloads
                        </p>
                        <h2 className="font-extrabold text-6xl">
                            29.6M
                        </h2>
                        <p className="font-medium text-sm">
                            21% more than last month
                        </p>
                    </div>
                    <div className="space-y-4">
                        <p className="font-medium text-sm">
                            Total Downloads
                        </p>
                        <h2 className="font-extrabold text-6xl">
                            29.6M
                        </h2>
                        <p className="font-medium text-sm">
                            21% more than last month
                        </p>
                    </div>
                    <div className="space-y-4">
                        <p className="font-medium text-sm">
                            Total Downloads
                        </p>
                        <h2 className="font-extrabold text-6xl">
                            29.6M
                        </h2>
                        <p className="font-medium text-sm">
                            21% more than last month
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;