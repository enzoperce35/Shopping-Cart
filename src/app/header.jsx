import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";

export default function Header() {
  const {page, shop} = useParams();

  return (
    <div data-testid='heading'>
      <h1>This Is Header</h1>

      {(page !== 'home' && page !== undefined) && <Link to='/' data-testid='home-link'>Home</Link>}
      {page !== 'cart' && <Link to={shop === undefined ? '/cart' : `/cart/${shop}`} data-testid='cart-link'>Cart</Link>}
    </div>
  )
}
