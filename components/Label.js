import React from 'react'

export default function Label({ text }) {
  return (
    <div className="font-bold text-4xl mt-6 mb-3 transition hover:opacity-75">
      {text}
    </div>
  )
}
