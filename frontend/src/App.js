import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import Header from "./components/Home/Header";
import Main from "./components/Main";

function App() {
  return (
    <Router>
      <Header />
      <Main />
    </Router>
  );
}
export default App