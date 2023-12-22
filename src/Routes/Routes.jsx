import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import Task from "../Dashboard/Task/Task";
import DashboardHome from "../Dashboard/DashboardHome/DashboardHome";
import UserProfile from "../Dashboard/UserProfile/UserProfile";
import TaskManagement from "../Dashboard/TaskManagement/TaskManagement";
import PrivateRoutes from "./PrivateRoutes";
import Benefit from "../Pages/Benefit/Benefit";


const Routes = createBrowserRouter([
        {
            path: "/",
            element:<MainLayOut></MainLayOut>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>
                },
                {
                    path: "/login",
                    element: <Login></Login>
                },
                {
                    path: "/register",
                    element: <Register></Register>
                },
                {
                    path: "/benefit",
                    element: <Benefit></Benefit>
                },
                {
                    path: "dashboard",
                    element: <Dashboard></Dashboard>,
                    children: [
                        {
                            path:"userprofile",
                            element: <UserProfile></UserProfile>
                        },
                        {
                            path:"home",
                            element: <DashboardHome></DashboardHome>
                        },
                        {
                            path:"task",
                            element: <PrivateRoutes><Task></Task> </PrivateRoutes>
                        },{
                            path: "taskmanagement",
                            element: <TaskManagement></TaskManagement>
                        }
                     
                   
                    ]
                }
            ]

        },
       
])


export default Routes;