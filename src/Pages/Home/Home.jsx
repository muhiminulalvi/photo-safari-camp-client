
import About from "./About";
import Contact from "./Contact";
import PopularClass from "./PopularClass";
import PopularInstructor from "./PopularInstructor";
import Slider from "./Slider";


const Home = () => {
    
    return (
        <>
            <Slider />
            <About />
            <PopularClass />
            <PopularInstructor />
            <Contact />
        </>
    );
};

export default Home;