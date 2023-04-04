import s from "../DashboardAdmin/Dashboard/DashboardAdmin.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import ShowProfileData from "./Cards/Profile/ProfileDataCard";
import ShowPurchasesData from "./ShowData/ShowPurchasesData";
import ShowMyCourses from "./ShowData/ShowCoursesData";
import { HOST } from "../../utils";

export default function MyAccount() {
  const [selection, setSelection] = useState(false);
  // const [allMyCourses, setAllMyCourses] = useState([]);
  
  // console.log("ALL PRODUCT", allMyProducts)

  // async function getMyCourses() {
  //   const response = await axios.get(
  //     `${HOST}/courses/getUserCourses?id=${userInfo.id}`
  //   );
  //   setAllMyCourses(response.data);
  // }
  

  function handlerChangeSelection(e) {
    e.preventDefault();
    setSelection(e.target.value);
  }

  useEffect(()=>{

  },[selection])

  return (
    <div>
      <Navbar />
      <h2>Mi cuenta</h2>
      <br />
      <div className={s.divContainer}>
        <div className={s.divDashboardLeftContainer}>
          <button onClick={(e) => handlerChangeSelection(e)} value="my-data">
            Mis datos
          </button>
          <button
            onClick={(e) => handlerChangeSelection(e)}
            value="my-purchases"
          >
            Compras
          </button>
          <button
            onClick={(e) => handlerChangeSelection(e)}
            value="my-courses"
          >
            Ver mis cursos
          </button>
        </div>
        <div className={s.divDashboardRightContainer}>
          <h2>CONTAINER INFO MY ACCOUNT</h2>
          {selection === false ? (
            <h2>Explorar información</h2>
          ) : selection === "my-data" ? (
            <ShowProfileData />
          ) : selection === "my-purchases" ? (
            <ShowPurchasesData />
          ) : selection === "my-courses" ? (
            <ShowMyCourses />
          ) : null}
        </div>
      </div>
    </div>
  );
}
