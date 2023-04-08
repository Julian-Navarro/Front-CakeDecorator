import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import axios from "axios";
import { HOST } from "../../../utils";
import PurchasesCards from "../Cards/Purchases/PurchasesCards";
import FilterPurchase from "./FilterPurchase";
import SearchBarPurchase from "./SearchBarPurchase";

export default function ShowPurchasesData() {
  const [allMyProducts, setAllmyProducts] = useState([]);
  const findProduct = useSelector((state)=> state.findProductUser)
  const userInfo = JSON.parse(localStorage.getItem("loggedUser"));
  console.log("FIND PRODUCT", findProduct)
  
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
        <SearchBarPurchase />
        <FilterPurchase allMyProducts={allMyProducts}/>

        <PurchasesCards
        allMyProducts={allMyProducts}
        />
    </div>
  );
}
