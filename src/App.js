import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import AboutUs from "./components/AboutUs/AboutUs";
import LandingPage from "./components/LandingPage/LandingPage";
import Courses from "./components/CourseList/Courses.jsx";
import CourseDetailCard from "./components/MyAccount/Card/Course/CourseDetailCard.jsx";
import PurchaseDetailCard from "./components/MyAccount/Card/Purchase/PurchaseDetailCard.jsx";
import MyAccount from "./components/MyAccount/MyAccount";
import FormPostUser from "./components/Login/FormPostUser";
import DashboardAdmin from "./components/DashboardAdmin/Dashboard/DashboardAdmin.jsx";
import ForgotPassword from "./components/ForgotPass/ForgotPassword.jsx";
import GenerateNewPass from "./components/ForgotPass/GenerateNewPass.jsx";
import Shop from "./components/Shop/Shop.jsx";
import Cart from "./components/Shop/Cart/Cart.jsx";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { Box } from "@chakra-ui/layout";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Navbar/Footer.jsx";
import s from "./App.module.css";
import DetailCourses from "./components/CourseList/DetailCourses/DetailCourses.jsx";
function App() {
  let userLocalStorage = JSON.parse(localStorage.getItem("loggedUser"));
  const [loggedUser, setLoggedUser] = useState(userLocalStorage);
  const [loggedUserFlagApp, setLoggedUserFlagApp] = useState(false);
  const width = useBreakpointValue({ base: "100%", md: "100%", lg: "1240px" });
  const breakPoint = useBreakpointValue({ base: "1", md: "2", lg: "3" });

  function handlerSetUserFlagApp() {
    if (loggedUserFlagApp === false) {
      setLoggedUserFlagApp(true);
    } else {
      setLoggedUserFlagApp(false);
    }
  }

  useEffect(() => {
    userLocalStorage = JSON.parse(localStorage.getItem("loggedUser"));
    setLoggedUser(userLocalStorage);
  }, [loggedUserFlagApp]);

  return (
    <Box
      w={"100vw"}
      display={"flex"}
      justifyContent={"center"}
      bg="#F6DBF5"
      className={s.boxContainer}
    >
      <Box padding={0} w={width} overflow={"hidden"}>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <LandingPage
                handlerSetUserFlagApp={handlerSetUserFlagApp}
                breakPoint={breakPoint}
              />
            }
          />
          <Route
            exact
            path="/forgotPassword"
            element={<ForgotPassword />}
          ></Route>
          <Route exact path="/courses/:id" element={<DetailCourses />}></Route>
          <Route
            exact
            path="/generateNewPass/:id"
            element={<GenerateNewPass />}
          ></Route>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/courses" element={<Courses path={false} />} />
          <Route exact path="/myAccount" element={<MyAccount />} />
          <Route
            exact
            path="/myAccount/courseDetail/:id"
            element={<CourseDetailCard />}
          />
          <Route
            exact
            path="/myAccount/purchaseDetail/:id"
            element={<PurchaseDetailCard />}
          />
          <Route exact path="/aboutUs" element={<AboutUs />} />
          <Route exact path="/createAccount" element={<FormPostUser />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/shop/cart" element={<Cart />} />

          {loggedUser !== null && loggedUser.role === "admin" ? (
            <Route exact path="/dashboardAdmin" element={<DashboardAdmin />} />
          ) : null}
        </Routes>
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
