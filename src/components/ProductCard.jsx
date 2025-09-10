function ProductCard({ img, title, price, category }) {
  const categoryIcons = {
    Clothes: "src/assets/icones-categorias/Clothes.png",
    Furniture: "src/assets/icones-categorias/Furniture.png",
    Electronics: "src/assets/icones-categorias/Electronics & Hardware.png",
    Shoes: "src/assets/icones-categorias/Shoes.png",
    Miscellaneous: "src/assets/icones-categorias/Miscellaneous.png",
  };
  return (
    <div className="productCard">
      <button className="productCard__favbutton"></button>
      <div className="productCard__body">
        <img className="productCard__body__img" src={img} alt="" />
        <div className="productCard__body__row">
          <h3 className="productCard__body__row__title">{title}</h3>
          <button className="productCard__body__row__buy">BUY</button>
        </div>
        <button className="productCard__body__price">{price}</button>
      </div>

      <div className="productCard__footer">
        <img
          className="productCard__footer__categoryicon"
          src={categoryIcons[category] || ""}
          alt={category}
        />
        <span className="productCard__footer__categorytxt">{category}</span>
        <h4 className="productCard__footer__brand">SVAŠTARA</h4>
        <img
          className="productCard__footer__logo"
          src="src/assets/logos/icone_original.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default ProductCard;
