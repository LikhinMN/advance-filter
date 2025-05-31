import React from 'react'
import './style.css'
import { FaOpencart } from "react-icons/fa"
import { LuUserRound } from "react-icons/lu"

const Nav = () => {
  return (
    <div>
      <nav className="flex justify-around items-center p-4 gap-4 sm:gap-0">
        <div className="text-2xl font-bold brand-dark mb-2 sm:mb-0">
          Sneaker Shop
        </div>
        <div className="flex justify-around items-center gap-4">
          <div className="flex items-center justify-center p-2 icon-bacground rounded-full">
            <FaOpencart className="text-2xl brand-dark" />
          </div>
          <div className="flex items-center justify-center p-2 icon-bacground rounded-full">
            <LuUserRound className="text-2xl brand-dark" />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav