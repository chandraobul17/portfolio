import React from 'react'

export default function Experience(){
  return (
    <section id="experience" className="py-8">
      <h3 className="text-2xl font-semibold">Experience</h3>
      <p className="mt-2 text-slate-400">AWS DevOps Internship — ReshApp Software Solutions Pvt. Ltd. (Resume-supported)</p>

      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <div className="glass p-4 rounded-lg">
          <div className="font-semibold">AWS Services</div>
          <ul className="mt-3 text-sm text-slate-300 space-y-1">
            <li>EC2</li>
            <li>S3</li>
            <li>IAM</li>
            <li>VPC</li>
          </ul>
        </div>
        <div className="glass p-4 rounded-lg">
          <div className="font-semibold">DevOps Stack</div>
          <ul className="mt-3 text-sm text-slate-300 space-y-1">
            <li>Git</li>
            <li>GitHub</li>
            <li>Docker</li>
            <li>Linux</li>
          </ul>
        </div>
        <div className="glass p-4 rounded-lg">
          <div className="font-semibold">Automation</div>
          <ul className="mt-3 text-sm text-slate-300 space-y-1">
            <li>Cloud Deployment</li>
            <li>CI/CD</li>
            <li>DevOps Automation Basics</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
