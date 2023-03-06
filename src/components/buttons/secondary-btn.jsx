import { Link } from "gatsby"
import React from "react"

const SecondaryBtn = ({ label, icon, to }) => {
  return (
    <Link to={to}>
      <div className="box-border flex flex-row items-center justify-between gap-1 rounded bg-gradient-to-r from-sky-400 to-sky-300 px-4 py-1.5 text-slate-900 transition-all duration-75 ease-in  hover:gap-2">
        {/* label */}
        <div>{label}</div>
        <div className={`h-6 w-6`}>{icon}</div>
      </div>
    </Link>
  )
}

export default SecondaryBtn
