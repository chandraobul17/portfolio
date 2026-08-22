import React from 'react'
import { Award, BadgeCheck, BookOpenCheck, Sparkles, Network } from 'lucide-react'

const certs = [
  {
    title: 'AWS DevOps',
    issuer: 'ReshApp Software Solutions Pvt. Ltd.',
    type: 'Professional certificate',
    icon: BadgeCheck
  },
  {
    title: 'Google AI Essentials',
    issuer: 'Coursera',
    type: 'AI foundations',
    icon: Sparkles
  },
  {
    title: 'Google Prompting Essentials',
    issuer: 'Coursera',
    type: 'Prompt engineering',
    icon: BookOpenCheck
  },
  {
    title: '18 AI & Generative AI Courses',
    issuer: 'Anthropic',
    type: 'Learning pathway',
    icon: Sparkles
  },
  {
    title: 'Social Network Analysis',
    issuer: 'NPTEL Elite',
    type: 'Academic credential',
    icon: Network
  }
]

export default function Certifications(){
  return (
    <section id="certifications" className="py-8">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">
          <Award size={20} />
        </div>
        <h3 className="text-2xl font-semibold">Certifications</h3>
      </div>

      <p className="mt-3 max-w-2xl text-slate-400">
        A curated set of learning credentials that reflect my interest in AI, cloud, and data-driven problem solving.
      </p>

      <div className="mt-6 grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {certs.map(c => {
          const Icon = c.icon

          return (
            <div key={c.title} className="glass p-5 rounded-xl border border-white/5 transition-transform duration-200 hover:-translate-y-1 hover:border-indigo-400/30">
              <div className="flex items-start justify-between gap-3">
                <div className="p-2.5 rounded-lg bg-white/5 text-indigo-300 border border-white/5">
                  <Icon size={18} />
                </div>
                <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-300">
                  {c.type}
                </span>
              </div>

              <div className="mt-4 font-semibold text-lg text-slate-100">{c.title}</div>
              <div className="mt-1 text-sm text-slate-400">{c.issuer}</div>

              <div className="mt-4 flex items-center gap-2 text-xs text-slate-300">
                <span className="inline-block h-2 w-2 rounded-full bg-indigo-400" />
                Credential details available on request
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
