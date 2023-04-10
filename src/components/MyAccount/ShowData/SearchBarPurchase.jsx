import React, { useState, useEffect } from "react";

export default function SearchBarPurchase({ getMyProducts }) {
  const [input, setInput] = useState("");

  function handlerInputChange(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por nombre"
        onChange={(e) => handlerInputChange(e)}
      />
      <button onClick={() => getMyProducts(input)}>Buscar</button>
      <br />
      <button onClick={()=> {getMyProducts()}}>Ver todo</button>
    </div>
  );
}
