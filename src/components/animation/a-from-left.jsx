import React from "react"
import { motion } from "framer-motion"

const AFromLeft = ({ children }) => {
  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

export default AFromLeft
