import { useLoaderData } from "react-router";
import Appli from "../appli/appli";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";


const Apps = () => {
    const apps = useLoaderData()
    const [search, setSearch] = useState('')

    const filteredApps = apps.filter((app) =>
        app.title.toLowerCase().includes(search.toLowerCase()) || app.companyName.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div className="max-w-355 mx-auto">
            <div className="text-center my-10">
                <h1 className="font-bold text-4xl">
                    Our All Applications
                </h1>
                <p className="text-gray-600 mt-2">
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>
            </div>
            <div className="flex items-center justify-between mb-5">
                <p className="font-bold text-xl">
                    {
                        `(${filteredApps.length}) Apps Found`
                    }
                </p>

                <div className="relative w-[30%]">
                    <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-gray-500" />

                    <input
                        className="border border-gray-200 pl-10 py-1.5 rounded-md w-full outline-gray-200"
                        type="text"
                        name="text"
                        id="text"
                        placeholder="Search Apps"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>
            <div className="grid grid-cols-4 gap-5">
                {
                    filteredApps.length === 0 ? (
                        <div className="bg-white border border-gray-200 shadow-md rounded-xl p-10 text-center my-6 col-span-4">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                No Apps Found
                            </h2>
                            <p className="text-gray-500">
                                We couldn't find any apps matching your search.
                            </p>
                        </div>
                    ) : (
                        filteredApps.map(ap => (
                            <Appli
                                ap={ap}
                                key={ap.id}
                            />
                        ))
                    )
                }
            </div>
        </div>
    );
};

export default Apps;