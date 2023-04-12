import React, { useEffect, useState } from "react";
import axios from "axios";
import { HOST } from "../../../utils";
import PurchasesCards from "../Cards/Purchases/PurchasesCards";
import FilterPurchase from "./FilterPurchase";
import SearchBarPurchase from "./SearchBarPurchase";

export default function ShowPurchasesData() {
  const userInfo = JSON.parse(localStorage.getItem("loggedUser"));
  const [allMyProducts, setAllMyProducts] = useState([]);
  const [myProducts, setMyProducts] = useState([]);
  const [reset, setReset] = useState(false);
  const [noMatch, setNoMatch] = useState("");
  const [input2, setInput2] = useState("");
  const [select2, setSelect2] = useState("");

  // console.log("reset", reset);
  console.log("ALL", allMyProducts);
  console.log("COPY", myProducts);

  const getProductByName = (input) => {
    console.log("input", input);
    //   setInput2(input);
    // const searchedWithInput = [];
    // if (input !== undefined) {
    //   allProducts.forEach((product) => {
    //     if (
    //       product.name.toLowerCase().indexOf(input.toLowerCase().trim()) !== -1
    //     ) {
    //       searchedWithInput.push(product);
    //     }
    //   });
    //   if (searchedWithInput.length > 0) {
    //     setAllMyProducts(searchedWithInput);
    //     setNoMatch("");
    //   } else {
    //     setNoMatch("noMatch");
    //   }
    // }
  };

  const getMyProducts = async () => {
    const response = await axios.get(
      `${HOST}/products/getUserProducts?id=${userInfo.id}`
    );
    setAllMyProducts(response.data);
    setMyProducts(response.data);
  };

  const filterProductsByCategories = async (select) => {
    // console.log("MY SELECT PADRE", select);
    setSelect2(select);
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
    const select = document.getElementById("categories"); //Para setear el select al defaultValue
    // console.log("SELECT", select)F
    select.options.selectedIndex = 0;
    await getMyProducts();
  };

  useEffect(() => {
    if (allMyProducts.length === 0) {
      console.log("EJECUTO EL GET");
      getMyProducts();
    } else {
      console.log("NO EJECUTO EL GET");
    }
  }, [allMyProducts]);

  useEffect(() => {
    if (reset === true) {
      console.log("RESETEO");
      resetProduct();
      console.log("SETEO");
      setReset(false);
    }
  }, [reset]);

  // useEffect(() => {}, [allMyProducts]);

  return (
    <div>
      <h1>Explora tus compras - (PADRE)</h1>
      <SearchBarPurchase
        getProductByName={getProductByName}
        resetProduct={resetProduct}
        setReset={setReset}
      />
      <FilterPurchase
        allMyProducts={allMyProducts}
        filterProductsByCategories={filterProductsByCategories}
        reset={reset}
      />
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
          <PurchasesCards allMyProducts={myProducts} />
        </div>
      )}
      {/* PARA HACER DESPUES */}
    </div>
  );
}
