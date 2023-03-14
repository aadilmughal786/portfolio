import React, { useState } from "react"
import PrimeryBtn from "../../buttons/primery-btn"
import ToyCard from "./toy-card"

const ITEM_NUMBER_TO_SHOW = 6

const Toy = ({ data }) => {
  const [seek, setSeek] = useState(0)
  const totalItems = data.projects.length

  const nextItems = () => {
    setSeek(seek + ITEM_NUMBER_TO_SHOW)
  }

  const previousItems = () => {
    setSeek(seek - ITEM_NUMBER_TO_SHOW)
  }

  return (
    <div className="px-4 py-8 text-slate-600 dark:text-slate-300 sm:px-8">
      <div className="text-center font-[Kurale] text-3xl">{data.label}</div>
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 pt-16 sm:grid-cols-2 md:grid-cols-3 lg:gap-x-12">
        {data.projects.slice(seek, seek + ITEM_NUMBER_TO_SHOW).map(project => (
          <ToyCard key={project.id} data={project} />
        ))}
      </div>
      <div className="flex items-center gap-4 pt-6">
        <button onClick={e => nextItems}>Previous</button>
        <div>
          {`${seek / ITEM_NUMBER_TO_SHOW + 1}⁄${
            totalItems / ITEM_NUMBER_TO_SHOW
          }`}
        </div>
        <button onClick={e => previousItems}>Next</button>
      </div>
    </div>
  )
}

export default Toy
