import React from 'react'
import { personalInfo } from '../data/personal'

export default function Contact(){
  return (
    <section id="contact" className="py-8">
      <div className="glass p-6 rounded-lg max-w-3xl">
        <h3 className="text-2xl font-semibold">Let's build something useful.</h3>
        <div className="mt-4 text-slate-300">Email: <a className="text-indigo-300" href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></div>
        <div className="mt-1 text-slate-300">Phone: {personalInfo.phone}</div>
        <div className="mt-1 text-slate-300">Location: {personalInfo.location}</div>

        <div className="mt-4 flex gap-3">
          <a href={`mailto:${personalInfo.email}`} className="btn-accent">Email Me</a>
          <a href={`tel:${personalInfo.phone.replace(/\s+/g,'')}`} className="px-4 py-2 rounded border border-slate-700">Call Me</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded bg-[rgba(255,255,255,0.03)]">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}
