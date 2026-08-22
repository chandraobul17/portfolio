import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Strengths from './components/Strengths'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen font-sans bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#071024] via-[#08080b] to-[#05050a]">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 pt-28 md:pt-36 pb-10 space-y-20">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Strengths />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
