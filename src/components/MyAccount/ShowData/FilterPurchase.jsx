import { useEffect, useState } from "react";

export default function FilterPurchase({ allMyProducts }) {
  const [render, setRender] = useState(false);
  const [select, setSelect] = useState("");
  const [filteredByCategory, setFilteredByCategory] = useState([]);
  console.log("SELECT", select);

  function handlerSetRender() {
    setRender(true);
    console.log("render", render);
  }

  function handlerFilter() {
    const filtered = allMyProducts.filter(
      (product) => product.category === select
    );
    console.log("FILTERED", filtered);
  }

  function handlerSelect(e) {
    e.preventDefault();
    setSelect(e.target.value);
  }

  useEffect(() => {}, [render, select]);

  return (
    <div>
      <label>Tipos de categorias: </label>
      <select
        name="categories"
        id="categories"
        onClick={(e) => [handlerSelect(e)]}
        onChange={() => handlerFilter()}
      >
        <option
          defaultValue={"Seleccionar"}
          oncClick={() => handlerSetRender()}
        >
          Seleccionar
        </option>
        {allMyProducts.length > 0
          ? allMyProducts.map((product) => (
              <option value={product.category}>{product.category}</option>
            ))
          : null}
      </select>
    </div>
  );
}
