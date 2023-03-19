import React, { useState } from "react"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import Card from "./card"

const ITEM_NUMBER_TO_SHOW = 3

const Project = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [trackNext, setTrackNext] = useState(true)
  const [trackPrevious, setTrackPrivious] = useState(false)

  const totalPage = Math.ceil(data.projects.length / ITEM_NUMBER_TO_SHOW)

  const previousItems = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      currentPage > 1 ? setTrackPrivious(true) : setTrackPrivious(false)
      setTrackNext(true)
    } else {
      setTrackPrivious(false)
    }
  }

  const nextItems = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1)
      currentPage < totalPage ? setTrackNext(true) : setTrackNext(false)
      setTrackPrivious(true)
    } else {
      setTrackNext(false)
    }
  }

  let startIndex = (currentPage - 1) * ITEM_NUMBER_TO_SHOW
  let endIndex = currentPage * ITEM_NUMBER_TO_SHOW

  return (
    <div className="px-4 py-16 sm:px-8">
      <div className="text-center font-[Kurale] text-3xl">{data.label}</div>
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 pt-16 sm:grid-cols-2 md:grid-cols-3 lg:gap-x-12">
        {data.projects.slice(startIndex, endIndex).map(project => (
          <Card data={project} />
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 pt-6 sm:justify-end">
        <button
          onClick={e => previousItems()}
          className={`${
            trackPrevious
              ? ""
              : "cursor-not-allowed text-slate-400 dark:text-slate-500"
          } flex items-center gap-4`}
        >
          <BsArrowLeft />
          Previous
        </button>
        <div>{`${currentPage}⁄${totalPage}`}</div>
        <button
          onClick={e => nextItems()}
          className={`${
            trackNext
              ? ""
              : "cursor-not-allowed text-slate-400 dark:text-slate-500"
          } flex items-center gap-4`}
        >
          Next
          <BsArrowRight />
        </button>
      </div>
    </div>
  )
}

export default Project
