import  { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const useInstructor = () => {
    const {user} = useContext(AuthContext)
    const { data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/users/instructor/${user?.email}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access-token")}`,
                  }
            });
            console.log('Instructor = ', res)
            return res.data.instructor;
        }
    })
    return [isInstructor, isInstructorLoading]

};

export default useInstructor;