import React, { useState } from "react"
import ToyCard from "./toy-card"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

const ITEM_NUMBER_TO_SHOW = 3

const Toy = ({ data }) => {
  const [seek, setSeek] = useState(0)
  const [trackNext, setTrackNext] = useState(true)
  const [trackPrevious, setTrackPrivious] = useState(false)

  const totalPage = Math.ceil(data.projects.length / ITEM_NUMBER_TO_SHOW)
  let currentPage = seek / ITEM_NUMBER_TO_SHOW + 1

  const nextItems = () => {
    if (currentPage < totalPage) {
      setSeek(seek + ITEM_NUMBER_TO_SHOW)
      currentPage < totalPage ? setTrackNext(true) : setTrackNext(false)
      setTrackPrivious(true)
    } else {
      setTrackNext(false)
    }
  }

  const previousItems = () => {
    if (currentPage > 1) {
      setSeek(seek - ITEM_NUMBER_TO_SHOW)
      currentPage > 1 ? setTrackPrivious(true) : setTrackPrivious(false)
      setTrackNext(true)
    } else {
      setTrackPrivious(false)
    }
  }

  return (
    <div className="px-4 py-16 text-slate-600 dark:text-slate-300 sm:px-8">
      <div className="text-center font-[Kurale] text-3xl">{data.label}</div>
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 pt-16 sm:grid-cols-2 md:grid-cols-3 lg:gap-x-12">
        {data.projects.slice(seek, seek + ITEM_NUMBER_TO_SHOW).map(project => (
          <ToyCard key={project.id} data={project} />
        ))}
      </div>
      <div className="flex items-center gap-4 pt-6">
        <button
          className={`${
            trackPrevious ? "" : "cursor-not-allowed"
          } flex items-center gap-4`}
          onClick={e => previousItems()}
        >
          <BsArrowLeft />
          Previous
        </button>
        <div>{`${currentPage}⁄${totalPage}`}</div>
        <button
          className={`${
            trackNext ? "" : "cursor-not-allowed"
          } flex items-center gap-4`}
          onClick={e => nextItems()}
        >
          Next
          <BsArrowRight />
        </button>
      </div>
    </div>
  )
}

export default Toy
