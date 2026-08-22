import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'
import { personalInfo } from '../data/personal'

export default function Hero(){
  const [imgErrored, setImgErrored] = useState(false)
  const [profileUrl, setProfileUrl] = useState('/profile.jpg')
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleImageError = () => {
    if (profileUrl === '/profile.jpg') {
      setProfileUrl('/profile.jpeg')
      return
    }
    setImgErrored(true)
  }

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
    const y = ((event.clientY - rect.top) / rect.height) * 2 - 1

    setTilt({
      x: y * 8,
      y: x * -10
    })
  }

  const resetTilt = () => setTilt({ x: 0, y: 0 })

  const developer = {
    name: "Chandra Obul Reddy",
    focus: "AI + Cloud",
    cgpa: 8.51,
    mindset: "Build. Learn. Improve."
  }

  return (
    <section id="home" className="grid md:grid-cols-[320px_1fr] gap-8 items-start py-8">
      <div className="md:sticky md:top-24 self-start flex justify-center md:justify-start">
        {!imgErrored ? (
          <motion.div
            onMouseMove={handlePointerMove}
            onMouseLeave={resetTilt}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            animate={{
              rotateX: tilt.x,
              rotateY: tilt.y,
              boxShadow: '0 20px 60px rgba(15, 23, 42, 0.45)'
            }}
            style={{ transformStyle: 'preserve-3d' }}
            className="group relative p-2 rounded-[2rem] border border-white/10 bg-slate-900/30"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-500/15 via-transparent to-teal-400/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img src={profileUrl} alt="Koduru Chandra Obul Reddy" onError={handleImageError} className="relative w-52 h-52 md:w-72 md:h-[22rem] object-cover rounded-[1.5rem] border border-white/10 transition-transform duration-300 group-hover:scale-[1.04] cursor-pointer" />
          </motion.div>
        ) : (
          <motion.div
            onMouseMove={handlePointerMove}
            onMouseLeave={resetTilt}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            animate={{ rotateX: tilt.x, rotateY: tilt.y }}
            className="w-52 h-52 md:w-72 md:h-[22rem] rounded-[1.5rem] bg-gradient-to-br from-indigo-700 to-teal-600 flex items-center justify-center text-white text-4xl font-bold shadow-[0_20px_60px_rgba(79,70,229,0.35)] border border-white/10"
          >
            KC
          </motion.div>
        )}
      </div>

      <div>
        <motion.h1 initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="text-3xl md:text-4xl font-extrabold leading-tight">Building Intelligent Systems for a Smarter Future.</motion.h1>
        <motion.h2 initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:0.25}} className="mt-1 text-lg md:text-xl font-semibold text-indigo-200">Koduru Chandra Obul Reddy</motion.h2>

        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.45}} className="mt-4 max-w-xl text-slate-300">B.Tech CSE (Artificial Intelligence) — focused on AI/ML, Cloud Computing, AWS, Azure and DevOps. To build career in a growing organization, where I can get the opportunities to prove my abilities by accepting challenges, fulfilling the organizational goal and climb the career ladder through continuous learning and commitment.</motion.p>

        <motion.div className="mt-6 flex gap-3 flex-wrap" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.6}}>
          <a href="#projects" className="btn-accent">View Projects</a>
          <a href="#contact" className="px-4 py-2 rounded-md border border-slate-700 text-slate-100">Contact Me</a>
        </motion.div>

        <motion.div className="mt-6 flex items-center gap-4 flex-wrap" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.75}}>
          <a aria-label="LinkedIn" href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white flex items-center gap-2"><Linkedin size={18}/> LinkedIn</a>
          <a aria-label="Email" href="mailto:chandraobul17@gmail.com" className="text-slate-300 hover:text-white">chandraobul17@gmail.com</a>
        </motion.div>

        <div className="mt-8 relative flex items-center justify-center md:justify-start">
          <motion.div initial={{scale:0.95,opacity:0}} animate={{scale:1,opacity:1}} transition={{delay:0.4}} className="glass p-6 rounded-2xl w-full max-w-lg border">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-sm text-slate-300">{developer.focus}</div>
                <div className="text-xl font-semibold mt-1">{developer.name}</div>
                <div className="text-xs text-slate-400 mt-2">{developer.mindset}</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-400">CGPA</div>
                <div className="text-2xl font-bold">{developer.cgpa}</div>
              </div>
            </div>

            <div className="mt-6 bg-[rgba(0,0,0,0.35)] p-4 rounded-lg">
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full" style={{width:'48%', background: `linear-gradient(90deg, var(--accent-start), var(--accent-end))`}}></div>
              </div>
              <div className="mt-3 text-xs text-slate-400">Futuristic developer dashboard mockup — visual only</div>
            </div>
          </motion.div>

          <motion.div className="absolute -right-10 -top-12 orb animate-float hidden md:block" aria-hidden/>
        </div>
      </div>
    </section>
  )
}
