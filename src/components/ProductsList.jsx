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
        const data = await fetch(` https://dummyjson.com/products?limit=111`);
        const newProductsList = await data.json();

        setTimeout(() => {
          setProducts(newProductsList.products);
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

      <section className="main">
        {products.map((product) => {
          return (
            <ProductCard
              className="productCard"
              key={product.id}
              img={product.images?.[0]}
              title={product.title}
              price={`${product.price} €`}
              category={product.category}
              productId={product.id}
            />
          );
        })}
      </section>
    </>
  );
}

export default ProductsList;
