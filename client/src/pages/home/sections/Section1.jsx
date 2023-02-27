import React from 'react'
import { motion } from 'framer-motion'
export default function Section1() {
  return (
    <motion.div className='mt-[400px] h-full border'
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.5, duration:1, }}
    >
      <h1 className='text-8xl font-bold'>Bring your idea to life</h1>
    </motion.div>
  )
}
