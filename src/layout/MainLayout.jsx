import { Outlet } from "react-router-dom"
import Header from "../components/Shared/Header"
import Navbar from "../components/Shared/Navbar"
import Footers from "../components/Shared/Footer"

const MainLayout = () => {
  return (
    <div>
      <Header/>
        <Navbar/>
        <Outlet/>
        <Footers/>
    </div>
  )
}

export default MainLayout