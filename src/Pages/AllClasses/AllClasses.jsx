
import SectionTitle from "../../Components/Shared/SectionTitle";
import CourseCard from "../Home/CourseCard";
import useClass from "../../hooks/useClass";


const AllClasses = () => {
    // const [classData, setClassData] = useState([])
    const [classData] = useClass()
    const allClass = classData.filter(singleClass => singleClass.status === 'approved')


//   useEffect(() => {
//     fetch("https://photo-safari-camp-server.vercel.app/classes")
//       .then((res) => res.json())
//       .then((data) => {
//         setClassData(data)
//       });
//   }, []);
    return (
        <div className="max-w-[1920px] mx-auto xl:px-28 md:px-10 sm:px-2">
      <SectionTitle heading="Our Classes" subHeading="Browse Your Favourite Course"/>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-between gap-6 pt-3 pb-20 px-4">
        {
            allClass.map(course => <CourseCard key={course._id} course={course}></CourseCard>)
        }
      </div>

    </div>
    );
};

export default AllClasses;