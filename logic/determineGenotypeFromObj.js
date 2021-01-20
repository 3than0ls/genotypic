const determineGenotypeFromObj = (person) => {
  let genotype = ''
  for (let gene in person) {
    genotype += person[gene]
  }
  return genotype
}

export default determineGenotypeFromObj
