import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <progress className="progress w-56" value="10" max="100"></progress>
    }
    if(user){
        return children
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoutes;