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
      <Label text="Number of combinations produced" />
      <div className="text-2xl font-bold text-center">
        {data.combinationsNum}
      </div>
      <Label text="Number of unique genotypes" />
      <div className="text-2xl font-bold text-center">
        {data.uniqueGenotypeNum}
      </div>
      <Label text="Number of unique phenotypes" />
      <div className="text-2xl font-bold text-center">
        {data.uniquePhenotypeNum}
      </div>
      <Label text="Genotypes" />
      <List object={data.genotypes} total={data.combinationsNum} />
      <Label text="Phenotypes" />
      <List object={data.phenotypes} total={data.combinationsNum} />
    </div>
  )
}
