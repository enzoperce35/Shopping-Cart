import { useParams } from "react-router-dom";

export default function Shop() {
  const {shop} = useParams();

  return (
    <div data-testid='shop'>
      <h1>This Is {shop}</h1>
    </div>
  )
}
