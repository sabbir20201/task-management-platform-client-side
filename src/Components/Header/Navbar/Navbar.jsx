import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const navLinks = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/benefit">Benefit</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li>
            {
                user ? <button className="btn" onClick={handleLogOut}>logout</button>
                    : <button className="btn"><Link to="/login">login</Link></button>
            }
        </li>


    </>
    return (
        <div>
            <div className="navbar bg-[#dbeeff]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost text-xl">{user?.displayName}</a> */}
                   <img src="https://i.ibb.co/YcMV0MS/time-project-vector-logo-template-260nw-1881303058.webp" className="w-14 h-14 rounded-full" alt="" />
                    {/* <a className="btn btn-ghost text-xl"><img src="https://i.ibb.co/YcMV0MS/time-project-vector-logo-template-260nw-1881303058.webp" className="w-12 h-12 rounded-full" alt="" /></a> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <p>{user?.displayName}</p>
                    <div className="dropdown dropdown-end">

                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="coming soon" src={user?.photoURL} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            {      
                                    <>
                                    {
                                        user ? <li> <button className="btn" onClick={handleLogOut}>logout</button></li>
                                            : <li><button className="btn"><Link to="/login">login</Link></button></li>
                                    }  
                                    </>
                            }
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;