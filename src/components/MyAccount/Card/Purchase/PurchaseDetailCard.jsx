import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { HOST } from "../../../../utils";

export default function PurchaseDetailCard() {
  const productId = useParams();
  const [myProduct, setMyProduct] = useState(false);
  console.log("PRODUCT", myProduct);

  async function getMyProduct() {
    const productFinded = await axios.get(
      `${HOST}/products/findOne/${productId.id}`
    );
    if (productFinded.data !== false) {
      setMyProduct(productFinded.data);
    }
  }

  useEffect(() => {
    getMyProduct();
  }, []);

  return (
    <div>
      <h1>Detalles de compra</h1>
      <div>
        <img
          src={myProduct.img}
          alt="Sin imagen"
          height={"200px"}
          width={"250px"}
        />
        <h2>Producto: {myProduct.name}</h2>
        <h2>Categoria: {myProduct.category}</h2>
        <h2>Precio: {myProduct.price}</h2>
        <h2>Descripcion del producto: {myProduct.description}</h2>
      </div>

      <Link to="/myAccount">
        <button>Atrás</button>
      </Link>
    </div>
  );
}
