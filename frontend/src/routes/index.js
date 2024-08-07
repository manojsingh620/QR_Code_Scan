import {createBrowserRouter} from "react-router-dom"
import Register from "../pages/Register"
import App from "../App"
import Freshers from "../pages/Freshers"
import Success from "../pages/Success"

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
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