import React from 'react'
import Label from '../Label'
import PunnettSquare from '~/components/Data/PunnettSquare'
import List from './List'

export default function Data({ data }) {
  const uniqueFatherGametesNum = new Set(data.gametes[0]).size
  const uniqueMotherGametesNum = new Set(data.gametes[1]).size
  const fatherGametes = {}
  for (let fatherGamete of data.gametes[0]) {
    if (!fatherGametes[fatherGamete]) {
      fatherGametes[fatherGamete] = 0
    }
    fatherGametes[fatherGamete]++
  }
  const motherGametes = {}
  for (let motherGamete of data.gametes[1]) {
    if (!motherGametes[motherGamete]) {
      motherGametes[motherGamete] = 0
    }
    motherGametes[motherGamete]++
  }

  return (
    <div className="bg-app-gray-2 flex flex-col p-5 flex-grow items-center text-center min-w-192">
      <Label text={`Equation: ${data.equation}`} />
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

      <Label text="Number of unique gametes from father" />
      <div className="text-2xl font-bold text-center">
        {uniqueFatherGametesNum}
      </div>
      <Label text="Number of unique gametes from mother" />
      <div className="text-2xl font-bold text-center">
        {uniqueMotherGametesNum}
      </div>

      <Label text="Genotypes" />
      <List
        object={data.genotypes}
        total={data.combinationsNum}
        label="Genotypes"
      />
      <Label text="Phenotypes" />
      <List
        object={data.phenotypes}
        total={data.combinationsNum}
        label="Phenotypes"
      />

      <Label text="Father's Gametes" />
      <List
        object={fatherGametes}
        total={data.gametes[0].length}
        label="Father's Gametes"
      />

      <Label text="Mother's Gametes" />
      <List
        object={motherGametes}
        total={data.gametes[1].length}
        label="Mother's Gametes"
      />
    </div>
  )
}
