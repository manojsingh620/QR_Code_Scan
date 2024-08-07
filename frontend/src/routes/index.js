import {createBrowserRouter} from "react-router-dom"
import Register from "../pages/Register"
import App from "../App"
import Freshers from "../pages/Freshers"
import Success from "../pages/Success"
import Home from "../pages/Home"

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"register",
                element:<Register/>
            },
            {
                path:"/:id/verify",
                element:<Freshers/>,
                // children: [
                //     {
                //         path:"success",
                //         element:<Succes/>
                //     }
                // ]
            },
            {
                path:"success",
                element:<Success/>
            }
        ]
    },

])

export default router