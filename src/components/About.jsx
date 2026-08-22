import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="py-8">
      <motion.h3 initial={{opacity:0,y:6}} whileInView={{opacity:1,y:0}} className="text-2xl font-semibold">Turning learning into capability.</motion.h3>
      <motion.p className="mt-4 text-slate-300 max-w-3xl" initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.15}}>To build career in a growing organization, where I can get the opportunities to prove my abilities by accepting challenges, fulfilling the organizational goal and climb the career ladder through continuous learning and commitment.</motion.p>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <motion.div whileHover={{scale:1.03}} className="glass p-4 rounded-lg text-center">
          <div className="text-3xl font-bold">8.51</div>
          <div className="text-sm text-slate-400">CGPA / 10</div>
        </motion.div>
        <motion.div whileHover={{scale:1.03}} className="glass p-4 rounded-lg text-center">
          <div className="text-3xl font-bold">2027</div>
          <div className="text-sm text-slate-400">Graduation</div>
        </motion.div>
        <motion.div whileHover={{scale:1.03}} className="glass p-4 rounded-lg text-center">
          <div className="text-3xl font-bold">AI</div>
          <div className="text-sm text-slate-400">Specialization</div>
        </motion.div>
        <motion.div whileHover={{scale:1.03}} className="glass p-4 rounded-lg text-center">
          <div className="text-3xl font-bold">AWS</div>
          <div className="text-sm text-slate-400">DevOps Internship</div>
        </motion.div>
      </div>
    </section>
  )
}
