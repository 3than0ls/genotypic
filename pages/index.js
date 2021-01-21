import Form from '~/components/InputForm/Form'
import Data from '~/components/Data/Data'
import { useState, useEffect } from 'react'
import OpenButton from '../components/InputForm/OpenButton'
import Landing from '../components/Landing/Landing'

// todo: punnett square interactivity, code cleanup

export default function Home() {
  // should probs combine these three in some sorta state object
  const [characters, setCharacters] = useState(1)
  const [fatherGenes, setFatherGene] = useState({ a: 'Aa' })
  const [motherGenes, setMotherGene] = useState({ a: 'Aa' })

  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  const [data, setData] = useState({})
  return (
    <div className="flex flex-row justify-start">
      <div
        className={`fixed z-10 w-full h-full bg-black duration-700 ease-in-out transition ${
          menuOpen ? 'opacity-75' : 'opacity-0 pointer-events-none'
        }`}
      />
      <OpenButton toggleMenu={toggleMenu} menuOpen={menuOpen} />
      <Form
        fatherGenes={fatherGenes}
        setFatherGene={setFatherGene}
        motherGenes={motherGenes}
        setMotherGene={setMotherGene}
        characters={characters}
        setCharacters={setCharacters}
        setData={setData}
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
      />

      {Object.keys(data).length !== 0 ? <Data data={data} /> : <Landing />}
    </div>
  )
}
