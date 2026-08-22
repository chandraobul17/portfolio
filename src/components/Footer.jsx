import React from 'react'
import { personalInfo } from '../data/personal'

export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="mt-12 py-6 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 text-center text-slate-400">
        <div className="font-semibold">{personalInfo.name}</div>
        <div className="text-sm">AI/ML | Cloud | DevOps</div>
        <div className="mt-2 text-xs">© {year} {personalInfo.name}</div>
        <div className="mt-2"><a className="text-indigo-300" href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a> • <a className="text-indigo-300" href={`mailto:${personalInfo.email}`}>Email</a> • <a className="text-indigo-300" href="#top">Back to top</a></div>
      </div>
    </footer>
  )
}
