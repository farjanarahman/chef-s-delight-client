import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import SingleChef from "../pages/SingleChef/SingleChef";
import Blog from "../pages/Blog/Blog";
import Recipe from "../pages/Home/Recipe";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("https://assignment-10-alpha.vercel.app/recipes")
            },
            {
                path: "recipes/:id",
                element: <PrivateRoutes><SingleChef></SingleChef></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://assignment-10-alpha.vercel.app/recipes/${params.id}`)
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
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    // {
    //     path:"/login",
    //     element: <Login></Login>
    // },
    // {
    //     path:"/register",
    //     element: <Register></Register>
    // }

]);
export default router;
