import { Link, useParams } from "react-router-dom";

export default function ProductDetail({ product, title, description, price }) {
  const { id } = useParams();
  return (
    <>
      <h1>Product Details!</h1>
      <p>{id}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}
