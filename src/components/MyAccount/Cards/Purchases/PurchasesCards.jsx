import React, { useEffect, useState } from "react";
import PurchaseCard from "../../Card/Purchase/PurchaseCard";
import s from "../../../DashboardAdmin/SubComponents/Users/Users.module.css"
import style from "./PurchasesCards.module.css"

export default function PurchasesCards({ allMyProducts }) {
  // console.log("MY PRODUCTS", allMyProducts)
  return (
    <div>
      <h1>Lo que compraste</h1>
      <div >
        {allMyProducts.length > 0
          ? allMyProducts.map((product) =>
            <div className={style.cardContainer}>
              <PurchaseCard 
                name={product.name}
                img={product.img}
                price={product.price} 
              />
            </div>
            )
          : "Aún no compraste productos"}
      </div>
    </div>
  );
}
