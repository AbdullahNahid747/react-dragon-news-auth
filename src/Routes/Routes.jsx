import { createBrowserRouter } from "react-router-dom";
import Roots from "../layouts/Roots/Roots";
import Home from "../Pages/Home/Home";
import Login from "../Components/Auth/Login/Login";
import Register from "../Components/Auth/Register/Register";
import NewsPage from "../Pages/NewsPage/NewsPage";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots/>,
        children:[
            {
                path: "/",
                element: <Home/>,
                loader: () => fetch('/news.json')
            },
            {
                path:"/news/:id",
                element: <PrivateRoute>
                    <NewsPage></NewsPage>
                </PrivateRoute>
            },
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }
]);

export default router;