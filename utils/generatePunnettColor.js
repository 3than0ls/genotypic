const min = 64
const max = 220

const generatePunnettColor = (genotypes) => {
  const map = {}
  const genotypeSet = new Set(genotypes)
  const offset = Math.floor((max - min) / (genotypeSet.size / 6))
  console.log(offset, max, min)

  let currentColor = [min, min, min]
  let channel = 0
  let inverse = false

  for (let genotype of genotypeSet.values()) {
    // console.log(genotype)
    if (currentColor.every((color) => color >= 200)) {
      channel = 0
      inverse = true
    }
    if (!inverse) {
      currentColor[channel] += offset
      if (currentColor[channel] >= max) {
        let diff = currentColor[channel] - max
        currentColor[channel] = max
        channel++
        if (channel <= 2) {
          currentColor[channel] += diff
        }
      }
    } else {
      currentColor[channel] -= offset
      if (currentColor[channel] <= min) {
        let diff = min - currentColor[channel]
        currentColor[channel] = min
        channel++
        if (channel <= 2) {
          currentColor[channel] -= diff
        }
      }
    }
    console.log(currentColor)
    map[genotype] = [...currentColor]
  }

  // console.log(map)
}

generatePunnettColor([
  1,
  2,
  4,
  5,
  6,
  7,
  8,
  9,
  'a',
  3,
  124,
  543,
  'b',
  'c',
  'd',
  'e',
  'f',
])

// export default generatePunnettColor
