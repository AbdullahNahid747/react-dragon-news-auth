import { Outlet } from "react-router-dom";

const Roots = () => {
    return (
        <div className=" max-w-6xl mx-auto text-center font-poppins">
            <Outlet/>
        </div>
    );
};

export default Roots;