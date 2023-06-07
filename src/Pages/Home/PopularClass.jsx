import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";



const PopularClass = () => {
  const [popularClass, setPopularClass] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        const popularClasses = data
          .sort((a, b) => b.studentsEnrolled - a.studentsEnrolled)
          .slice(0, 6);
        setPopularClass(popularClasses);
      });
  }, []);

  return (
    <div className="max-w-[1920px] mx-auto xl:px-28 md:px-10 sm:px-2 overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-between gap-6 pt-3 pb-16">
        {
            popularClass.map(course => <CourseCard key={course._id} course={course}></CourseCard>)
        }
      </div>

    </div>
  );
};

export default PopularClass;
