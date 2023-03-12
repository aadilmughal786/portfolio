import React, { useEffect, useState } from "react"
import { GoAlert } from "react-icons/go"

const AlertBar = ({ message }) => {
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowAlert(true)
    }, 2000)
  }, [])
  return (
    <div>
      {showAlert ? (
        <div
          className={`flex items-center justify-between bg-red-100/40 py-1 px-4 text-red-700 dark:bg-red-700/20  dark:text-red-300 sm:px-8`}
        >
          <div className="flex flex-row items-center gap-3">
            <span>
              <GoAlert size={16} />
            </span>
            <span>{message}</span>
          </div>
          <button
            className="text-2xl  outline-none focus:outline-none"
            onClick={() => setShowAlert(false)}
          >
            ×
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default AlertBar
