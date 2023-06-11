import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider1 from '../../assets/slider1.jpg';
import Slider2 from '../../assets/slider2.jpg';
import Slider3 from '../../assets/slider3.jpg';

const Slider = () => {
  return (
    <>
      <Carousel
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
      >
        <div className="relative">
          <img
            // src="https://i.ibb.co/kKLggZc/pexels-andy-vu-3244513.jpg"
            src={Slider1}
            alt="Slider 1"
            className="w-full h-[720px]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="bg-black opacity-50 absolute inset-0"></div>
            <h1 className="text-5xl py-4 font-bold text-white z-10">
              Discover the Beauty of Photography
            </h1>
            <p className="text-lg pb-4 text-white z-10">
              Explore the world through your lens
            </p>
            <button className="btn btn-primary font-bold py-3 z-10">Know More</button>
          </div>
        </div>
        <div className="relative">
          <img
            // src="https://i.ibb.co/K9fX4hy/pexels-kelly-2519390.jpg"
            src={Slider2}
            alt="Slider 2"
            className="w-full h-[720px]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="bg-black opacity-50 absolute inset-0"></div>
            <h1 className="text-5xl py-4 font-bold text-white z-10">
              Capture Moments that Last Forever
            </h1>
            <p className="text-lg pb-4 text-white z-10">
              Learn the art of photography from experts
            </p>
            <button className="btn btn-primary font-bold py-3 z-10">Click Here</button>
          </div>
        </div>
        <div className="relative">
          <img
            // src="https://i.ibb.co/swZYjQf/pexels-francesco-ungaro-464327.jpg"
            src={Slider3}
            alt="Slider 3"
            className="w-full h-[720px]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="bg-black opacity-50 absolute inset-0"></div>
            <h1 className="text-5xl py-4 font-bold text-white z-10">
              Unleash Your Creativity Behind the Lens
            </h1>
            <p className="text-lg pb-4 text-white z-10">
              Discover your passion for photography
            </p>
            <button className="btn btn-primary font-bold py-3 z-10">Get Started</button>
          </div>
        </div>
        {/* Add more slides as needed */}
      </Carousel>
    </>
  );
};

export default Slider;
