import React, { useEffect, useState } from "react";
import PurchaseCard from "../../Card/Purchase/PurchaseCard";
import s from "../../../DashboardAdmin/SubComponents/Users/Users.module.css"

export default function PurchasesCards({ allMyProducts }) {
  console.log("MY PRODUCTS", allMyProducts)
  return (
    <div>
      <h1>Lo que compraste</h1>
      <div className={s.userCardTitles}>
        {allMyProducts.length > 0
          ? allMyProducts.map((product) =>
              (<PurchaseCard 
                name={product.name}
                img={product.img}
                price={product.price} />)
            )
          : "Aún no compraste productos"}
      </div>
    </div>
  );
}
