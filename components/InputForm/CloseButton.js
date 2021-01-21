import React from 'react'
import { Icon } from '../Icon'

export default function CloseButton({ toggleMenu }) {
  return (
    <button
      onClick={toggleMenu}
      className="focus:outline-none transition hover:opacity-75 absolute top-0 right-0 mt-4 mr-4"
    >
      <Icon name="exit" />
    </button>
  )
}
