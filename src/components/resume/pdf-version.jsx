import React from "react"

const PdfVersion = ({ data }) => {
  return (
    <div className="rounded-md border border-slate-900/10 dark:border-slate-50/[0.10]">
      <div
        style={{ backgroundImage: `url(${data.bg})` }}
        className="flex h-48 items-end overflow-hidden border-b border-slate-900/10 bg-cover bg-center bg-no-repeat text-slate-700 dark:border-slate-50/[0.10]  dark:text-slate-300"
      ></div>
      <div className="flex justify-center">
        <a
          href={data.link.href}
          className="inline-block"
          target="_blank"
          rel="noreferrer"
        >
          <div className="box-border inline-flex w-full flex-row items-center justify-center gap-1 rounded px-4 py-1.5  transition-all duration-75 ease-in hover:gap-2">
            {/* label */}
            <div>{data.link.label}</div>
            <div className={`flex h-6 w-6 items-center`}>{data.link.icon}</div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default PdfVersion
