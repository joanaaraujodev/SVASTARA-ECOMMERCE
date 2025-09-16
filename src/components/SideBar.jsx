import { NavLink } from "react-router";
import beauty from "../assets/icones-categorias/beauty.png";
import fragrances from "../assets/icones-categorias/fragances.png";
import furniture from "../assets/icones-categorias/furniture.png";
import smartphones from "../assets/icones-categorias/smartphones.png";
import clothes from "../assets/icones-categorias/clothes.png";
import shoes from "../assets/icones-categorias/shoes.png";
import sports from "../assets/icones-categorias/sports.png";

const categories = [
  { name: "beauty", icon: beauty },
  { name: "fragrances", icon: fragrances },
  { name: "furniture", icon: furniture },
  { name: "smartphones", icon: smartphones },
  { name: "clothes", icon: clothes },
  { name: "shoes", icon: shoes },
  { name: "sports", icon: sports },
];

function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function SideBar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__links">
          <h2 style={{ marginBottom: "2rem" }}>Categories</h2>
          {categories.map((category) => (
            <>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "sidebar__links--active" : ""
                }
                to={`/products/category/${category.name}`}
              >
                <img src={category.icon} alt={category.name} />
                <h3>{capitalizeFirst(category.name)}</h3>
              </NavLink>
            </>
          ))}
        </div>

        <hr className="sidebar__line" />

        <div className="sidebar__links">
          <h3>Settings</h3>
          <h3>Help & FAQ</h3>
          <h3>Release notes</h3>
          <h3>Terms and Policies</h3>
        </div>
      </div>
    </>
  );
}

export default SideBar;
