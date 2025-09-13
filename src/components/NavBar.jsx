import { Link } from "react-router";
import { useState, useEffect } from "react";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <Link className="navbar__logo" to="/products">
        <img
          src="src/assets/logos/logotipo_original.png"
          alt="logo"
          width={220}
        />
      </Link>
      <div className="navbar__main">
        <Link to="/products">Products</Link>
        <Link to="#">About us</Link>
        <Link to="#">Sales</Link>
        <Link
          className="navbar__main__myfavs"
          style={
            !scrolled
              ? { border: "1.2px solid #1483bb" }
              : { border: "1.7px solid white" }
          }
          to="/favorites"
        >
          My favs
        </Link>
        <Link to="#">Contact us</Link>
      </div>

      <div className="navbar__more">
        <Link className="navbar__more__auth" to="/auth">
          <span>login</span>

          <img
            src={
              !scrolled
                ? "src/assets/outros/auth_azul.png"
                : "src/assets/outros/auth_white.png"
            }
            alt="cart"
            width={30}
          />
        </Link>
        <Link className="navbar__more__cart"  to="/cart">
          <img
            src={
              !scrolled
                ? "src/assets/outros/cart-blue.png"
                : "src/assets/outros/cart-white.png"
            }
            alt="cart"
            width={40}
          />
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
