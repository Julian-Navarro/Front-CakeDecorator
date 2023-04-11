import React, { useEffect, useState } from "react";
import axios from "axios";
import { HOST } from "../../../utils";
import PurchasesCards from "../Cards/Purchases/PurchasesCards";
import FilterPurchase from "./FilterPurchase";
import SearchBarPurchase from "./SearchBarPurchase";

export default function ShowPurchasesData() {
  const userInfo = JSON.parse(localStorage.getItem("loggedUser"));
  const [allMyProducts, setAllMyProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [noMatch, setNoMatch] = useState("");
  const [input2, setInput2] = useState("");
  const [select2, setSelect2] = useState("");

  console.log("FILTERED STATE", filteredProducts);

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

  const filterProductsByCategories = (select) => {
    // console.log("MY SELECT PADRE", select);
    setSelect2(select)
    if (select !== "" || select !== undefined) {
      const filtered = allMyProducts.filter(
        (product) => product.category === select
      );
      setFilteredProducts(filtered);
    } else {
      console.log("NO ENTRE AL IF");
    }
  };

  useEffect(() => {
    if (allMyProducts.length === 0) {
      getMyProducts();
    }
    // console.log("Ejecutando");
  });

  useEffect(() => {}, [filteredProducts]);

  return (
    <div>
      <h1>Explora tus compras - (PADRE)</h1>
      <SearchBarPurchase getMyProducts={getMyProducts} />
      <FilterPurchase
        allMyProducts={allMyProducts}
        filterProductsByCategories={filterProductsByCategories}
      />
      {noMatch === "noMatch" ? (
        <div>
          <h3>No hay coincidencias</h3>
        </div>
      ) : filteredProducts.length > 0 ? (
        <div>
          <h3>
            {filteredProducts.length === 1
              ? `Viendo ${filteredProducts.length} resultado`
              : (filteredProducts.length > 1 && select2 === "") ||
                select2 === undefined
              ? "Viendo todos los resultados posibles"
              : `Viendo ${filteredProducts.length} resultados`}
          </h3>
          <PurchasesCards allMyProducts={filteredProducts} />
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
          <PurchasesCards allMyProducts={allMyProducts} />
        </div>
      )}
      {/* PARA HACER DESPUES */}
    </div>
  );
}
