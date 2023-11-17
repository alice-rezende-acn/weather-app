import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import fetchCityData from "./utils/fetchCityData";

export default function Layout({ unit, setUnit, lang, setLang, handleClick }) {
  return (
    <div className="App">
      <Header
        unit={unit}
        setUnit={setUnit}
        handleClick={handleClick}
        lang={lang}
        setLang={setLang}
      />
      <Outlet />
    </div>
  );
}
