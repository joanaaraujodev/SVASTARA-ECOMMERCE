import { useEffect, useState } from "react";
import Loader from "./Loader";
import ProductCard from "./ProductCard";

function ProductsList() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 15;
  const pagination = [1, 2, 3, 4, 5];

  useEffect(() => {
    const skip = (page - 1) * limit;
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const data = await fetch(
          ` https://dummyjson.com/products?limit=${limit}&skip=${skip}`
        );
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
  }, [page]);

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

        <div className="pagination">
          {pagination.map((num) => (
            <button className="pagination__btn"  key={num} onClick={() => setPage(num)}>
              {num}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

export default ProductsList;
