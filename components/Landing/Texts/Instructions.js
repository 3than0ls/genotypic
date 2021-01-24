import React from 'react'
import Label from '../../Label'

export default function Instructions() {
  return (
    <>
      <Label text="Instructions" />
      <div className="my-2">Hello and Welcome! Here's how to start.</div>
      <hr className="border-t-3 my-3 border-app-gray-1" />
      <div className="my-2">
        First, click on the expand menu button, located in the top left corner.
        Then, enter the genotype of the mother and father of the offspring, and
        affirm that you have the correct equation in the Testcross box. Finally,
        hit calculate to recieve the results. After calculating, you can view
        certain results, and search for certain genotypes and phenotypes to get
        their probabilities.
      </div>
      <hr className="border-t-3 my-3 border-app-gray-1" />
      <div className="my-2">
        This application is capable of calculating up to six characters. Note
        that all crosses are autosomal, and none of characters/traits are linked
        genes. To learn more about Mendelian Genetics,{' '}
        <a
          className="text-app-red-3 hover:underline"
          href="https://knowgenetics.org/mendelian-genetics/#:~:text=The%20Mendelian%20Concept%20of%20a%20Gene&text=Mendel%20instead%20believed%20that%20heredity,passing%2Don%20of%20these%20units."
        >
          here is a site that explains.
        </a>
      </div>
      <hr className="border-t-3 my-3 border-app-gray-1" />
      <div className="my-2">
        This website was not fitted (and does not scale) for mobile devices. The
        reccomended viewing resolution is 1280x720
      </div>
    </>
  )
}
