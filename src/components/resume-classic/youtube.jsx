import React from "react"

const Youtube = ({ data }) => {
  return (
    <div>
      <div>
        <iframe
          src={data.videoLink}
          frameborder="0"
          className="aspect-video w-full border-0"
        ></iframe>
      </div>
      <div className="flex flex-row items-center justify-center gap-x-2 border-t border-slate-900/10 py-[6px] px-6 dark:border-slate-50/[0.10]">
        {data.thumbUpIcon} {data.text1}
        {data.bellIcon}
        {data.text2}
      </div>
    </div>
  )
}

export default Youtube
