
import { GoDownload } from "react-icons/go";
import { FaStar } from "react-icons/fa6";
import { useState } from "react";
import { getApp, removeApp } from "../../utils/LocalStorage";

const Installation = () => {
    const [install, setInstall] = useState(getApp)


    const handleRemove = (id) => {
        const remove = install.filter(ap => ap.id !== id)
        setInstall(remove)
        removeApp(id)
    }

    return (
        <div className="max-w-355 mx-auto my-10">
            <div className="text-center">
                <h1 className="text-4xl font-bold">
                    Your Installed Apps
                </h1>
                <p className="text-gray-600">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>
            <div>
                <p className="font-bold text-2xl mb-4">
                    {install.length === 0 ? '' : `${install.length} Apps Found`}
                </p>
                <div className=" space-y-3">
                    {
                        install.map(app => (
                            <div
                                key={app.id}
                                className="bg-white border border-gray-200 shadow-md p-4 flex justify-between items-center gap-4 rounded-md"
                            >
                                <div className="flex gap-4">
                                    <img className="w-25 rounded-md" src={app.image} alt="" />
                                    <div>
                                        <h3 className="text-2xl font-bold">
                                            {app.title}: {app.companyName}
                                        </h3>
                                        <div className="flex gap-3 my-4">
                                            <p className="flex items-center gap-1 text-green-500">
                                                <GoDownload />
                                                {app.downloads}
                                            </p>
                                            <p className="flex items-center gap-1 text-[#FF8811]">
                                                <FaStar />
                                                {app.ratingAvg}
                                            </p>
                                            <p className="text-gray-600">
                                                {app.size} MB
                                            </p>

                                        </div>
                                    </div>
                                </div>
                                <div >
                                    <button
                                        onClick={() => handleRemove(app.id)}
                                        className="text-white font-bold bg-[#00D390] py-3 px-6 rounded-md">
                                        Uninstall
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div>
                    {
                        install.length === 0 && (
                            <div className="bg-white border border-gray-200 shadow-md rounded-xl p-10 text-center my-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                    No Apps Installed Yet
                                </h2>
                                <p className="text-gray-500">
                                    You haven't installed any apps yet.
                                </p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Installation;