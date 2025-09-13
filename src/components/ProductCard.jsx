function ProductCard({ img, title, price, category }) {
  const categoryIcons = {
    Clothes: "src/assets/icones-categorias/Clothes.png",
    furniture: "src/assets/icones-categorias/Furniture.png",
    laptops: "src/assets/icones-categorias/Electronics.png",
    Shoes: "src/assets/icones-categorias/Shoes.png",
    Miscellaneous: "src/assets/icones-categorias/Miscellaneous.png",
  };
  return (
    <div className="productCard">
      <button className="productCard__favbutton"></button>

      <img className="productCard__img" src={img} alt="" />
      <div className="productCard__row">
        <div className="productCard__row__main">
          <h3 className="productCard__row__title">{title}</h3>
          <button className="productCard__row__buy">BUY</button>
        </div>
        <button className="productCard__price">{price}</button>
      </div>

      <div className="productCard__footer">
        <img
          className="productCard__footer__categoryicon"
          src={categoryIcons[category]}
          alt={category}
        />

        <div className="productCard__footer__txt">
          <span className="productCard__footer__txt__category">{category}</span>
          <h4 className="productCard__footer__txt__brand">SVAŠTARA</h4>
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
