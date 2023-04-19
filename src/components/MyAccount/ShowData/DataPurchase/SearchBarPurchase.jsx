import React, { useState } from "react";

export default function SearchBarPurchase({ getProductByName, resetProduct }) {
  const [input, setInput] = useState("");

  function handlerInputChange(e) {
    e.preventDefault();
    setInput(e.target.value);
    const resetSeletcs3 = document.getElementById("sorted");
    const resetSeletcs4 = document.getElementById("categories");
    resetSeletcs3.options.selectedIndex = 0;
    resetSeletcs4.options.selectedIndex = 0;
  }

  function cleanInput() {
    setInput("");
  }

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Buscar por nombre"
        onChange={(e) => handlerInputChange(e)}
      />
      <button onClick={() => getProductByName(input)}>🔎</button>
      <br />
      <button onClick={() => [resetProduct(), cleanInput()]}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/4140/4140789.png"
          alt="Sin imagen"
          height={"17"}
          width={"17"}
        />
      </button>
    </div>
  );
}
