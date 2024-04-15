import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import Home from "../pages/Home/Home"
import EventDetails from "../pages/Event Details/EventDetails"
import Registration from "../pages/Registration"
import Login from "../pages/Login"
import About from "../pages/About"
import Contact from "../pages/Contact"
import CreateEventForm from "../components/CreateEventForm/CreateEventForm"


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
            },
            {
                path:"/about",
                element:<About/>
            }
            ,
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/eventForm",
                element:<CreateEventForm/>
            }
        ]
    },
    {
        path:"/signUp",
        element:<Registration/>
    },
    {
        path:"/login",
        element:<Login/>
    }
])

export default Router