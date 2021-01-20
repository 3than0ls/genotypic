const dihybrid = (fatherGenotype, motherGenotype, payload) => {
  for (let i = 0; i < fatherGenotype[0].length; i++) {
    for (let j = 0; j < motherGenotype[0].length; j++) {
      payload.gametes[0].push(fatherGenotype[0][i] + fatherGenotype[1][j])
      payload.gametes[1].push(motherGenotype[0][i] + motherGenotype[1][j])
      for (let k = 0; k < fatherGenotype[1].length; k++) {
        for (let l = 0; l < motherGenotype[1].length; l++) {
          const genotype =
            [fatherGenotype[0][i], motherGenotype[0][j]].sort().join('') +
            [fatherGenotype[1][k], motherGenotype[1][l]].sort().join('')
          const phenotype = genotype[0] + genotype[2]

          // you like math? i dont. randomly entered in values until i got the below values, producing a wanted result
          payload.punnettSquare[2 * j + l][2 * i + k] = {
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
  }
}

export default dihybrid
