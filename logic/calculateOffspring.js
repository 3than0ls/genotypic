import dihybrid from './crosses/dihybrid.js'
import monohybrid from './crosses/monohybrid.js'
import trihybrid from './crosses/trihybrid.js'
import tetrahybrid from './crosses/tetrahybrid.js'
import pentahybrid from './crosses/pentahybrid.js'
import sextuplehybrid from './crosses/sextuplehybrid.js'

// todo: fix tryhybrid punnett, make tetrahybrid, pentahybrid
// in the future, investigate in recursive functions to solve

const makeArray = (genotype) => {
  const arrGenotype = []
  for (let i = 0; i < genotype.length; i += 2) {
    arrGenotype.push(genotype.slice(i, i + 2))
  }
  return arrGenotype
}

/**
 * @param {string} fatherGenotype Father Genotype (as a string)
 * @param {string} motherGenotype Mother Genotype (as a string)
 */
const calculateOffspring = (fatherGenotype, motherGenotype) => {
  if (
    fatherGenotype.length !== motherGenotype.length ||
    fatherGenotype.length % 2 !== 0 ||
    motherGenotype.length % 2 !== 0
  ) {
    return undefined
  }

  const characters = fatherGenotype.length / 2
  // gonna be one huge freakin payload
  const payload = {
    equation: `${fatherGenotype} x ${motherGenotype}`, // equation
    fatherGenotype, // father's genotype
    motherGenotype, // mother's genotype
    gametes: [
      [], // father gametes
      [], // mother gametes
    ],
    punnettSquare: [
      /* a 2d array populated with 2^n empty arrays where n is the number of characters */
      ...Array(2 ** characters).keys(),
    ].map(() => []),
    combinationsNum: 2 ** fatherGenotype.length, // number of genotype combinations produced, equal to gametes squared, also the size of the punnett square.
    uniqueGenotypeNum: undefined, // number of unique genotype
    genotypes: {
      /* a key:value obj with key being geno and value being chance */
    },
    uniquePhenotypeNum: undefined, // number of phenotypes that can be made
    phenotypes: {
      /* a key:value obj with key being pheno and value being chance */
    },
  }
  fatherGenotype = makeArray(fatherGenotype)
  motherGenotype = makeArray(motherGenotype)

  switch (fatherGenotype.length) {
    case 1:
      monohybrid(fatherGenotype, motherGenotype, payload)
      break
    case 2:
      dihybrid(fatherGenotype, motherGenotype, payload)
      break
    case 3:
      trihybrid(fatherGenotype, motherGenotype, payload)
      break
    case 4:
      tetrahybrid(fatherGenotype, motherGenotype, payload)
      break
    case 5:
      pentahybrid(fatherGenotype, motherGenotype, payload)
      break
    case 6:
      sextuplehybrid(fatherGenotype, motherGenotype, payload)
      break
  }

  payload.uniqueGenotypeNum = new Set(Object.keys(payload.genotypes)).size
  payload.uniquePhenotypeNum = new Set(Object.keys(payload.phenotypes)).size

  return payload
}

export default calculateOffspring
