import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import Home from "../pages/Home/Home"
import EventDetails from "../pages/Event Details/EventDetails"


const Router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/eventDetails/:id",
                element:<EventDetails/>
            }
        ]
    }
])

export default Router