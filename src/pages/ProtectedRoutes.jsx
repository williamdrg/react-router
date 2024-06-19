import { Navigate, Outlet } from "react-router-dom"
import NavBar from "../components/shared/NavBar"


const ProtectedRoutes = ({ userName }) => {
  if (userName === 'pepito') {
      return (
        <>
        <NavBar/>
        <Outlet/>
        </>
      )
  } else {
    return <Navigate to='/' />
  }

}

export default ProtectedRoutes