import React, { useState } from "react";

export default function SearchBarPurchase({ getProductByName, resetProduct }) {
  const [input, setInput] = useState("");

  function handlerInputChange(e) {
    e.preventDefault();
    setInput(e.target.value);
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
