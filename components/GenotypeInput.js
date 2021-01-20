import React from 'react'

export default function GenotypeInput({ name }) {
  return (
    <div>
      <label>Gene 1</label>
      <select>
        <option>{name.toUpperCase()} (Dominant Homozygous)</option>
        <option>{name} (Heterzygous)</option>
        <option>{name} (Recessive Homozygous)</option>
      </select>
    </div>
  )
}
