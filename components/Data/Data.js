import React from 'react'
import Label from '../Label'
import PunnettSquare from '~/components/Data/PunnettSquare'

export default function Data({ data }) {
  return (
    <div className="bg-gray-400 flex flex-col p-5 flex-grow items-center text-center min-w-192">
      <Label text={`Testcross: ${data.testcross}`} />
      <Label text="Punnett Square" />
      <PunnettSquare
        punnettSquare={data.punnettSquare}
        gametes={data.gametes}
      />
      <Label text="Number of produced genotypes" />
      <Label text="Number of produced phenotypes" />
      <Label text="Number of unique genotypes" />
      <Label text="Number of unique phenotypes" />
      <Label text="Genotypes" />
      <Label text="Phenotypes" />
    </div>
  )
}
