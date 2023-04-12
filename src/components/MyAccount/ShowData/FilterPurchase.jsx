import { useEffect, useState } from "react";

export default function FilterPurchase({
  allMyProducts,
  filterProductsByCategories,
  reset,
}) {
  const [select, setSelect] = useState("");
  const [mapMyCategories, setMapMyCategories] = useState([]);
  console.log("RESET EN HIJO", reset);

  function getAllCategories() {
    if (allMyProducts.length > 0) {
      allMyProducts.forEach((product) => {
        if (mapMyCategories.includes(product.category)) {
          //NO SUCEDE NADA SI ES TRUE
        } else {
          mapMyCategories.push(product.category);
        }
      });
    }
  }

  function resetSelect() {
    setMapMyCategories(mapMyCategories);
  }

  function handlerSelect(e) {
    e.preventDefault();
    setSelect(e.target.value);
  }

  useEffect(() => {
    getAllCategories();
  });

  useEffect(() => {
    if (select !== "") {
      console.log("ME RENDERIZO");
    }
  });

  useEffect(() => {
    if (select !== "") {
      filterProductsByCategories(select);
      setSelect("");
    }
  });

  useEffect(() => {
    if (reset === true) {
      resetSelect();
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
        <option defaultValue={"Categorias"}>Todo</option>
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
