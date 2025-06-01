import React, { useState } from 'react'
import Checkbox from '../component/Checkbox.jsx'

const Color = ({ color }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="mb-6">
      <h3 className="font-semibold text-lg mb-2 text-gray-700">Color</h3>
      <ul className="space-y-2">
        {color.map((item, index) => (
          <Checkbox
            key={index}
            index={index}
            item={item}
            name="color"
            checked={selected === item}
            onChange={setSelected}
          />
        ))}
      </ul>
    </div>
  )
}

export default Color