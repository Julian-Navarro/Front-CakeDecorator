import s from "../DashboardAdmin/Dashboard/DashboardAdmin.module.css";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import ShowProfileData from "./ShowData/DataProfile/ProfileDataCard";
import ShowPurchasesData from "./ShowData/DataPurchase/ShowPurchasesData";
import ShowMyCourses from "./ShowData/DataCourses/ShowCoursesData";
import { AiOutlineDatabase } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
// import { SiCoursera } from "react-icons/si";
import { BsPersonWorkspace } from "react-icons/bs";
import { GrUser } from "react-icons/gr";

export default function MyAccount() {
  const [selection, setSelection] = useState(false);

  function handlerChangeSelection(e) {
    e.preventDefault();
    setSelection(e.target.value);
  }

  return (
    <div>
      <Navbar />
      <br />
      <div className={s.divContainer}>
        <div className={s.divDashboardLeftContainer}>
        <GrUser/><h2> Administrar cuenta</h2>
          <button onClick={(e) => handlerChangeSelection(e)} value="my-data">
            <AiOutlineDatabase /> Mis datos
          </button>
          <button
            onClick={(e) => handlerChangeSelection(e)}
            value="my-purchases"
          >
            <MdOutlineShoppingBag /> Compras
          </button>
          <button onClick={(e) => handlerChangeSelection(e)} value="my-courses">
            <BsPersonWorkspace /> Cursos adquiridos
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
