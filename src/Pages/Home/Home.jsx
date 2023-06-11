
import About from "./About";
import Choose from "./Choose";
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
            <Choose />
            <PopularInstructor />
            <Contact />
        </>
    );
};

export default Home;