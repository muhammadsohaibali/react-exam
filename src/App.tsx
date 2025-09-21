import Login from "./pages/Login"
import ProductDetails from "./pages/ProductDetails"
import PublicRoutes from "./routes/PublicRoutes"
import { BrowserRouter, Routes, Route } from "react-router"
import Register from "./pages/Register"
import ProductPage from "./pages/ProductPage"
import ProtectedRoutes from "./routes/ProtectedRoutes"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="auth/register" element={<Register />} />
          <Route path="auth/login" element={<Login />} />
        </Route>

        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<ProductPage />} />
          <Route path="product-details/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
