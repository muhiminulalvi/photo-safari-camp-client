import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layouts/Dashboard";
import MyCart from "../Pages/Dashboard/My Cart/MyCart";
import PrivateRoute from "./PrivateRoute";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";
import AllClasses from "../Pages/AllClasses/AllClasses";
import MyClass from "../Pages/Dashboard/MyClass/MyClass";
import Payment from "../Pages/Dashboard/Payment/Payment";
import EnrolledClass from "../Pages/Dashboard/EnrolledClass/EnrolledClass";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/classes',
          element: <AllClasses></AllClasses>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'mycart',
          element: <MyCart></MyCart>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'enrolledclasses',
          element: <EnrolledClass></EnrolledClass>
        },
        {
          path: 'manageusers',
          element: <ManageUsers></ManageUsers>
        },
        {
          path: 'manageclasses',
          element: <ManageClasses></ManageClasses>
        },
        {
          path: 'addclass',
          element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
        },
        {
          path: 'manageclasses',
          element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
        },
        {
          path: 'myclass',
          element: <InstructorRoute><MyClass></MyClass></InstructorRoute>
        }
      ]
    }
  ]);
  