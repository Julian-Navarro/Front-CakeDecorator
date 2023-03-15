import React, { useEffect, useState } from "react";
// import "./App.css";
import {
  Route,
  Routes,
} from "react-router-dom"; /*Switch se reemplaza ahora por Routes */
import Home from "./components/Home/Home.jsx";
import AboutUs from "./components/AboutUs/AboutUs";
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import CourseList from "./components/CourseLists/CourseLists.jsx";
import MyAccount from "./components/MyAccount/MyAccount";
import FormPostUser from "./components/Login/FormPostUser";
import DashboardAdmin from "./components/DashboardAdmin/Dashboard/DashboardAdmin.jsx";

function App() {
  console.log("APP LOG");
  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("loggedUser"))
  );
  const [loggedUserFlagApp, setLoggedUserFlagApp] = useState(false);
  function handlerSetUserFlagApp() {
    // e.preventDefault();
    if (loggedUserFlagApp === false) {
      setLoggedUserFlagApp(true);
    } else {
      setLoggedUserFlagApp(false);
    }
  }

  useEffect(() => {}, [loggedUserFlagApp]);
  return (
    <div>
      <div className="App"></div>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <LandingPage handlerSetUserFlagApp={handlerSetUserFlagApp} />
          }
        />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/courses" element={<CourseList path={false} />} />
        <Route exact path="/myAccount" element={<MyAccount />} />
        <Route exact path="/aboutUs" element={<AboutUs />} />
        <Route exact path="/createAccount" element={<FormPostUser />} />
        {loggedUser !== null ? (
          loggedUser.role === "admin" ? (
            <Route exact path="/dashboardAdmin" element={<DashboardAdmin />} />
          ) : null
        ) : null}
      </Routes>
    </div>
  );
}

export default App;
