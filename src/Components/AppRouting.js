import React from "react";
import {Route, Routes } from "react-router-dom";
import DishesList from "./DishesList";
import AppDescription from "./AppDescription";

function AppRouting(){
  return(
  <main>
    <Routes>
        <Route exact path="/" element={<AppDescription/>} />
    </Routes>
    <Routes>
    <Route exact path="/dishesList" element={<DishesList/>} />
    </Routes>
  </main>
  );
}

export default AppRouting;
