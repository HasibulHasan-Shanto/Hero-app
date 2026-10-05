import { useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";
import Applications from "../Applications/Applications";

const Home = () => {
    const apps = useLoaderData()
    // console.log(apps);
    return (
        <div>
           <Banner></Banner>
            <Applications apps={apps}></Applications>
        </div>
    );
};

export default Home;