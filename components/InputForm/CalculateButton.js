import React from 'react'

export default function CalculateButton({ onClick }) {
  return (
    <button
      className="mx-auto w-full h-16 text-3xl font-semibold shadow-xl bg-app-red-1 border-4 my-4 border-app-black-1 rounded-2xl focus:outline-none transition hover:bg-opacity-75 duration-500 ease-in-out transform hover:scale-105"
      onClick={onClick}
    >
      Calculate
    </button>
  )
}
