import React from 'react'
import { Music2, Camera, Clapperboard, Plane, Bike, Globe2, Gamepad2 } from 'lucide-react'

const hobbies = [
  { name: 'Listening to Music', icon: Music2 },
  { name: 'Photography', icon: Camera },
  { name: 'Watching Movies', icon: Clapperboard },
  { name: 'Travelling', icon: Plane },
  { name: 'Bike Riding', icon: Bike },
  { name: 'Exploring New Places', icon: Globe2 },
  { name: 'Gaming', icon: Gamepad2 }
]

export default function Hobbies(){
  return (
    <section id="hobbies" className="py-8">
      <h3 className="text-2xl font-semibold">Hobbies</h3>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {hobbies.map(({ name, icon: Icon }) => (
          <div key={name} className="glass p-4 rounded-lg text-center hover:scale-[1.02] transition-transform">
            <div className="flex justify-center mb-3">
              <div className="p-3 rounded-full bg-[rgba(255,255,255,0.03)]">
                <Icon size={20} />
              </div>
            </div>
            <div className="font-semibold">{name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
