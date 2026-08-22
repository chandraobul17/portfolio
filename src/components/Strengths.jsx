import React from 'react'

const strengths = ['Good Communication Skills','Problem Solving','Self-Motivating','Active Listener','Adaptability']

export default function Strengths(){
  return (
    <section id="strengths" className="py-8">
      <h3 className="text-2xl font-semibold">Strengths</h3>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {strengths.map(s=> (
          <div key={s} className="glass p-4 rounded-lg text-center hover:scale-105 transition-transform">
            <div className="font-semibold">{s}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
