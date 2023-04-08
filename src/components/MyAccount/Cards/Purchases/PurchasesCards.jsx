import React, { useEffect, useState } from "react";
import PurchaseCard from "../../Card/Purchase/PurchaseCard";
import s from "../../../DashboardAdmin/SubComponents/Users/Users.module.css";
import style from "./PurchasesCards.module.css";
import { Link } from "react-router-dom";

export default function PurchasesCards({ allMyProducts }) {
  

  
    return (
      <div>
        <h1>Lo que compraste</h1>
        <div>
          {allMyProducts.length > 0
            ? allMyProducts.map((product) => (
                <div className={style.cardContainer}>
                  <div>
                    <PurchaseCard
                      name={product.name}
                      img={product.img}
                      price={product.price}
                    />
                  </div>
                  <div>
                    <Link
                      to={`/myAccount/purchaseDetail/${product.products_user.productId}`}
                    >
                      <button>Ver detalles</button>
                    </Link>
                  </div>
                </div>
              ))
            : "Aún no compraste productos"}
        </div>
      </div>
    )
}
