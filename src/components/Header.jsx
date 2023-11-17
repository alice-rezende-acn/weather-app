import React from "react";
import Search from "./Search";
import ToggleButtons from "./ToggleButtons";

export default function Header({ unit, setUnit, handleClick, lang, setLang }) {
  return (
    <div className="action-bar">
      <div className="weather-system">
        <ToggleButtons
          currentValue={unit}
          options={[
            { value: "metric", label: "°C" },
            { value: "imperial", label: "°F" },
          ]}
          onToggle={setUnit}
        />
      </div>
      <Search onClickHandle={handleClick} />
      <div className="weather-system">
        <ToggleButtons
          currentValue={lang}
          options={[
            { value: "EN", label: "EN" },
            { value: "FR", label: "FR" },
          ]}
          onToggle={setLang}
        />
      </div>
    </div>
  );
}
