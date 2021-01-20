import React from 'react'
import CharactersInput from './CharactersInput'
import GenotypeInput from './GenotypeInput'
import Label from './Label'
import determineGenotypeFromObj from '~/logic/determineGenotypeFromObj'

export default function Form({
  fatherGenes,
  setFatherGene,
  motherGenes,
  setMotherGene,
  characters,
  setCharacters,
}) {
  const alphabet = 'abcdefgh'
  const addGene = (geneSex, setGeneSex) => {
    return (letter, newGene) => {
      setGeneSex({ ...geneSex, [letter]: newGene })
    }
  }

  return (
    <div className="w-128 border-b-4 border-r-4 border-blue-300 px-16 py-8 rounded-br-2xl">
      <Label text="Characters" />
      <CharactersInput
        fatherGenes={fatherGenes}
        setFatherGene={setFatherGene}
        motherGenes={motherGenes}
        setMotherGene={setMotherGene}
        setCharacters={setCharacters}
      />

      <Label text="Father" />
      {[...Array(characters).keys()].map((num) => (
        <GenotypeInput
          key={num}
          letter={alphabet[num]}
          setGene={addGene(fatherGenes, setFatherGene)}
        />
      ))}

      <Label text="Mother" />
      {[...Array(characters).keys()].map((num) => (
        <GenotypeInput
          key={num}
          letter={alphabet[num]}
          setGene={addGene(motherGenes, setMotherGene)}
        />
      ))}

      <Label text="Testcross" />
      <div className="text-2xl w-full border-4 rounded-2xl p-2 text-center">
        {determineGenotypeFromObj(fatherGenes)} x
        {determineGenotypeFromObj(motherGenes)}
      </div>
    </div>
  )
}
