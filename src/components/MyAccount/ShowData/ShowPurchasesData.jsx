import React, { useEffect, useState } from "react";
import axios from "axios";
import { HOST } from "../../../utils";
import PurchasesCards from "../Cards/Purchases/PurchasesCards";
import FilterPurchase from "./FilterPurchase";
import OrderByName from "./OrderPurchases";
import SearchBarPurchase from "./SearchBarPurchase";

export default function ShowPurchasesData() {
  const userInfo = JSON.parse(localStorage.getItem("loggedUser"));
  const [allMyProducts, setAllMyProducts] = useState([]);
  const [myProducts, setMyProducts] = useState([]);
  // const [searchedProducts, setSearchedProducts] = useState([]);
  const [reset, setReset] = useState(false);
  const [noMatch, setNoMatch] = useState("");
  const [input2, setInput2] = useState("");
  const [select2, setSelect2] = useState("");

  // console.log("MYPRODUCTS", myProducts.length);
  // console.log("INPUT 2", input2);
  // console.log("allMyProducts", allMyProducts);
  console.log("COPY", myProducts);

  const getProductByName = (input) => {
    // console.log("INPUT EN PADRE", input);
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
    // console.log("SEARCHED", searchedWithInput);
  };

  const getMyProducts = async () => {
    const response = await axios.get(
      `${HOST}/products/getUserProducts?id=${userInfo.id}`
    );
    setAllMyProducts(response.data);
    setMyProducts(response.data);
  };

  const getSortedArray = async (sortedByNameProducts) => {
    console.log("SORTED PADRE", sortedByNameProducts);
    if (sortedByNameProducts.length > 0) {
      setMyProducts(sortedByNameProducts);
    }
  };

  const filterProductsByCategories = async (select) => {
    // console.log("MY SELECT PADRE", select);
    setSelect2(select);
    setInput2("");
    if (select !== "" || select !== undefined) {
      const filtered = allMyProducts.filter(
        (product) => product.category === select
      );
      // console.log("FILTERED", filtered);
      if (filtered.length > 0) {
        setMyProducts(filtered);
      }
    }
    if (select === "Todo") {
      await getMyProducts();
    }
  };

  const resetProduct = async () => {
    const select = document.getElementById("categories"); //Para setear el select al defaultValue("Todos")
    const orderOptions = document.getElementById("sorted");
    // console.log("SELECT", select)
    select.options.selectedIndex = 0;
    orderOptions.options.selectedIndex = 0;
    await getMyProducts();
    setNoMatch("");
  };

  useEffect(() => {
    if (allMyProducts.length === 0) {
      // console.log("EJECUTO EL GET");
      getMyProducts();
    }
  }, [allMyProducts]);

  useEffect(() => {
    if (reset === true) {
      // console.log("RESETEO");
      resetProduct();
      // console.log("SETEO");
      setReset(false);
    }
  }, [reset]);

  useEffect(() => {
    const selectOptions = document.getElementById("categories");
    const orderOptions = document.getElementById("sorted");
    console.log("ELEMENT", orderOptions.options);
    if (
      selectOptions.options.selectedIndex === 0 &&
      input2 === "" &&
      orderOptions.options.selectedIndex === 0
    ) {
      // console.log("ENTRÉ ");
      setMyProducts(allMyProducts);
    }
  });

  return (
    <div>
      <h1>Explora tus compras - (PADRE)</h1>
      <SearchBarPurchase
        getProductByName={getProductByName}
        resetProduct={resetProduct}
        setReset={setReset}
        input2={input2}
      />
      <FilterPurchase
        allMyProducts={allMyProducts}
        filterProductsByCategories={filterProductsByCategories}
        reset={reset}
      />
      {/*
      HACIENDO ::::::: ORDER
      */}
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
