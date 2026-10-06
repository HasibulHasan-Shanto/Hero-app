
// import Apps from "../Apps/Apps";

import { Link } from "react-router";
import Application from "../Application/Application";


const Applications = ({ apps }) => {
    // console.log(apps);
    const eightApps = apps.slice(0, 8)
    // console.log(eightApps);

    // const handleClick = (ap) => {
    //     console.log('this is app details', ap);
    // }
    return (

            <div>
                <div className="text-center my-10">
                    <h1 className="font-bold text-3xl">
                        Trading Apps
                    </h1>
                    <p className="text-gray-600">
                        Explore All Trading App on the Market Develop by us
                    </p>
                </div>



                <div className="grid grid-cols-4 gap-5">
                    {
                        eightApps.map(ap => <Application
                            ap={ap}
                            key={ap.id}></Application>)
                    }
                </div>
                <Link to='/apps'>
                    <button className="flex items-center gap-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-2 px-6 rounded-md text-white m-auto my-10 font-semibold">
                        Show all
                    </button>
                </Link>
            </div>

    );
};

export default Applications;
