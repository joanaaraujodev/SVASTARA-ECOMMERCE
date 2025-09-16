import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "./CartContext";
import Counter from "./Counter";
import fav from "../assets/outros/fav.png";
import { FavoritesContext } from "./FavoritesContext";
import icone_preto from "../assets/logos/icone_preto.png"

function ProductCard({
  img,
  title,
  price,
  category,
  productId,
  className,
  hasFooter = true,
  hasButton = true,
  hasBin = false,
  bin,
  addToFavs = false,
}) {
  const categoryIcons = {
    Clothes: "src/assets/icones-categorias/Clothes.png",
    furniture: "src/assets/icones-categorias/Furniture.png",
    laptops: "src/assets/icones-categorias/Electronics.png",
    Shoes: "src/assets/icones-categorias/Shoes.png",
    Miscellaneous: "src/assets/icones-categorias/Miscellaneous.png",
  };

  const { addToCart, removeFromCart } = useContext(CartContext);
  const { toggleFav, isFav } = useContext(FavoritesContext);
  const [counterValue, setCounterValue] = useState(1);

  const navigate = useNavigate();
  const CardClick = () => {
    navigate(`/product/${productId}`);
  };

  const calculateTotal = (unitPrice, quantity) => {
    return `${unitPrice * quantity}€`;
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
      {addToFavs ? (
        <div className={`${className}__fav-wrapper`}>
          <span>Add to favs</span>
          <img
            onClick={(e) => {
              e.stopPropagation();
              toggleFav({ id: productId, title });
            }}
            src={fav}
            alt="fav"
            className={`${className}__favbutton ${
              isFav(productId) ? `${className}__favbutton--active` : ""
            }`}
          />
        </div>
      ) : (
        <img
          onClick={(e) => {
            e.stopPropagation();
            toggleFav({ id: productId, title });
          }}
          src={fav}
          alt="fav"
          className={`${className}__favbutton ${
            isFav(productId) ? `${className}__favbutton--active` : ""
          }`}
        />
      )}

      <img
        onClick={() => {
          if (className === "productCardCart") {
            CardClick();
          }
        }}
        className={`${className}__img`}
        src={img}
        alt=""
      />
      <div className={`${className}__row`}>
        <div className={`${className}__row__main`}>
          <h3 className={`${className}__row__title`}>{title}</h3>

          {hasButton && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart({ id: productId, img, title, price, category });
              }}
              className={`${className}__row__buy`}
            >
              BUY
            </button>
          )}
        </div>

        {hasButton ? (
          <button className={`${className}__price`}>{price}</button>
        ) : (
          <div className="productCardCart__info">
            <button className="productCardCart__info__price">{price}</button>
            <Counter value={counterValue} onChange={setCounterValue} />
            <button className="productCardCart__info__totalprice">
              {calculateTotal(price, counterValue)}
            </button>
          </div>
        )}
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
            src={icone_preto}
            alt="svastara_logo"
          />
        </div>
      )}

      {hasBin && (
        <img
          onClick={() => removeFromCart(productId)}
          className={`${className}__bin`}
          src={bin}
          alt="removeproduct"
        />
      )}
    </div>
  );
}

export default ProductCard;
