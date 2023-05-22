import { Div, P, Button2 } from "../../utils/StyledComponents/StyledComponents";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import ShowProfileData from "./ShowData/DataProfile/Data&EditProfileCard";
import ShowPurchasesData from "./ShowData/DataPurchase/ShowPurchasesData";
import ShowMyCourses from "./ShowData/DataCourses/ShowCoursesData";
import { AiOutlineDatabase } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
import { GrUser } from "react-icons/gr";

export default function MyAccount() {
  const [selection, setSelection] = useState(false);

  function handlerChangeSelection(value) {
    setSelection(value);
  }

  return (
    <div>
      <Navbar />
      <Div alItems="flex-start">
        <Div
          flexDir="column"
          jfCont="slex-start"
          br="0 .5rem 0 0"
          wd="20%"
          hg="100vh"
          bg="#f687c7"
          pos="sticky"
          posTop="0px"
        >
          <br />
          <Div bg="#f687c7" wd="95%" bd="#fff">
            <GrUser fontSize="3rem" color="#fff" />
            <P wd="80%" fSize="1.4rem" color="#fff" fWeight="bold">
              Mi Cuenta
            </P>
          </Div>
          <Div
            flexDir="column"
            alItems="flex-end"
            bg="#f687c7"
            alSelf="flex-end"
            hg="40%"
            jfCont="space-evenly"
            wd="95%"
          >
            <Button2
              onClick={() => handlerChangeSelection("my-data")}
              pd=".5rem"
              br="1rem 0 0 1rem"
              hg="2rem"
              bg={selection === "my-data" ? "#fff" : "#f687c7"}
              wd="100%"
            >
              <AiOutlineDatabase
                color={selection === "my-data" ? "#f687c7" : "#fff"}
                fontSize="1.6rem"
              />
              <P
                cursor="pointer"
                ml=".5rem"
                color={selection === "my-data" ? "#f687c7" : "#fff"}
                fSize="1.1rem"
              >
                Perfil
              </P>
            </Button2>

            <Button2
              onClick={() => handlerChangeSelection("my-purchases")}
              pd=".5rem"
              br="1rem 0 0 1rem"
              hg="2rem"
              bg={selection === "my-purchases" ? "#fff" : "#f687c7"}
              wd="100%"
            >
              <MdOutlineShoppingBag
                color={selection === "my-purchases" ? "#f687c7" : "#fff"}
                fontSize="1.5rem"
              />
              <P
                cursor="pointer"
                ml=".5rem"
                color={selection === "my-purchases" ? "#f687c7" : "#fff"}
                fSize="1.1rem"
              >
                Compras
              </P>
            </Button2>

            <Button2
              onClick={() => handlerChangeSelection("my-courses")}
              pd=".5rem"
              br="1rem 0 0 1rem"
              hg="2rem"
              bg={selection === "my-courses" ? "#fff" : "#f687c7"}
              wd="100%"
            >
              <BsPersonWorkspace
                color={selection === "my-courses" ? "#f687c7" : "#fff"}
                fontSize="1.5rem"
              />
              <P
                cursor="pointer"
                ml=".5rem"
                color={selection === "my-courses" ? "#f687c7" : "#fff"}
                fSize="1.1rem"
              >
                Estudiar
              </P>
            </Button2>
          </Div>
        </Div>

        <Div wd="80%">
          {selection === "my-data" ? (
            <ShowProfileData />
          ) : selection === "my-purchases" ? (
            <ShowPurchasesData />
          ) : selection === "my-courses" ? (
            <ShowMyCourses />
          ) : null}
        </Div>
      </Div>
    </div>
  );
}
