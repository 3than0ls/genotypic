import React from 'react'

export default function PunnettSquare({ punnettSquare, gametes }) {
  let scale = punnettSquare[0].length
  const sizes = {
    2: {
      textScale: 1.05,
      scale: 1.05,
    },
    4: {
      textScale: 0.55,
      scale: 0.55,
    },
    8: {
      textScale: 0.32,
      scale: 0.32,
    },
    16: {
      textScale: 0.2,
      scale: 0.2,
    },
  }
  const tableStyle = {
    fontSize: 2.5 * sizes[scale].textScale + 'rem',
    lineHeight: 2.5 * sizes[scale].textScale + 'rem',
  }
  const genotypeSizeStyles = {
    width: 16 * sizes[scale].scale + 'rem',
    height: 16 * sizes[scale].scale + 'rem',
  }
  const gameteSizeStyles = {
    father: {
      width: 16 * sizes[scale].scale + 'rem',
      height: 9 * sizes[scale].scale + 'rem',
    },
    mother: {
      width: 9 * sizes[scale].scale + 'rem',
      height: 16 * sizes[scale].scale + 'rem',
    },
    corner: {
      width: 9 * sizes[scale].scale + 'rem',
      height: 9 * sizes[scale].scale + 'rem',
    },
  }

  const generatePunnettTable = () => {
    let elements = []
    elements.push(
      <tr>
        <td
          style={gameteSizeStyles.corner}
          className="align-middle text-center"
        />
        {gametes[0].map((gamete, index) => (
          <td
            key={`${gamete}${index}`}
            style={gameteSizeStyles.father}
            className="align-middle text-center border-b-4 border-app-red-2"
          >
            {gamete}
          </td>
        ))}
      </tr>
    )
    for (let i = 0; i < punnettSquare.length; i++) {
      elements.push(
        <tr>
          <td
            style={gameteSizeStyles.mother}
            key={`${gametes[1][i]}${i}`}
            className="align-middle text-center border-r-4 border-app-red-2"
          >
            {gametes[1][i]}
          </td>
          {punnettSquare[i].map((obj, index) => (
            /* this is the table contents */
            <td
              style={genotypeSizeStyles}
              className="align-middle text-center border-2"
              key={`${obj.genotype}${index}`}
            >
              {obj.genotype}
            </td>
          ))}
        </tr>
      )
    }
    return elements
  }
  return (
    <table
      style={tableStyle}
      className="table-fixed m-auto border-8 border-app-red-1 rounded-2xl"
    >
      {generatePunnettTable()}
    </table>
  )
}
