import { useLoaderData, useParams } from "react-router";
import { GoDownload } from "react-icons/go";
import { FaStar } from "react-icons/fa6";
import { MdOutlineReviews } from "react-icons/md";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import { useState } from "react";
import { addApp, getApp } from "../../utils/LocalStorage";



const AppDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const appId = parseInt(id);

    const details = data.find((ply) => ply.id === appId);

    const rechart = details.ratings;

    const installedApps = getApp()

    const alreadyInstalled = installedApps.find(
        app => app.id === details.id
    )
    const [toggle, setToggle] = useState(alreadyInstalled)


    // const navigate = useNavigate()
    const handleInstall = () => {

        const addedApp = addApp(details)
        if (addedApp) {
            alert('Installed Done')
            setToggle(true)
            // navigate(`/installation/${id}`)
            return
        }
        else {
            alert('This app already installed')
            return
        }


    }

    return (
        <>
            <div className="max-w-355 mx-auto my-10">
                <div className="flex gap-10">
                    <div>
                        <img
                            className="rounded-md w-75"
                            src={details.image}
                            alt=""
                        />
                    </div>

                    <div className="flex-1">
                        <h1 className="font-bold text-2xl">
                            {details.title}: {details.companyName}
                        </h1>

                        <p className="text-gray-600 mb-4">
                            Developed By{" "}
                            <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">
                                Productive.io
                            </span>
                        </p>

                        <hr className="text-gray-400 w-full" />

                        <div className="flex gap-8 my-5">
                            <div>
                                <GoDownload className="text-4xl stroke-1" />

                                <p className="text-gray-600">
                                    Downloads
                                </p>

                                <strong className="font-extrabold text-2xl">
                                    {details.downloads}
                                </strong>
                            </div>

                            <div>
                                <FaStar className="text-4xl stroke-1" />

                                <p className="text-gray-600">
                                    Average Ratings
                                </p>

                                <strong className="font-extrabold text-2xl">
                                    {details.ratingAvg}
                                </strong>
                            </div>

                            <div>
                                <MdOutlineReviews className="text-4xl stroke-1" />

                                <p className="text-gray-600">
                                    Total Reviews
                                </p>

                                <strong className="font-extrabold text-2xl">
                                    {details.reviews}
                                </strong>
                            </div>
                        </div>
                        <button
                            onClick={() => {

                                handleInstall(details.id)
                            }}
                            className="bg-[#00D390] text-white
                    font-semibold py-2 px-6 rounded-md">
                            {
                                toggle ? `Installed` : `Install Now (${details.size} MB)`
                            }
                        </button>
                    </div>
                </div>
                <hr className="mt-10 text-gray-400" />





                <BarChart
                    style={{ width: '100%', maxWidth: 1000, maxHeight: '70vh', aspectRatio: 1.618 }}
                    responsive
                    data={rechart}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >

                    <CartesianGrid stroke="#94a3b8" strokeDasharray="5 5" strokeOpacity={0.5} />
                    <XAxis
                        dataKey="name"
                        stroke="#e11d48"

                    />

                    <YAxis
                        stroke="#e11d48"
                        strokeWidth={2}
                    />

                    <Tooltip defaultIndex={2} />
                    <Bar
                        dataKey="count"
                        fill="#0ea5e9"
                        fillOpacity={0.85}
                        stroke="#0369a1"
                        strokeWidth={2}
                        radius={4}
                        barSize={30}
                    />
                </BarChart>
                <hr className="text-gray-400 my-10" />
                <div>
                    <p className="font-bold mb-8">
                        Description
                    </p>
                    <p>
                        {details.description}
                    </p>
                </div>
            </div>


        </>

    );
};

export default AppDetails;