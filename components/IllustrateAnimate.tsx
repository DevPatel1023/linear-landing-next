'use client'

import { type FC, type ReactNode, type CSSProperties } from 'react'
import { motion } from 'framer-motion'

const illustrate = {
  initial: { opacity: 0, y: 8, filter: 'blur(6px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

type Props = {
  children: ReactNode
  className?: string
  style?: CSSProperties
  delay?: number
  duration?: number
}

const IllustrateAnimate: FC<Props> = ({
  children,
  className,
  style,
  duration = 0.6,
  delay = 0,
}) => {
  return (
    <motion.div
      className={className}
      style={style}
      variants={illustrate}
      initial="initial"
      animate="animate"
      viewport={{ once: true }}
      transition={{ duration, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

export default IllustrateAnimate