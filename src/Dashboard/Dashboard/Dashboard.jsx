import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            {/* slide  */}
            <div className="w-72 min-h-screen bg-orange-400">
                <ul className="menu">
                    <li><NavLink to='/dashboard/userprofile'>user profile</NavLink></li>
                    <li><NavLink to='/dashboard/home'>Home</NavLink></li>
                    <li><NavLink to='/dashboard/task'>Create a Task</NavLink></li>
                    <li><NavLink to='/dashboard/taskmanagement'>My Task</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to='/'>Home</NavLink></li>
                    
                </ul>
            </div>
            {/* content  */}
            <div>
                    <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;