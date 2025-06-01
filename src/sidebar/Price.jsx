import React, { useState } from "react";
import Checkbox from "../component/Checkbox";

const Price = ({ price }) => {
  const [selected, setSelected] = useState(null);
  return (
    <div className="mb-6">
      <h3 className="font-semibold text-lg mb-2 text-gray-700">Price</h3>
      <ul className="space-y-2">
        {price.map((item, index) => (
          <Checkbox
            key={index}
            index={index}
            item={item}
            name="rating"
            checked={selected === item}
            onChange={setSelected}
          />
        ))}
      </ul>
    </div>
  );
};

export default Price;
