import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";

export default function Header() {
  const {page, shop} = useParams();

  return (
    <>
      <h1>This Is Header</h1>

      {page !== 'home' && <Link to='/'>Home</Link>}
      {page !== 'cart' && <Link to={shop === undefined ? '/cart' : `/cart/${shop}`}>Cart</Link>}
    </>
  )
}
