import { Navigate, Outlet } from "react-router"
import authContext from "../context/authContext"
import { useContext } from "react"

const PublicRoutes = () => {
  const { authControllers } = useContext(authContext)
  return authControllers.checkAuth() ? <Navigate to="/" replace /> : <Outlet />
}

export default PublicRoutes
