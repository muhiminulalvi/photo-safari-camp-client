import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useAdmin = () => {
    const {user} = useContext(AuthContext)

    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axios.get(`https://photo-safari-camp-server.vercel.app/users/admin/${user?.email}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access-token")}`,
                  }
            });
            console.log('Admin = ', res)
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]

    
};

export default useAdmin;