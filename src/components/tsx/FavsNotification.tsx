import { useContext } from "react";
import { FavoritesContext } from "./FavoritesContext";

function FavsNotification() {
  const favsContext = useContext(FavoritesContext);

  if (!favsContext)
    throw new Error("FavoritesContext must be used within FavoritesProvider");

  const { notificationFav } = favsContext;
  const rightValue = window.innerWidth <= 800 ? '8%' : '400px';

  if (!notificationFav) return null;

  return <div className="notification" style={{right:rightValue}}>{notificationFav}</div>;
}

export default FavsNotification;
