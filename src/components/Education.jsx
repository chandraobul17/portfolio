import React from 'react'

export default function Education(){
  return (
    <section id="education" className="py-8">
      <h3 className="text-2xl font-semibold">Education</h3>
      <div className="mt-6 space-y-4">
        <div className="glass p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <div className="font-semibold">2023 — 2027</div>
              <div className="text-sm text-slate-300">B.Tech in CSE (Artificial Intelligence)</div>
              <div className="text-sm text-slate-400">Chaitanya Bharathi Institute of Technology, Proddatur</div>
            </div>
            <div className="text-right">CGPA: <span className="font-bold">8.51/10</span></div>
          </div>
        </div>

        <div className="glass p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <div className="font-semibold">2021 — 2023</div>
              <div className="text-sm text-slate-300">Class XII — MPC, Abhyas Junior College, Proddatur</div>
            </div>
            <div className="text-right">GPA: <span className="font-bold">8.79</span></div>
          </div>
        </div>

        <div className="glass p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <div className="font-semibold">2020 — 2021</div>
              <div className="text-sm text-slate-300">Class X, St Joseph's Convent E M High School, Proddatur</div>
            </div>
            <div className="text-right">GPA: <span className="font-bold">9.97</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
