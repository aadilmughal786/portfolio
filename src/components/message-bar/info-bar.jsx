import React, { useEffect, useState } from "react"
import { FaInfoCircle } from "react-icons/fa"

const InfoBar = ({ message }) => {
  const [showInfo, setShowInfo] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowInfo(true)
    }, 2000)
  }, [])
  return (
    <div>
      {showInfo ? (
        <div
          className={`flex items-center justify-between border-b border-b-sky-300 bg-sky-100/40 py-1 px-4 text-sky-700 dark:bg-sky-700/20  dark:text-sky-300 sm:px-8`}
        >
          <div className="flex flex-row items-center gap-3">
            <span>
              <FaInfoCircle size={16} />
            </span>
            <span>{message}</span>
          </div>
          <button
            className="text-2xl  outline-none focus:outline-none"
            onClick={() => setShowInfo(false)}
          >
            ×
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default InfoBar
