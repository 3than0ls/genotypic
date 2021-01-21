import React from 'react'
import Label from '../Label'
import PunnettSquare from '~/components/Data/PunnettSquare'
import List from './List'

export default function Data({ data }) {
  return (
    <div className="bg-app-gray-2 flex flex-col p-5 flex-grow items-center text-center min-w-192">
      <Label text={`Testcross: ${data.testcross}`} />
      <Label text="Punnett Square" />
      <PunnettSquare
        punnettSquare={data.punnettSquare}
        gametes={data.gametes}
      />
      <Label text="Number of produced genotypes" />
      <Label text="Number of unique genotypes" />
      <Label text="Number of unique phenotypes" />
      <Label text="Genotypes" />
      <List object={data.genotypes} total={data.genotypeCombinationsNum} />
      <Label text="Phenotypes" />
      <List
        object={data.phenotypes}
        total={data.uniquePhenotypeCombinationsNum}
      />
    </div>
  )
}
