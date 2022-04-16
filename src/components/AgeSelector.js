import { useState } from "react";
import Picker from "react-mobile-picker-scroll";

export default function AgeSelector() {
  const range = (start, end) => {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  };

  const [optionGroups] = useState({
    Year: range(1340, 1401),
  });
  const [valueGroups, setvalueGroups] = useState({
    Year: new Date().getFullYear(),
  });
  const handleChange = (name, value) => {
    console.log("name", name, "value", value);
    setvalueGroups({ ...valueGroups, [name]: value });
  };

  return (
    <div className="AgeSelector">
      {console.log("valuegroup", valueGroups)}

      <Picker
        optionGroups={optionGroups}
        valueGroups={valueGroups}
        onChange={handleChange}
      />
    </div>
  );
}
