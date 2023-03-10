import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import CoursesList from "./components/CourseLists/CourseLists";
import AboutUs from "./components/AboutUs/AboutUs";
import MyAccount from "./components/MyAccount/MyAccount";

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/courses" element={<CoursesList />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/myAccount" element={<MyAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
