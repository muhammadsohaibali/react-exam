import { useContext } from "react"
import authContext from "../context/authContext"
import { Navigate, Outlet } from "react-router"

const ProtectedRoutes = () => {
  const { authControllers } = useContext(authContext)
  return authControllers.checkAuth() ? <Outlet /> : <Navigate to="/auth/login" replace />
}

export default ProtectedRoutes
