import { useLoaderData } from "react-router";
import Appli from "../appli/appli";


const Apps = () => {
    const apps = useLoaderData()
    return (
        <div className="grid grid-cols-4 gap-5">
            {
                apps.map(ap => <Appli
                    ap={ap}
                    key={ap.id}></Appli>)
            }
        </div>
    );
};

export default Apps;