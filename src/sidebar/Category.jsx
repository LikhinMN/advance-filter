import React, { useState } from 'react'
import Checkbox from '../component/Checkbox.jsx'

const Category = ({ category }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="mb-6">
      <h3 className="font-semibold text-lg mb-2 text-gray-700">Category</h3>
      <ul className="space-y-2">
        {category.map((item, index) => (
          <Checkbox
            key={index}
            index={index}
            item={item}
            name="category"
            checked={selected === item}
            onChange={setSelected}
          />
        ))}
      </ul>
    </div>
  )
}

export default Category