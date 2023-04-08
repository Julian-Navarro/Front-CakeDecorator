import React, { useState, useEffect } from "react";
import axios from "axios";
import { HOST } from "../../../utils";

export default function SearchBarPurchase() {
  // const [searched, setSearched] = useState([])
  // console.log("ENCONTRADOS", searched)
  const [input, setInput] = useState("");
  console.log("INPUT BAR", input);

  function handlerInputChange(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  async function handlerSearchInput(e) {
    e.preventDefault();
    return async function (dispatch) {
      const finded = await axios.get(
        `${HOST}/products/getByName?name=${input.toLowerCase()}`
      );
      dispatch({
        type: "GET_BY_NAME",
        payload: finded.data
    })
    };
    
    // setSearched(finded.data)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por nombre"
        onChange={(e) => handlerInputChange(e)}
      />
      <button onClick={(e) => handlerSearchInput(e)}>Buscar</button>
    </div>
  );
}
