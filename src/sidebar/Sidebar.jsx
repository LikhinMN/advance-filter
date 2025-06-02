import React, { useState } from 'react'
import Color from './Color.jsx'
import Price from './Price.jsx'
import Brand from './Brand.jsx'
import Category from './Category.jsx'
import { FiFilter } from "react-icons/fi";
import Data from '../../db/data.jsx'
import "./style.css"

const Sidebar = ({setSelected}) => {
  const [open, setOpen] = useState(false);

  const uniqueBrands = ["All brands", ...new Set(Data.map(item => item.company))];
  const uniqueCategories = ["All",...new Set(Data.map(item => item.category))];
  const uniqueColors = ["All",...new Set(Data.map(item => item.color))];
  const priceRanges = [
    "Under $50",
"$50 - $100",
    "$100 - $200",
    "above-200" ,
  ];
  return (
    <>
      <button
        className="fixed bottom-6 right-6 z-30 md:hidden brand-dark text-white p-4 rounded-full shadow-lg focus:outline-none brand-dark-light-1 transition"
        onClick={() => setOpen(!open)}
        aria-label="Toggle filter sidebar"
      >
        <FiFilter className="text-2xl" />
      </button>
      <aside
        className={`
          w-full max-w-xs bg-white rounded-lg shadow-md border border-gray-100 p-4 sm:p-6 space-y-8
          fixed z-20 top-0 left-0 h-full overflow-y-auto
          md:static md:h-[calc(100vh-2rem)] md:overflow-y-auto md:rounded-lg md:shadow-md md:mt-0
          transition-transform duration-300
          ${open ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-semibold flex items-center gap-2 brand-dark mb-2">
            <span>Filter</span>
          </h2>
          <button
            className="md:hidden mark cursor-pointer text-2xl"
            onClick={() => setOpen(false)}
            aria-label="Close filter sidebar"
          >
            &times;
          </button>
        </div>
        <hr className="mb-4 border-gray-200" />
        <Brand brand={uniqueBrands} setSelected={setSelected}/>
        <Category category={uniqueCategories} setSelected={setSelected}/>
        <Price price={priceRanges} setSelected={setSelected}/>
        <Color color={uniqueColors} setSelected={setSelected}/>
      </aside>
      {open && (
        <div
          className="fixed inset-0 z-10 md:hidden bg-black/30 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  )
}

export default Sidebar