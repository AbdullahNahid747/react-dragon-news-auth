/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname)

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to={"/Login"}></Navigate>;
};

export default PrivateRoute;