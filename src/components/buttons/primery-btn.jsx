import { Link } from "gatsby"
import React from "react"

const PrimeryBtn = ({ label, to }) => {
  return (
    <Link to={to}>
      <div className="inline-block w-full overflow-hidden rounded bg-gradient-to-r from-sky-400 to-sky-300 p-0.5  text-slate-700 dark:text-slate-200">
        <div className="box-border rounded-sm bg-white px-4 py-1 text-center hover:bg-gradient-to-r  hover:from-sky-400  hover:to-sky-300 dark:bg-slate-800 hover:dark:text-slate-700 ">
          <div>{label}</div>
        </div>
      </div>
    </Link>
  )
}

export default PrimeryBtn
