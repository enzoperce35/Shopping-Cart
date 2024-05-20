import { Link } from "react-router-dom"

export default function Home() {

  return (
    <div data-testid='home'>
      <h1>This Is Home</h1>

      <div data-testid='shops'>
        <Link to='/shop/SHOP1'>Shop1</Link>
        <Link to='/shop/SHOP2'>Shop2</Link>
      </div>
    </div>
  )
}
