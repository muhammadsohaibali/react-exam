import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductDetailsCard from "../components/ProductDetailsCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

interface Product {
  title: string;
  id: number;
  thumbnail: string;
  price: number;
  category: string;
  description: string;
}

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/${params.id}`
      );
      const result = await response.json();

      return result;
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchProducts().then((product: Product) => {
      setProduct(product);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Product Details - E-Commerce App</title>

      <Navbar />
      <Header />

      {loading ? <div>Loading</div> : <ProductDetailsCard product={product} />}

      <Footer />
    </>
  );
};

export default ProductDetails;
