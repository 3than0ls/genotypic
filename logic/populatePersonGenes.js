const alphabet = 'abcdefgh'
const populatePersonGenes = (person, setPerson, newCharacters) => {
  console.log(newCharacters)
  let dict = person
  if (Object.keys(dict).length < newCharacters) {
    // add onto
    for (let i = 0; i < newCharacters; i++) {
      let letter = alphabet[i]
      console.log(letter)
      if (!dict[letter]) {
        dict[letter] = `${letter.toUpperCase()}${letter.toLowerCase()}`
      }
    }
  } else {
    // remove from
    const temp_dict = {}
    for (let i = 0; i < newCharacters; i++) {
      let letter = alphabet[i]
      if (letter in dict) {
        temp_dict[letter] = dict[letter]
      }
    }
    dict = temp_dict
  }
  setPerson(dict)
}

export default populatePersonGenes
