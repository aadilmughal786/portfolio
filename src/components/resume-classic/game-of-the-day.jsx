import React from "react"

const GameOfTheDay = ({ data }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div>{data.gameName}</div>
      <div>{data.gameIcon}</div>
      <a
        href={data.gameLink}
        rel="noreferrer"
        target="_blank"
        className="flex flex-row items-center justify-center gap-2 text-slate-600 hover:text-sky-700 dark:text-slate-400 dark:hover:text-sky-300"
      >
        <div>{data.playIcon}</div>
        <div>{data.playText}</div>
      </a>
    </div>
  )
}

export default GameOfTheDay
