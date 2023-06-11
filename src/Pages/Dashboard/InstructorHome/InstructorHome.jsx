import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const InstructorHome = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="max-w-[1200px] mx-auto xl:px-32 md:px-10 sm:px-2 space-y-6">
            <h2 className="text-5xl font-bold text-secondary">Welcome To The Instructor Dashboard</h2>
            <div className="grid grid-cols-2 items-center justify-between gap-7">
                <div>
                    <img src={user?.photoURL} alt="" className="rounded-full" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold">Name: {user?.displayName}</h2>
                    <p className="text-xl font-bold">Email: {user?.email}</p>
                </div>
            </div>
        </div>
    );
};

export default InstructorHome;