import React from "react";
import './style.css'
const Checkbox = ({ index, item, name, checked, onChange }) => {
  return (
    <li className="flex items-center space-x-2 p-1 rounded filter transition">
      <input
        type="radio"
        id={`radio-${index}`}
        name={name}
        checked={checked}
        onChange={() => onChange(item)}
        className="radio w-4 h-4"
      />
      <label
        htmlFor={`radio-${index}`}
        className={`cursor-pointer brand-dark-light select-none ${
          checked ? "font-semibold brand-dark" : ""
        }`}
      >
        {item}
      </label>
    </li>
  );
};

export default Checkbox;
