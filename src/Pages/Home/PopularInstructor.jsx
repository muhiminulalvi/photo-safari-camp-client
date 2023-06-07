
import { useEffect, useState } from 'react';
import SectionTitle from '../../Components/Shared/SectionTitle';
import InstructorCard from './InstructorCard';

const PopularInstructor = () => {
    const [popularInstructor, setPopularInstructor] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
        .then((res) => res.json())
      .then((data) => {

        const popularInstructors = data.sort((a, b) => b.studentsEnrolled - a.studentsEnrolled).slice(0, 6);
        // console.log(popularInstructors);
        setPopularInstructor(popularInstructors);
      });
    },[])
    return (
        <div className='bg-yellow-50 max-w-[1920px] mx-auto xl:px-28 md:px-10 sm:px-2 px-4'>
            <SectionTitle heading="Popular Instructors" subHeading="See our top instructors"/>
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-between gap-6 pt-3 pb-20 px-4">
        {
            popularInstructor.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
        }
      </div>
        </div>
    );
};

export default PopularInstructor;