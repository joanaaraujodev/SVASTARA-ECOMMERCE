import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import cart_white from "../assets/outros/cart_white.png";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const storedCart = localStorage.getItem("Cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  return (
    <>
      <div className="cartspage_title">
        <h1 className="Cart__txt">Items in my cart</h1>
        <img src={cart_white} alt="cart_icon" width={65} />
      </div>
      <section className="cartMain">
        {cartItems.map((cartItem, index) => {
          return (
            <ProductCard
              className="productCardCart"
              key={`${index}- ${cartItem.id}`}
              img={cartItem.img}
              title={cartItem.title}
              price={`${cartItem.price} €`}
              category={cartItem.category}
              productId={cartItem.id}
              hasFooter={false}
              hasBuButton={false}
              hasBin={true}
              bin={"src/assets/outros/bin.png"}
            />
          );
        })}
      </section>
    </>
  );
}

export default CartPage;
