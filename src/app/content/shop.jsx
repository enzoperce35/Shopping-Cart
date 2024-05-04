import { useParams } from "react-router-dom";

export default function Shop() {
  const {shop} = useParams();

  return (
    <>
      <h1>This Is {shop}</h1>
    </>
  )
}
