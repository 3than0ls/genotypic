import calculateOffspring from '~/logic/calculateOffspring'

export default function handler(req, res) {
  const { query } = req
  const payload = calculateOffspring(query.fatherGenotype, query.motherGenotype)
  res.status(payload ? 200 : 400).json(payload)
}
