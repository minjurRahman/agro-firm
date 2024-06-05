import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://agro-firm-server.onrender.com/cows/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product._id !== id));
  };
  return (
    <div>
      <h1 className="text-6xl font-bold text-center">All Products</h1>
      <div className="my-20 flex flex-wrap gap-4">
        {products.map((data) => (
          <SingleProduct
            data={data}
            key={data.id}
            deletedProduct={handleDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
