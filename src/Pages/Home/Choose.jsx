import { FaAngellist, FaGlobe, FaLightbulb } from "react-icons/fa";
import ChooseIMG from "../../assets/Choose.jpg";
import { Slide } from "react-awesome-reveal";
const Choose = () => {
  return (
    <div className="max-w-[1920px] mx-auto xl:px-32 md:px-10 sm:px-2 bg-amber-50 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-3">
        <div>
          <img src={ChooseIMG} alt="" className="w-full rounded-xl h-96" />
        </div>
        <div className="px-4 space-y-6">
          <h1 className="font-bold text-5xl text-error">Why Choose Us?</h1>
          <p className="font-medium text-xl ">
            Choose us for top-quality services and unmatched customer
            satisfaction
          </p>
          <Slide direction="right">
            <div className="grid grid-cols-3 items-center justify-between gap-2">
              <div className="font-bold text-xl bg-error text-white rounded-lg space-y-2 py-6 h-full px-3 ">
                <FaGlobe size={30}></FaGlobe>
                <h2>Diversity Around The Camp</h2>
              </div>
              <div className="font-bold text-xl bg-error text-white rounded-lg space-y-2 py-6 h-full px-3 ">
                <FaAngellist size={30}></FaAngellist>
                <h2>Natural All The Way</h2>
              </div>
              <div className="font-bold text-xl bg-error text-white rounded-lg space-y-2 py-6 h-full px-3 ">
                <FaLightbulb size={30}></FaLightbulb>
                <h2>Experienced and Trustworthy</h2>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Choose;
