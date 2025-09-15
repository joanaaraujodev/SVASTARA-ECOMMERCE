import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function ProductCard({
  img,
  title,
  price,
  category,
  productId,
  className,
  hasFooter = true,
  hasBuButton = true,
  hasBin = false,
  bin,
}) {
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
    <div
      className={className}
      onClick={() => {
        if (className === "productCard") {
          CardClick();
        }
      }}
    >
      <button className={`${className}__favbutton`}></button>

      <img className={`${className}__img`} src={img} alt="" />
      <div className={`${className}__row`}>
        <div className={`${className}__row__main`}>
          <h3 className={`${className}__row__title`}>{title}</h3>

          {hasBuButton && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart({ img, title, price, category });
              }}
              className={`${className}__row__buy`}
            >
              BUY
            </button>
          )}
        </div>
        <button className={`${className}__price`}>{price}</button>
      </div>

      {hasFooter && (
        <div className={`${className}__footer`}>
          <div className={`${className}__footer__info`}>
            <img
              className={`${className}__footer__info__categoryicon`}
              src={categoryIcons[category]}
              alt={category}
            />

            <div className={`${className}__footer__info__txt`}>
              <span className={`${className}__footer__info__txt__category`}>
                {category}
              </span>

              <h4 className={`${className}__footer__info__txt__brand`}>
                SVAŠTARA
              </h4>
            </div>
          </div>
          <img
            className={`${className}__footer__logo`}
            src="src/assets/logos/icone_preto.png"
            alt="svastara_logo"
          />
        </div>
      )}

      {hasBin && (
        <img
          onClick={() => {
            if (className === "productCardCart__bin") {
              CardClick();
            }
          }}
          className={`${className}__bin`}
          src={bin}
          alt="removeproduct"
        />
      )}
    </div>
  );
}

export default ProductCard;
