import { GoDownload } from "react-icons/go";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";
const Application = ({ ap }) => {

    return (
        <Link to={`/appDetails/${ap.id}`}>
            <div
                className="border border-gray-200 p-5 bg-white shadow-2xl rounded-md">
                <img className="rounded-md h-64 w-full" src={ap.image} alt="" />
                <h1 className="font-bold text-xl my-4">
                    {ap.title}: {ap.companyName}
                </h1>
                <div className="flex justify-between">
                    <div className="flex items-center gap-2 bg-gray-200 py-2 px-3 rounded-md text-[#00D390] font-semibold">
                        <GoDownload />
                        <p>
                            {
                                ap.downloads
                            }
                        </p>
                    </div>
                    <div className="flex items-center gap-2 bg-[#FFF0E1] py-2 px-3 rounded-md text-[#FF8811] font-semibold">
                        <FaStar />
                        <p>
                            {
                                ap.downloads
                            }
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Application;