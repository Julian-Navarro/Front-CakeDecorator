import React, { useEffect, useState } from "react";
import axios from "axios";
import { HOST } from "../../../utils";
import PurchasesCards from "../Cards/Purchases/PurchasesCards";

export default function ShowPurchasesData() {
  const [allMyProducts, setAllmyProducts] = useState([]);
  const userInfo = JSON.parse(localStorage.getItem("loggedUser"));

  async function getMyProducts() {
    const response = await axios.get(
      `${HOST}/products/getUserProducts?id=${userInfo.id}`
    );
    setAllmyProducts(response.data);
  }

  useEffect(()=>{
    console.log("EFFECT")
    getMyProducts()
  },[])

  return (
    <div>
      <h1>Explora tus compras</h1>
        <PurchasesCards
        allMyProducts={allMyProducts}
        />
    </div>
  );
}
