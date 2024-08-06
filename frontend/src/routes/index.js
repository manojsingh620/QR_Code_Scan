import {createBrowserRouter} from "react-router-dom"
import Register from "../pages/Register"
import Scanner from "../pages/Scanner"
import App from "../App"
import Freshers from "../pages/Freshers"

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
                element:<Freshers/>
            },
        ]
    },

])

export default router