import React from 'react'

export default function Banner() {
  return (
    <div className="relative w-full h-40 mt-24">
      <img
        className="w-full h-full object-cover"
        src="/banner.jpg"
        alt="banner"
      />
      <div className="absolute z-0 top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="p-16 bg-white shadow-2xl transform scale-110 text-7xl text-app-black-2">
          Welcome!
        </div>
      </div>
    </div>
  )
}
