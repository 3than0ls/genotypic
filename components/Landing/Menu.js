import React, { useState } from 'react'
import Label from '../Label.js'
import Instructions from './Texts/Instructions'
import API from './Texts/API'
import About from './Texts/About'

export default function Menu() {
  const [section, setSection] = useState('instructions')
  const sections = {
    instructions: {
      title: 'Instructions',
      text: <Instructions />,
    },
    api: {
      title: 'API Usage',
      text: <API />,
    },
    about: {
      title: 'About',
      text: <About />,
    },
  }
  return (
    <div className="my-24 w-1/2 min-w-192 flex flex-col items-center text-app-black-2">
      <div className="flex flex-row w-2/3">
        {Object.keys(sections).map((key) => (
          <div key={key} className="flex flex-1 flex-col max-w-7xl mx-4">
            <button
              className={`focus:outline-none box-content hover:opacity-50 transition ease-in-out text-xl `}
              onClick={() => setSection(key)}
            >
              {sections[key].title}
            </button>
            <hl
              className={`transition ease-in-out ${
                section === key ? 'border-b-4 border-app-gray-1' : 'border-b-4'
              }`}
            />
          </div>
        ))}
      </div>
      <div className="mt-8 text-center w-1/2 text-lg">
        {sections[section].text}
      </div>
    </div>
  )
}
