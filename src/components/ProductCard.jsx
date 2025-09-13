import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function ProductCard({ img, title, price, category, productId }) {
  const categoryIcons = {
    Clothes: "src/assets/icones-categorias/Clothes.png",
    furniture: "src/assets/icones-categorias/Furniture.png",
    laptops: "src/assets/icones-categorias/Electronics.png",
    Shoes: "src/assets/icones-categorias/Shoes.png",
    Miscellaneous: "src/assets/icones-categorias/Miscellaneous.png",
  };

  const navigate = useNavigate();
  const CardClick = () => {
    navigate(`/product/${productId}`);
  };

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("Cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    localStorage.setItem("Cart", JSON.stringify(updatedCart));
    console.log("Carrinho atualizado:", updatedCart);
  };

  return (
    <div className="productCard" onClick={CardClick}>
      <button className="productCard__favbutton"></button>

      <img className="productCard__img" src={img} alt="" />
      <div className="productCard__row">
        <div className="productCard__row__main">
          <h3 className="productCard__row__title">{title}</h3>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart({ img, title, price, category });
            }}
            className="productCard__row__buy"
          >
            BUY
          </button>
        </div>
        <button className="productCard__price">{price}</button>
      </div>

      <div className="productCard__footer">
        <div className="productCard__footer__info">
          <img
            className="productCard__footer___info__categoryicon"
            src={categoryIcons[category]}
            alt={category}
          />

          <div className="productCard__footer__info__txt">
            <span className="productCard__footer__info__txt__category">
              {category}
            </span>
            <h4 className="productCard__footer__info__txt__brand">SVAŠTARA</h4>
          </div>
        </div>
        <img
          className="productCard__footer__logo"
          src="src/assets/logos/icone_preto.png"
          alt="svastara_logo"
        />
      </div>
    </div>
  );
}

export default ProductCard;
