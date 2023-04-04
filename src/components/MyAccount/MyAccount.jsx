import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import ShowProfileData from "./ShowData/ShowProfileData";
import ShowPurchases from "./ShowData/ShowPurchases";
import ShowMyCourses from "./ShowData/ShowCourses";

export default function MyAccount() {
  const [selection, setSelection] = useState("");
  // console.log("SLECT", selection);

  function handlerShowMyData() {
    setSelection("my-data");
  }
  function handlerShowPurchases() {
    setSelection("my-purchases");
  }
  function handlerShowCourses() {
    setSelection("my-courses");
  }

  return (
    <div>
      <Navbar />
      <button onClick={(e) => handlerShowMyData(e)}>Mis datos</button>
      <button onClick={(e) => handlerShowPurchases(e)}>Compras realizadas</button>
      <button onClick={(e) => handlerShowCourses(e)}>Ver mis cursos</button>
      {selection === "my-data" ? (
        <ShowProfileData />
      ) : selection === "my-purchases" ? (
        <ShowPurchases />
      ) : selection === "my-courses" ? (
        <ShowMyCourses />
      ) : null}
    </div>
  );
}
