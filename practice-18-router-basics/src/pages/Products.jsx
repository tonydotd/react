import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <>
      <h1>Product</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={product.id}>
              {`${product.id}`} -{product.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
