import React from "react";
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

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/courses" element={<CourseList />} />
        <Route exact path="/myAccount" element={<MyAccount />} />
        <Route exact path="/aboutUs" element={<AboutUs />} />
        {/* <Route exact path="/aboutUs" element={<AboutUs />} /> */}
      </Routes>
    </div>
  );
}

export default App;
