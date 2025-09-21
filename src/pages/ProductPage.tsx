import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import ProtectedRoutes from "../routes/ProtectedRoutes";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();

      return result.products.splice(0, 9);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Product Page - E-Commerce App</title>

      <Navbar />
      <Header />

      <div className="container mx-auto bg-white p-6">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">
          Featured Products
        </h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            return <ProductCard product={product} />;
          })}
        </div>
      </div>

      <Footer />

      <ProtectedRoutes>test</ProtectedRoutes>
    </>
  );
};

export default ProductPage;
