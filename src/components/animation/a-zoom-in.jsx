import React from "react"
import { motion } from "framer-motion"

const AZoomIn = ({ children }) => {
  return (
    <motion.div
      initial={{ scale: 0.2, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

export default AZoomIn
