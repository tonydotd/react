import { Link, useNavigate } from "react-router-dom";

export default function HompePage() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/products");
  }

  return (
    <>
      <h1>My Home</h1>{" "}
      <p>
        Go to <Link to="/products">the list of products</Link>
      </p>
      <p>
        <button onClick={handleNavigate}>Navigate</button>
      </p>
    </>
  );
}
