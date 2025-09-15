import { useContext } from "react";
import { CartContext } from "./CartContext"

function CartNotification() {
  const { notification } = useContext(CartContext);
  

  if (!notification) return null;

  return (
    <div style={{
      position: "fixed",
      top: 80,
      right: 20,
      backgroundColor: "#1483bb",
      color: "white",
      padding: "10px 20px",
      borderRadius: 8,
      boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
      zIndex: 1000,
      transition: "all 0.3s ease",
    }}>
      {notification}
    </div>
  );
}

export default CartNotification;
