import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Cart() {
  const {shop} = useParams();

  return (
    <>
      <h1>This Is Cart</h1>

      {shop !== undefined && <Link to={`/shop/${shop}`}>Back to {shop}</Link>}
    </>
  )
}
