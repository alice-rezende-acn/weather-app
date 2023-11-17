import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

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
