import React, { useState } from "react";

export default function SearchCourses({ getCoursesByName, resetCourses }) {
  const [input, setInput] = useState("");

  function handlerInputChange(e) {
    e.preventDefault();
    setInput(e.target.value);
    const resetSeletcs1 = document.getElementById("types");
    const resetSeletcs2 = document.getElementById("category");
    const resetSeletcs3 = document.getElementById("sorted-order");
    resetSeletcs1.options.selectedIndex = 0;
    resetSeletcs2.options.selectedIndex = 0;
    resetSeletcs3.options.selectedIndex = 0;
  }

  function cleanInput() {
    setInput("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por titulo"
        onChange={(e) => handlerInputChange(e)}
        value={input}
      />
      <button onClick={() => [getCoursesByName(input), cleanInput()]}>
        🔎
      </button>
      <button onClick={() => [resetCourses(), cleanInput()]}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/4140/4140789.png"
          alt="sin imagen"
          height={"17px"}
          width={"17px"}
        />
      </button>
    </div>
  );
}
