import React from "react";
import PurchaseCard from "../../Card/Purchase/PurchaseCard";
import style from "./PurchasesCards.module.css";
import { Link } from "react-router-dom";

export default function PurchasesCards({ allMyProducts }) {
  return (
    <div>
      <h1>Lo que compraste - (HIJO)</h1>
      <div>
        {allMyProducts.length > 0
          ? allMyProducts.map((product, idx) => (
              <div className={style.cardContainer} key={idx}>
                <PurchaseCard
                  name={product.name}
                  img={product.img}
                  price={product.price}
                />
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
  );
}
