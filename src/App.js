import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import AboutUs from "./components/AboutUs/AboutUs";
import LandingPage from "./components/LandingPage/LandingPage";
import CourseList from "./components/CourseList/CourseList.jsx";
import CourseDetailCard from "./components/MyAccount/Card/Course/CourseDetailCard.jsx";
import PurchaseDetailCard from "./components/MyAccount/Card/Purchase/PurchaseDetailCard.jsx";
import MyAccount from "./components/MyAccount/MyAccount";
import FormPostUser from "./components/Login/FormPostUser";
import DashboardAdmin from "./components/DashboardAdmin/Dashboard/DashboardAdmin.jsx";
import ForgotPassword from "./components/ForgotPass/ForgotPassword.jsx";
import GenerateNewPass from "./components/ForgotPass/GenerateNewPass.jsx";
import Shop from "./components/Shop/Shop.jsx";
import "./App.css";
import Cart from "./components/Shop/Cart/Cart.jsx";
import UpdateMyInfo from "./components/MyAccount/ShowData/DataProfile/UpdateMyInfo.jsx";

function App() {
  // console.log("APP LOG");
  const userLocalStorage = JSON.parse(localStorage.getItem("loggedUser"));
  const [loggedUser, setLoggedUser] = useState(userLocalStorage);
  const [loggedUserFlagApp, setLoggedUserFlagApp] = useState(false);
  function handlerSetUserFlagApp() {
    // e.preventDefault();
    if (loggedUserFlagApp === false) {
      setLoggedUserFlagApp(true);
    } else {
      setLoggedUserFlagApp(false);
    }
  }

  useEffect(() => {
    // console.log("RENDERING APP ROUTES");
    // console.log(loggedUser);
  }, [loggedUserFlagApp, loggedUser]);
  return (
    <div>
      <div className="App"></div>

      <Routes>
        <Route
          exact
          path="/"
          element={
            <LandingPage handlerSetUserFlagApp={handlerSetUserFlagApp} />
          }
        />
        <Route
          exact
          path="/forgotPassword"
          element={<ForgotPassword />}
        ></Route>
        <Route
          exact
          path="/generateNewPass/:id"
          element={<GenerateNewPass />}
        ></Route>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/courses" element={<CourseList path={false} />} />
        <Route exact path="/myAccount" element={<MyAccount />} />
        <Route exact path="/myAccount/courseDetail/:id" element={<CourseDetailCard />}/>
        <Route exact path="/myAccount/purchaseDetail/:id" element={<PurchaseDetailCard />}/>
        <Route exact path="/aboutUs" element={<AboutUs />} />
        <Route exact path="/createAccount" element={<FormPostUser />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/shop/cart" element={<Cart />} />
        <Route exact path="/updateUser" element={<UpdateMyInfo />} />

        {loggedUser !== null ? (
          loggedUser.role === "admin" ? (
            <>
              <Route
                exact
                path="/dashboardAdmin"
                element={<DashboardAdmin />}
              />
            </>
          ) : null
        ) : null}
      </Routes>
    </div>
  );
}

export default App;
