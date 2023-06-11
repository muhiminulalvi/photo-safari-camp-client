import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: item = {} } = useQuery({
    queryKey: ["adminstats"],
    queryFn: async () => {
      const res = await axiosSecure("/adminstats");
      return res.data;
    },
  });
  return (
    <div className="w-full mx-auto xl:px-32 md:px-10 sm:px-2">
      <h3 className="font-bold text-2xl py-5">Welcome {user?.displayName}</h3>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title font-bold">Total Users</div>
          <div className="stat-value text-primary">{item.users}</div>
          <div className="stat-desc font-bold">
            Great!!! Your Website is growing.
          </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Classes</div>
          <div className="stat-value text-secondary">{item.classData}</div>
          <div className="stat-desc">
            Superb!!
          </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value text-secondary">{item.orders}</div>
          <div className="stat-desc text-secondary">Well Done!!</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </div>
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value text-secondary">${item.revenue}</div>
          <div className="stat-desc text-secondary">Awesome!!</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
