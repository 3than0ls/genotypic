import Form from '~/components/InputForm/Form'
import Data from '~/components/Data/Data'
import { useState, useEffect } from 'react'
import OpenButton from '../components/InputForm/OpenButton'

export default function Home() {
  // should probs combine these three in some sorta state object
  const [characters, setCharacters] = useState(1)
  const [fatherGenes, setFatherGene] = useState({ a: 'Aa' })
  const [motherGenes, setMotherGene] = useState({ a: 'Aa' })

  const [menuOpen, setMenuOpen] = useState(true)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  const [data, setData] = useState({})
  useEffect(() => {
    console.log(data)
  }, [data])
  return (
    <div className="flex flex-row justify-start">
      <div
        className={`fixed w-full h-full bg-black duration-700 ease-in-out transition ${
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

      {Object.keys(data).length !== 0 ? <Data data={data} /> : <div>empty</div>}
    </div>
  )
}
