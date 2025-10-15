import { createBrowserRouter } from "react-router";
import Roots from "../Layouts/Roots";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
const router=createBrowserRouter([
    {
        path:'/',
        Component: Roots,
        children:[
            {
                index: true,
                Component: Home
            },{
                path:'/Login',
                Component: Login
            }
            ,{
                path: '/Register',
                Component: Register
            }
        ]

    }
])
export default router;