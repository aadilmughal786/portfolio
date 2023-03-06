import { Link } from "gatsby"
import React from "react"

const PrimeryBtn = ({ label, to }) => {
  return (
    <Link to={to}>
      <div className="overflow-hidden rounded bg-gradient-to-r from-sky-400 to-sky-300 p-0.5">
        <div className="roundedbg-white box-border flex flex-row items-center justify-between gap-1 bg-white px-4 py-1 text-slate-900 hover:bg-gradient-to-r  hover:from-sky-400 hover:to-sky-300 dark:bg-slate-800 ">
          <div>{label}</div>
        </div>
      </div>
    </Link>
  )
}

export default PrimeryBtn
