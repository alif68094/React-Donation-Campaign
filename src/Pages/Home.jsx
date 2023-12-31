import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Header/Banner/Banner";
import Categories from "../Components/Categories/Categories";


const Home = () => {
    const categories = useLoaderData();
   
    return (
        <div>
            <Banner></Banner>
            <Categories categories={categories}></Categories>
        </div>
    );
};

export default Home;