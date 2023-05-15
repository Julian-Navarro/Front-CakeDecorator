import React, { useState } from "react";
import { GrPowerReset } from "react-icons/gr";
import { FcSearch } from "react-icons/fc";

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
      <button onClick={() => getProductByName(input)}>
        <FcSearch size={20} />
      </button>
      <br />
      <button onClick={() => [resetProduct(), cleanInput()]}>
        <GrPowerReset />
      </button>
    </div>
  );
}
