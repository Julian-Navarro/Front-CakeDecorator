import React, { useEffect, useState } from "react";
import axios from "axios";
import { HOST } from "../../../utils";
import PurchasesCards from "../Cards/Purchases/PurchasesCards";
import FilterPurchase from "./FilterPurchase";
import SearchBarPurchase from "./SearchBarPurchase";

export default function ShowPurchasesData() {
  const userInfo = JSON.parse(localStorage.getItem("loggedUser"));
  const [allMyProducts, setAllMyProducts] = useState([]);
  const [noMatch, setNoMatch] = useState("");
  const [input2, setInput2] = useState("");
  console.log("INPUT 2", input2);

  const getMyProducts = async (input) => {
    setInput2(input);

    const response = await axios.get(
      `${HOST}/products/getUserProducts?id=${userInfo.id}`
    );
    const allProducts = response.data;
    const searchedWithInput = [];

    if (input !== undefined) {
      allProducts.forEach((product) => {
        if (
          product.name.toLowerCase().indexOf(input.toLowerCase().trim()) !== -1
        ) {
          searchedWithInput.push(product);
        }
      });
      if (searchedWithInput.length > 0) {
        setAllMyProducts(searchedWithInput);
        setNoMatch("");
      } else {
        setNoMatch("noMatch");
      }
    } else {
      setAllMyProducts(allProducts);
    }
  };

  useEffect(() => {
    if (allMyProducts.length === 0) {
      getMyProducts();
    }
    console.log("Ejecutando");
  });

  return (
    <div>
      <h1>Explora tus compras (PADRE)</h1>
      <SearchBarPurchase getMyProducts={getMyProducts} />
      {noMatch === "noMatch" ? (
        <div>
          <h3>No hay coincidencias</h3>
        </div>
      ) : (
        <div>
          <h3>
            {allMyProducts.length === 1
              ? `Viendo ${allMyProducts.length} resultado`
              : (allMyProducts.length > 1 && input2 === "") ||
                input2 === undefined
              ? "Viendo todos los resultados"
              : `Viendo ${allMyProducts.length} resultados posibles`}
          </h3>
        </div>
      )}
      <PurchasesCards allMyProducts={allMyProducts} />

      {/* PARA HACER DESPUES */}
      {/* <FilterPurchase allMyProducts={allMyProducts} /> */}

    </div>
  );
}
