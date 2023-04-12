import React, { useEffect, useState } from "react";

export default function OrderByName({ allMyProducts, getSortedArray }) {
  const [sortedByNameProducts, setSortedProducts] = useState([]);
  const [select, setSelect] = useState("");

  function handlerSelect(e) {
    setSelect(e.target.value);
  }

  function sortedArray(e) {
    if (e.target.value === "todos") {
      setSortedProducts(allMyProducts);
    } else if (e.target.value === "ascendente") {
      const sorted_A_Z = allMyProducts
        .map((product) => product)
        .sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          } else {
            return 0;
          }
        });
      setSortedProducts(sorted_A_Z);
    } else {
      const sorted_Z_A = allMyProducts
        .map((product) => product)
        .sort((a, b) => {
          if (a.name > b.name) {
            return -1;
          }
          if (b.name > a.name) {
            return 1;
          } else {
            return 0;
          }
        });
      setSortedProducts(sorted_Z_A);
    }
  }

  useEffect(() => {
    if (select !== "") {
      getSortedArray(sortedByNameProducts);
      setSelect("");
    }
  });

  return (
    <div>
      <label>Ordenar: </label>
      <select
        name="sorted"
        id="sorted"
        onChange={(e) => [
          handlerSelect(e),
          sortedArray(e),
          getSortedArray(sortedByNameProducts),
        ]}
      >
        <option value="todos">Todos</option>
        <option value="ascendente">A-Z</option>
        <option value="descendente">Z-A</option>
      </select>
    </div>
  );
}
