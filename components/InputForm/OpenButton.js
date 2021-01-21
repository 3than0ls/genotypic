import React from 'react'
import { Icon } from '../Icon'

export default function OpenButton({ toggleMenu, menuOpen }) {
  return (
    <button
      onClick={toggleMenu}
      className={`focus:outline-none fixed z-10 top-0 left-0 p-2 bg-app-black-2 rounded-br-xl border-b-4 border-r-4 border-app-red-3
       shadow-2xl hover:opacity-75 transform transition duration-250 ease-in-out
      ${menuOpen ? '-translate-x-full' : ''}`}
    >
      <Icon name="rightArrow" />
    </button>
  )
}
