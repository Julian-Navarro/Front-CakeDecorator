import { Div, P, Button2 } from "../../utils/StyledComponents/StyledComponents";
import React, { useState } from "react";
import ShowProfileData from "./ShowData/DataProfile/Data&EditProfileCard";
import ShowPurchasesData from "./ShowData/DataPurchase/ShowPurchasesData";
import ShowMyCourses from "./ShowData/DataCourses/ShowCoursesData";
import { AiOutlineDatabase } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { findUserById } from "../../redux/actions";
import s from "./MyAccount.module.css"
export default function MyAccount() {
  const dispatch = useDispatch()
  const [selection, setSelection] = useState("my-data");
  const user = useSelector((state)=>state.user)
  const userStorage = JSON.parse(window.localStorage.getItem("loggedUser"))
  function handlerChangeSelection(value) {
    setSelection(value);
  }
  useEffect(() => {
  dispatch(findUserById(userStorage.id));
},[])
useEffect(()=>{
  console.log(user);
},[user])
  return (
    <div>
      <Div alItems="flex-start"flexDir="column">
        <Div
          wd="100%"
          bg="#f687c7"
          mt="1.8rem"
          hg="6rem"
          br="0"
          pd="0"
          // alItems="flex-end"
          jfCont="space-between"
          className={s.containerTopBar}
        >
          <Div bg="#f687c7"wd="380px" 
            bd="#fff"
            alItems="center"pd="0 0 0 12px"hg="100%"
            jfCont="space-between"
            className={s.containerImgName}
          >
            <Div bg={"lightgray"}pd={user?.img?"2px":"8px"}br="2rem"wd="3.3rem"mt=".2rem">
              {
                user?.img 
                ? <img src={user.img} className={s.imgAvatar} />
                : <FaUser fontSize="1.5rem" color="#fff" />
              }
            </Div>

            <P color="#fff"fWeight="bold"fSize=".9rem"hg="100%"wd="300px">
              {`${user?.name} ${user?.surname}`}
            </P>
          </Div>

          {/* <Div bg="#f687c7"
            hg="100%"
            jfCont="space-evenly"
            alItems="flex-end"
            wd="70%"
            className={s.btnsSuccessContainer}
          >
            <Button2
              onClick={() => handlerChangeSelection("my-data")}
              pd=".5rem"
              br="8px 8px 0 0"
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
              br="8px 8px 0 0"
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
              br="8px 8px 0 0"
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
          </Div> */}
        </Div>

        <Div wd="100%"bg="#fff"br="0">
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
