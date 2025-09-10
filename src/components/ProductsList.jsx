import { useEffect, useState } from "react";
import Loader from "./Loader";
import ProductCard from "./ProductCard";

function ProductsList() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const data = await fetch(` https://api.escuelajs.co/api/v1/products`);
        const newProductsList = await data.json();

        setTimeout(() => {
          setProducts(newProductsList);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchProducts();
  }, []);

  if (isLoading === true) return <Loader />;

  return (
    <>
      <div className="products__grid">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              img={product.images[0]}
              title={product.title}
              price={product.price}
              category={product.category.name}
            />
          );
        })}
      </div>
    </>
  );
}

export default ProductsList;
