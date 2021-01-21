import Form from '~/components/InputForm/Form'
import Data from '~/components/Data/Data'
import { useState, useEffect } from 'react'

export default function Home() {
  // should probs combine these three in some sorta state object
  const [characters, setCharacters] = useState(1)
  const [fatherGenes, setFatherGene] = useState({ a: 'Aa' })
  const [motherGenes, setMotherGene] = useState({ a: 'Aa' })

  const [data, setData] = useState({})
  useEffect(() => {
    console.log(data)
  }, [data])
  return (
    <div className="relative bg-app-gray-2 flex flex-row justify-start">
      <Form
        fatherGenes={fatherGenes}
        setFatherGene={setFatherGene}
        motherGenes={motherGenes}
        setMotherGene={setMotherGene}
        characters={characters}
        setCharacters={setCharacters}
        setData={setData}
      />
      {Object.keys(data).length !== 0 ? <Data data={data} /> : <div>empty</div>}
    </div>
  )
}
