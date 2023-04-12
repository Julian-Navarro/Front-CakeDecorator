import React, { useEffect, useState } from "react";

export default function FilterPurchase({
  allMyProducts,
  filterProductsByCategories,
}) {
  const [select, setSelect] = useState("");
  const [mapMyCategories, setMapMyCategories] = useState([]);

  function getAllCategories() {
    if (allMyProducts.length > 0) {
      allMyProducts.forEach((product) => {
        if (!mapMyCategories.includes(product.category)) {
          //NO SUCEDE NADA SI ES TRUE
          mapMyCategories.push(product.category);
        }
      });
    }
  }

  function handlerSelect(e) {
    e.preventDefault();
    setSelect(e.target.value);
    const orderReset = document.getElementById("sorted");
    orderReset.options.selectedIndex = 0;
  }

  useEffect(() => {
    if (mapMyCategories.length === 0) {
      getAllCategories();
    }
  });

  useEffect(() => {
    if (select !== "") {
      filterProductsByCategories(select);
      setSelect("");
    }
  });

  return (
    <div>
      <label>Filtrar por: </label>
      <select
        name="categories"
        id="categories"
        onChange={(e) => [handlerSelect(e), filterProductsByCategories(select)]}
      >
        <option defaultValue={"Categorias"}>Todos los productos</option>
        {mapMyCategories.length > 0
          ? mapMyCategories.map((category, idx) => (
              <option value={category} key={idx}>
                {category}
              </option>
            ))
          : null}
      </select>
    </div>
  );
}
