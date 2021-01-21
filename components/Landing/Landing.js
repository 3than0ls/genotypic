import React from 'react'
import Label from '../Label'
import Banner from './Banner'
import Menu from './Menu'

export default function Landing() {
  return (
    <div className="bg-app-gray-2 flex flex-col items-center text-center ">
      <Banner />
      <Menu />
    </div>
  )
}
