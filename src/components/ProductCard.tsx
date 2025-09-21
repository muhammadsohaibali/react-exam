import { NavLink } from "react-router";

interface Product {
  title: string;
  id: number;
  thumbnail: string;
  price: number;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <NavLink to={`product-details/${product.id}`}>
      <div className="boder-green-200 overflow-hidden rounded-lg border bg-white">
        <img
          className="h-48 w-full object-cover"
          src={product.thumbnail}
          alt={product.title}
        />
        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold text-gray-800">
            {product.title}
          </h3>
          <p className="mb-4 text-gray-600">{product.price}</p>
          <button className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Buy Now
          </button>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductCard;
