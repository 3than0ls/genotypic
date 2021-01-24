import React from 'react'
import Label from '../../Label'
import { CodeBlock, atomOneLight } from 'react-code-blocks'

export default function API() {
  return (
    <>
      <Label text="API" />
      <div className="my-2">Genetics Calculator API</div>
      <hr className="border-t-3 my-3 border-app-gray-1" />
      <div className="my-2">
        This application has one API endpoint at /api/calculateOffspring. You
        must supply two query parameter values, first being the father's
        genotype (as a string), and the second being the mother's genotype (as a
        string). Examples are "AaBb", "AaBBcc", etc.
      </div>
      <hr className="border-t-3 my-3 border-app-gray-1" />
      <div className="w-196">
        Below is the structure of the fetched JSON object:
        <div className="text-left">
          <CodeBlock
            text={`{
  // punnett square equation
  equation: String,
  // father's genotype
  fatherGenotype: String, 
  // mother's genotype
  motherGenotype: String,
  // array of arrays storing gametes, which are Strings
  gametes: Array,
  // 2D array containg a punnett table of calculated genotypes
  punnettSquare: Array,
  // number of genotype combinations produced, equal to gametes squared, also the size of the punnett square.
  combinationsNum: Number, 
  // number of unique genotype
  uniqueGenotypeNum: Number, 
  // a key-value object where the key is the genotype and the value is the amount of times it was calculated
  genotypes: Object,
  // number of phenotypes that can be made
  uniquePhenotypeNum: Number, 
  // a key-value object where the key is the phenotype and the value is the amount of times it was calculated
  phenotypes: Object
}`}
            language={'javascript'}
            theme={atomOneLight}
            showLineNumbers={false}
            wrapLines
          />
        </div>
      </div>
    </>
  )
}
