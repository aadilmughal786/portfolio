import React from "react"
import RFMarquee from "react-fast-marquee"

const Marquee = ({ children, direction }) => {
  return (
    <RFMarquee
      direction={direction}
      gradient={false}
      className="bg-sky-300/10 py-8 text-sky-500/60 dark:text-sky-300/70"
    >
      {children}
    </RFMarquee>
  )
}

export default Marquee
