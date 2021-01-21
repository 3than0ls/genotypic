// do you like loops

const pentahybrid = (fatherGenotype, motherGenotype, payload) => {
  for (let i = 0; i < fatherGenotype[0].length; i++) {
    for (let j = 0; j < motherGenotype[0].length; j++) {
      for (let k = 0; k < fatherGenotype[1].length; k++) {
        for (let l = 0; l < motherGenotype[1].length; l++) {
          for (let m = 0; m < fatherGenotype[2].length; m++) {
            payload.gametes[0].push(
              fatherGenotype[0][i] +
                fatherGenotype[1][j] +
                fatherGenotype[2][k] +
                fatherGenotype[3][l] +
                fatherGenotype[4][m]
            )
            payload.gametes[1].push(
              motherGenotype[0][i] +
                motherGenotype[1][j] +
                motherGenotype[2][k] +
                motherGenotype[4][m]
            )
            for (let n = 0; n < motherGenotype[2].length; n++) {
              for (let o = 0; o < fatherGenotype[3].length; o++) {
                for (let p = 0; p < motherGenotype[3].length; p++) {
                  for (let q = 0; q < fatherGenotype[4].length; q++) {
                    for (let r = 0; r < motherGenotype[4].length; r++) {
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
                        [fatherGenotype[3][o], motherGenotype[3][p]]
                          .sort()
                          .join('') +
                        [fatherGenotype[3][q], motherGenotype[3][r]]
                          .sort()
                          .join('')
                      const phenotype = genotype
                        .split('')
                        .filter((_, index) => index % 2 === 0)
                        .join('')

                      // you like math? i dont. randomly entered in values until i got the below values, producing a wanted result
                      payload.punnettSquare[16 * j + 8 * l + 4 * n + 2 * p + r][
                        16 * i + 8 * k + 4 * m + 2 * o + q
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
    }
  }
}

export default pentahybrid
