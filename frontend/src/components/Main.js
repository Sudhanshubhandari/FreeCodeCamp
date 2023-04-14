import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import SignIn from "./User/SignIn";
import SignUp from "./User/SignUp";
import Cources from "./Courses/Courses";
function Main() {
  return (
  
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Courses" element={<Cources />} />
      </Routes>

  );
}

export default Main;
