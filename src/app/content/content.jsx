import { useParams } from "react-router-dom";
import Home from "./home";
import Shop from "./shop";
import Cart from "./cart";

export default function Content() {
  const {page} = useParams();

  return (
    <>
      {page === 'shop' ? (
        <Shop />
      ) : page === 'cart' ? (
        <Cart />
      ) : (
        <Home />
      )}
    </>
  )
}
