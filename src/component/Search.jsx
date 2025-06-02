import React from 'react'
import { FiSearch } from "react-icons/fi";
const Search = ({handleChange,value}) => {

  return (
    <div >
      <div className="flex items-center  rounded-lg p-2 shadow-sm search-bar">
        <FiSearch className="brand-dark-light" />
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow ml-2 outline-none brand-dark-light"
          onChange={handleChange}
          value={value}
        />
      </div>
    </div>
  )
}

export default Search