import React from 'react'
import Select from 'react-select'
import populatePersonGenes from '~/utils/populatePersonGenes'

export default function CharactersInput({
  fatherGenes,
  setFatherGene,
  motherGenes,
  setMotherGene,
  setCharacters,
}) {
  const options = [
    {
      value: 1,
      label: 1,
    },
    {
      value: 2,
      label: 2,
    },
    {
      value: 3,
      label: 3,
    },
    {
      value: 4,
      label: 4,
    },
    {
      value: 5,
      label: 5,
    },
    {
      value: 6,
      label: 6,
    },
  ]
  return (
    <div className="text-app-black-1">
      <Select
        options={options}
        defaultValue={options[0]}
        onChange={(option) => {
          setCharacters(option.value)
          populatePersonGenes(fatherGenes, setFatherGene, option.value)
          populatePersonGenes(motherGenes, setMotherGene, option.value)
        }}
      />
    </div>
  )
}
