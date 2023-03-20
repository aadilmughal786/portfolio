import React from "react"

const PdfVersion = ({ data }) => {
  return (
    <div className="flex h-52 items-end overflow-hidden rounded-md border border-slate-900/10 px-6 py-4 text-slate-700 dark:border-slate-50/[0.10] dark:text-slate-300">
      <a
        href={data.link.href}
        className="inline-block"
        target="_blank"
        rel="noreferrer"
      >
        <div className="box-border inline-flex w-full flex-row items-center justify-center gap-1 rounded bg-gradient-to-r from-sky-400 to-sky-300 px-4 py-1.5 text-slate-700 transition-all duration-75 ease-in hover:gap-2 dark:text-slate-700">
          {/* label */}
          <div>{data.link.label}</div>
          <div className={`flex h-6 w-6 items-center`}>{data.link.icon}</div>
        </div>
      </a>
    </div>
  )
}

export default PdfVersion
