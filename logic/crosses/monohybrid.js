const monohybrid = (fatherGenotype, motherGenotype, payload) => {
  for (let i = 0; i < fatherGenotype[0].length; i++) {
    payload.gametes[0].push(fatherGenotype[0][i])
    payload.gametes[1].push(motherGenotype[0][i])
    for (let j = 0; j < motherGenotype[0].length; j++) {
      const genotype = [fatherGenotype[0][i], motherGenotype[0][j]]
        .sort()
        .join('')
      const phenotype = genotype
        .split('')
        .filter((_, index) => index % 2 === 0)
        .join('')

      // you like math? i dont. randomly entered in values until i got the below values, producing a wanted result
      payload.punnettSquare[j][i] = {
        genotype,
        phenotype,
      }

      if (!payload.genotypes[genotype]) {
        payload.genotypes[genotype] = 0
      }
      payload.genotypes[genotype]++

      if (!payload.phenotypes[phenotype]) {
        payload.phenotypes[phenotype] = 0
      }
      payload.phenotypes[phenotype]++
    }
  }
}

export default monohybrid
