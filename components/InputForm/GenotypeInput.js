import React, { useState } from 'react'
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
  // const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  // const alphabetOptions = alphabet.split('').map((letter) => {
  //   return { value: letter, label: letter }
  // })
  return (
    <div className="text-app-black-1 mb-1 flex flex-row">
      <div className="w-3/4 mr-1">
        <Select
          options={options}
          defaultValue={options[1]}
          onChange={(option) => setGene(letter, option.value)}
        />
      </div>
      {/* <div className=" ml-1 w-1/4">
        <Select
          options={alphabetOptions}
          defaultValue={alphabetOptions[alphabet.indexOf(letter)]}
          onChange={(option) => setLetter(option.value)}
        />
      </div> */}
    </div>
  )
}
