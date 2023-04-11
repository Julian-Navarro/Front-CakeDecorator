import { useEffect, useState } from "react";

export default function FilterPurchase({
  allMyProducts,
  filterProductsByCategories,
}) {
  // console.log("FILTER ALL",allMyProducts)
  // const [render, setRender] = useState(false);
  const [select, setSelect] = useState("");
  const [mapMyCategories, setMyCategories] = useState([]);

  // console.log("MY SELECT", select);
  // console.log("FILTERED", filteredByCategory);

  function getAllCategories() {
    if (allMyProducts.length > 0) {
      allMyProducts.forEach((product) => {
        if (mapMyCategories.includes(product.category)) {
          // console.log("NO LO AGREGO")
        } else {
          mapMyCategories.push(product.category);
        }
      });
    }
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

  return (
    <div>
      <label>Filtrar: </label>
      <select
        name="categories"
        id="categories"
        onChange={(e) => [handlerSelect(e), filterProductsByCategories(select)]}
      >
        <option defaultValue={"Categorias"}>Categorias</option>
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
