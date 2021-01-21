import React from 'react'
import axios from 'axios'
import CharactersInput from './CharactersInput'
import GenotypeInput from './GenotypeInput'
import Label from '../Label'
import determineGenotypeFromObj from '~/logic/determineGenotypeFromObj'
import CalculateButton from './CalculateButton'

export default function Form({
  fatherGenes,
  setFatherGene,
  motherGenes,
  setMotherGene,
  characters,
  setCharacters,
  setData,
}) {
  const alphabet = 'abcd'
  const addGene = (geneSex, setGeneSex) => {
    return (letter, newGene) => {
      setGeneSex({ ...geneSex, [letter]: newGene })
    }
  }

  const onClick = () => {
    axios
      .get('/api/calculateOffspring', {
        params: {
          fatherGenotype: determineGenotypeFromObj(fatherGenes),
          motherGenotype: determineGenotypeFromObj(motherGenes),
        },
      })
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {})
  }

  return (
    <div className="fixed flex-shrink-0 min-width-96 md:w-96 xl:w-128 h-screen text-app-gray-2 bg-app-black-2 border-r-8 border-app-red-3 px-16 py-8 overflow-y-auto shadow-2xl">
      <Label text="Characters" />
      <CharactersInput
        fatherGenes={fatherGenes}
        setFatherGene={setFatherGene}
        motherGenes={motherGenes}
        setMotherGene={setMotherGene}
        setCharacters={setCharacters}
      />
      <hr className="border-t-3 my-12 border-white" />

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

      <hr className="border-t-3 my-12 border-white" />
      <Label text="Testcross" />
      <div className="text-2xl text-black bg-app-gray-2 w-full border-4 border-app-red-2 rounded-2xl p-2 text-center">
        {`${determineGenotypeFromObj(fatherGenes)} x 
          ${determineGenotypeFromObj(motherGenes)}`}
      </div>
      <hr className="border-t-3 my-12 border-white" />
      <CalculateButton onClick={onClick} />
    </div>
  )
}
