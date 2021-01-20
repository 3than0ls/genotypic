// do you like loops

const tetrahybrid = (fatherGenotype, motherGenotype, payload) => {
  for (let i = 0; i < fatherGenotype[0].length; i++) {
    for (let j = 0; j < motherGenotype[0].length; j++) {
      for (let k = 0; k < fatherGenotype[1].length; k++) {
        for (let l = 0; l < motherGenotype[1].length; l++) {
          payload.gametes[0].push(
            fatherGenotype[0][i] +
              fatherGenotype[1][j] +
              fatherGenotype[2][k] +
              fatherGenotype[3][l]
          )
          payload.gametes[1].push(
            motherGenotype[0][i] +
              motherGenotype[1][j] +
              motherGenotype[2][k] +
              motherGenotype[3][l]
          )
          for (let m = 0; m < fatherGenotype[2].length; m++) {
            for (let n = 0; n < motherGenotype[2].length; n++) {
              for (let o = 0; o < fatherGenotype[3].length; o++) {
                for (let p = 0; p < motherGenotype[3].length; p++) {
                  const genotype =
                    [fatherGenotype[0][i], motherGenotype[0][j]]
                      .sort()
                      .join('') +
                    [fatherGenotype[1][k], motherGenotype[1][l]]
                      .sort()
                      .join('') +
                    [fatherGenotype[2][m], motherGenotype[2][n]]
                      .sort()
                      .join('') +
                    [fatherGenotype[3][o], motherGenotype[3][p]].sort().join('')
                  const phenotype = genotype
                    .split('')
                    .filter((_, index) => index % 2 === 0)
                    .join('')

                  // you like math? i dont. randomly entered in values until i got the below values, producing a wanted result
                  payload.punnettSquare[8 * j + 4 * l + 2 * m + o][
                    8 * i + 4 * k + 2 * n + p
                  ] = {
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
      }
    }
  }
  console.log(payload.punnettSquare)
}

export default tetrahybrid
