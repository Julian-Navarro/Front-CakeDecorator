import React, { useEffect, useState } from "react";
import axios from "axios";
import { HOST } from "../../../../utils";
import PurchasesCards from "../../Cards/Purchases/PurchasesCards";
import FilterPurchase from "./FilterPurchase";
import OrderByName from "./OrderPurchases";
import SearchBarPurchase from "./SearchBarPurchase";

export default function ShowPurchasesData() {
  const userInfo = JSON.parse(localStorage.getItem("loggedUser"));
  const [allMyProducts, setAllMyProducts] = useState([]);
  const [myProducts, setMyProducts] = useState([]);
  const [noMatch, setNoMatch] = useState("");
  const [input2, setInput2] = useState("");
  const [select2, setSelect2] = useState("");

  const getMyProducts = async () => {
    const response = await axios.get(
      `${HOST}/products/getUserProducts?id=${userInfo.id}`
    );
    setAllMyProducts(response.data);
    setMyProducts(response.data);
  };

  const getProductByName = (input) => {
    setInput2(input);
    const searchedWithInput = [];
    if (input !== undefined || input !== "") {
      allMyProducts.forEach((product) => {
        if (
          product.name.toLowerCase().indexOf(input.toLowerCase().trim()) !== -1
        ) {
          searchedWithInput.push(product);
        }
      });
    }
    if (searchedWithInput.length > 0) {
      setMyProducts(searchedWithInput);
      setNoMatch("");
    } else {
      setNoMatch("no-match");
    }
  };

  const getSortedArray = async (sortedByNameProducts) => {
    if (sortedByNameProducts.length > 0) {
      setMyProducts(sortedByNameProducts);
    }
  };

  const filterProductsByCategories = async (select) => {
    setSelect2(select);
    setInput2("");
    if (select !== "" || select !== undefined) {
      const filtered = allMyProducts.filter(
        (product) => product.category === select
      );
      if (filtered.length > 0) {
        setMyProducts(filtered);
      }
    }
    if (select === "Todo") {
      await getMyProducts();
    }
  };

  const resetProduct = async () => {
    const select = document.getElementById("categories"); //Para reiniciar el select filter => defaultValue
    const orderOptions = document.getElementById("sorted");
    select.options.selectedIndex = 0;
    orderOptions.options.selectedIndex = 0;
    await getMyProducts();
    setNoMatch("");
  };

  useEffect(() => {
    if (allMyProducts.length === 0 && myProducts.length === 0) {
      getMyProducts();
    }
  }, [allMyProducts]);

  useEffect(() => {
    const selectOptions = document.getElementById("categories");
    const orderOptions = document.getElementById("sorted");
    if (
      selectOptions.options.selectedIndex === 0 &&
      orderOptions.options.selectedIndex === 0 &&
      input2 === ""
    ) {
      setMyProducts(allMyProducts);
    }
  });

  return (
    <div>
      <h1>Explora tus compras - (PADRE)</h1>
      <SearchBarPurchase
        getProductByName={getProductByName}
        resetProduct={resetProduct}
      />
      <FilterPurchase
        allMyProducts={allMyProducts}
        filterProductsByCategories={filterProductsByCategories}
        noMatch={noMatch}
      />
      <OrderByName
        allMyProducts={allMyProducts}
        getSortedArray={getSortedArray}
      />
      {noMatch === "no-match" ? (
        <div>
          <h3>No hay coincidencias</h3>
        </div>
      ) : (
        <div>
          <h3>
            {myProducts.length === 1
              ? `Viendo ${myProducts.length} resultado`
              : myProducts.length > 1
              ? `Viendo ${myProducts.length} resultados`
              : null}
          </h3>
          <PurchasesCards allMyProducts={myProducts} />
        </div>
      )}
    </div>
  );
}
