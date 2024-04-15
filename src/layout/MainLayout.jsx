import { Outlet } from "react-router-dom"
import Header from "../components/Shared/Header"
import Navbar from "../components/Shared/Navbar"
import Footers from "../components/Shared/Footer"
import { useDispatch } from "react-redux"
import { addEvent } from "../redux/features/event/eventSlice"
import { useEffect } from "react"

const MainLayout = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    const value = localStorage.getItem('data');
    const data = JSON.parse(value);

    // console.log('Data from localStorage:', data); 

    if (data) {
      dispatch(addEvent(data));
    } else {
      console.log('No data found in localStorage');
    }
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
      <Footers />
    </div>
  )
}

export default MainLayout