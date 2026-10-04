import { useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";
import Apps from "../Apps/Apps";


const Home = () => {
    const apps = useLoaderData()
    console.log(apps);
    return (
        <div>
           <Banner></Banner>
            <Apps apps={apps}></Apps>
        </div>
    );
};

export default Home;