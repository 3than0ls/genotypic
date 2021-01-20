import Form from '~/components/InputForm/Form'
import { useState, useEffect } from 'react'

export default function Home() {
  const [characters, setCharacters] = useState(1)
  const [fatherGenes, setFatherGene] = useState({ a: 'Aa' })
  const [motherGenes, setMotherGene] = useState({ a: 'Aa' })
  useEffect(() => {
    console.log(characters)
  }, [fatherGenes])
  return (
    <div>
      <Form
        fatherGenes={fatherGenes}
        setFatherGene={setFatherGene}
        motherGenes={motherGenes}
        setMotherGene={setMotherGene}
        characters={characters}
        setCharacters={setCharacters}
      />
    </div>
  )
}
