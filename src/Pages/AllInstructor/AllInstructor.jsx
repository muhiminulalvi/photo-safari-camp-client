import { useState } from "react";
import { useEffect } from "react";
import SectionTitle from "../../Components/Shared/SectionTitle";
import InstructorCard from "../Home/InstructorCard";


const AllInstructor = () => {
    const [allInstructor, setAllInstructor] = useState([])
    useEffect(() => {
        fetch('https://photo-safari-camp-server.vercel.app/instructors')
        .then((res) => res.json())
      .then((data) => {

        
        // console.log(popularInstructors);
        setAllInstructor(data);
      });
    },[])
    return (
        <div className=' max-w-[1920px] mx-auto xl:px-28 md:px-10 sm:px-2 px-4'>
            <SectionTitle heading="Our Instructors" subHeading="See all of our instructors"/>
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-between gap-6 pt-3 pb-20 px-4">
        {
            allInstructor.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
        }
      </div>
        </div>
    );
};

export default AllInstructor;