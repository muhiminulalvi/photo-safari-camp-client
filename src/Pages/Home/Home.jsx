import SectionTitle from "../../Components/Shared/SectionTitle";
import About from "./About";
import PopularClass from "./PopularClass";
import Slider from "./Slider";


const Home = () => {
    return (
        <>
            <Slider />
            <About />
            <SectionTitle heading="Popular Classes" subHeading="Browse Your Favourite Course"/>
            <PopularClass />
        </>
    );
};

export default Home;