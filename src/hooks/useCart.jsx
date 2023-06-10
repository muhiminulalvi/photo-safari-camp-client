import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const useCart = () => {
  const { user, loading } = useContext(AuthContext);

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading,
    // queryFn: async() => {
    //     const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
    //         headers: {
    //             'Authorization': `Bearer ${localStorage.getItem("access-token")}`
    //         }
    //     })
    //     return res.json()
    // },
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/carts?email=${user?.email}`,{
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          }
        });
        console.log(res?.data);
        return res?.data
    },
  });

  return [cart, refetch];
};

export default useCart;
