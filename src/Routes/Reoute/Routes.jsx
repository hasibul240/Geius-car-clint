import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import ChackOut from "../../Pages/ChackOut/ChackOut";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoute from "../Private/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
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
                path: '/signup',
                element: <Signup />
            },
            {
                path: 'chackout/:id',
                element: <PrivateRoute><ChackOut /></PrivateRoute>,
                loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/orders',
                element: <PrivateRoute><Orders /></PrivateRoute>,
            }
        ]
    }
]);

export default router;