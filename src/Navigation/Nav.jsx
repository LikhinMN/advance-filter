import React from 'react'
import './style.css'
import { FaOpencart } from "react-icons/fa"
import { LuUserRound } from "react-icons/lu"

const Nav = () => {
  return (
    <header className="bg-white">
      <nav className="flex  justify-around items-center px-6 py-4 gap-4">
        <div className="text-2xl font-bold brand-dark mb-2 sm:mb-0 tracking-tight">
          Sneaker Shop
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center p-2 icon-bacground rounded-full  transition">
            <FaOpencart className="text-2xl brand-dark" />
          </div>
          <div className="flex items-center justify-center p-2 icon-bacground rounded-full transition">
            <LuUserRound className="text-2xl brand-dark"/>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Nav