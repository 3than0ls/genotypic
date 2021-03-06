import React, { useState } from 'react'

export default function List({ object, total, label }) {
  const [open, setOpen] = useState(true)
  const [searchValue, setSearchValue] = useState('')
  const keyValuePairs = [[...Object.keys(object)], [...Object.values(object)]]
  const generateList = () => {
    return keyValuePairs[0].map((key, index) => (
      <tr key={`${key}`} id={key}>
        <td className="w-48">{keyValuePairs[0][index]}</td>
        <td className="w-48">{`${keyValuePairs[1][index]} out of ${total} (${
          (keyValuePairs[1][index] / total) * 100
        }%)`}</td>
      </tr>
    ))
  }
  return (
    <>
      <button
        className="focus:outline-none underline mb-2"
        onClick={() => setOpen(!open)}
      >
        {`${open ? 'Hide' : 'Open'} ${label} list`}
      </button>
      {open && (
        <div>
          <input
            type="text"
            placeholder="Search for a sequence"
            value={searchValue}
            className="w-64 px-4 py-2 mt-1 mb-2 rounded-2xl focus:outline-none text-center"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <table className="table-auto text-xl">
            <thead>
              <tr>
                <th className="w-96">Genotype</th>
                <th className="w-96">Chance/Frequency</th>
              </tr>
            </thead>
            <tbody>
              {generateList().filter((tableRow) =>
                tableRow.key.startsWith(searchValue)
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  )
}
