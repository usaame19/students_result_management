import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Header />
      <div className="bg-gray-100 pt-8 pb-8">
      <Outlet />
      </div>
      <Footer /> 
    </>
  );
}

export default App;
