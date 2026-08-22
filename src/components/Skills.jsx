import React from 'react'
import { Code, Cpu, Cloud, GitBranch, Terminal, Zap } from 'lucide-react'

const skills = [
  {name:'Python', icon: Code, category:'Programming'},
  {name:'AI & Machine Learning', icon: Cpu, category:'AI/ML'},
  {name:'Cloud Computing', icon: Cloud, category:'Cloud'},
  {name:'Microsoft Azure', icon: Cloud, category:'Cloud'},
  {name:'AWS', icon: Cloud, category:'Cloud'},
  {name:'Git', icon: GitBranch, category:'DevOps / Tools'},
  {name:'GitHub', icon: GitBranch, category:'DevOps / Tools'},
  {name:'Docker', icon: Zap, category:'DevOps / Tools'},
  {name:'Linux', icon: Terminal, category:'DevOps / Tools'},
  {name:'CI/CD', icon: Code, category:'DevOps / Tools'}
]

export default function Skills(){
  return (
    <section id="skills" className="py-8">
      <h3 className="text-2xl font-semibold">Technical Toolkit</h3>
      <p className="mt-2 text-slate-400">Interactive cards showcasing programming, AI/ML, Cloud and DevOps skills.</p>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {skills.map(s=>{
          const Icon = s.icon
          return (
            <div key={s.name} className="glass p-4 rounded-lg hover:scale-105 transition-transform">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[rgba(255,255,255,0.02)] rounded">
                  <Icon size={20} />
                </div>
                <div>
                  <div className="font-semibold">{s.name}</div>
                  <div className="text-xs text-slate-400">{s.category}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
