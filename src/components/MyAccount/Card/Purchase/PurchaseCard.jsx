import React, { useEffect } from "react";
import s from "../../../DashboardAdmin/SubComponents/Users/Users.module.css";

export default function PurchaseCard({ name, img, price }) {
  useEffect(() => {}, []);
  return (
    <div className={s.divContainer}>
      <div>
        <img src={img} alt="Sin imagen" height="40px" width="40px" />
        <h2>{name}</h2>
        <h2>{price}</h2>
      </div>
    </div>
  );
}
