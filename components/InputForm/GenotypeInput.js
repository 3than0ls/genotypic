import React from 'react'
import Select from 'react-select'

export default function GenotypeInput({ letter, setGene }) {
  const options = [
    {
      value: `${letter.toUpperCase()}${letter.toUpperCase()}`,
      label: `${letter.toUpperCase()}${letter.toUpperCase()} (Dominant Homozygous)`,
    },
    {
      value: `${letter.toUpperCase()}${letter.toLowerCase()}`,
      label: `${letter.toUpperCase()}${letter.toLowerCase()} (Heterozygous)`,
    },
    {
      value: `${letter.toLowerCase()}${letter.toLowerCase()}`,
      label: `${letter.toLowerCase()}${letter.toLowerCase()} (Recessive Homozygous)`,
    },
  ]
  return (
    <div>
      <Select
        options={options}
        defaultValue={options[1]}
        onChange={(option) => setGene(letter, option.value)}
      />
    </div>
  )
}
