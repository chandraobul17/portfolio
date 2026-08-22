import React, {useState, useEffect} from 'react'
import { Menu, X } from 'lucide-react'

const navItems = ['Home','About','Skills','Experience','Projects','Education','Certifications','Hobbies','Contact']

const ACCENTS = {
  indigo: ['#6366f1','#7c3aed'],
  teal: ['#14b8a6','#06b6d4'],
  violet: ['#7c3aed','#a78bfa'],
  amber: ['#f59e0b','#f97316'],
  green: ['#10b981','#34d399'],
  rose: ['#fb7185','#f43f5e']
}

const PRESETS = {
  midnight: {
    '--bg': '#05060a',
    '--panel-bg': 'rgba(255,255,255,0.03)',
    '--text': '#d1d5db',
    '--muted': '#94a3b8',
    '--glass-border': 'rgba(255,255,255,0.06)'
  },
  solarized: {
    '--bg':'#fdf6e3',
    '--panel-bg':'#eee8d5',
    '--text':'#073642',
    '--muted':'#586e75',
    '--glass-border':'rgba(0,0,0,0.06)'
  },
  monochrome: {
    '--bg':'#0b0b0b',
    '--panel-bg':'#121212',
    '--text':'#e5e7eb',
    '--muted':'#9ca3af',
    '--glass-border':'rgba(255,255,255,0.04)'
  },
  neon: {
    '--bg':'#3eb94c',
    '--panel-bg':'#071233',
    '--text':'#e6f7ff',
    '--muted':'#9ad6ff',
    '--glass-border':'rgba(255,255,255,0.06)'
  },
  aurora: {
    '--bg':'#081420',
    '--panel-bg':'#0d1726',
    '--text':'#cfeef0',
    '--muted':'#9fb8c7',
    '--glass-border':'rgba(255,255,255,0.06)'
  }
}

export default function Navbar(){
  const [open,setOpen] = useState(false)
  const [scrolled,setScrolled] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'system')
  const [accent, setAccent] = useState(localStorage.getItem('accent') || 'indigo')
  const [preset, setPreset] = useState(localStorage.getItem('preset') || 'midnight')

  useEffect(()=>{
    const onScroll = ()=> setScrolled(window.scrollY>30)
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  useEffect(()=>{
    // Apply theme: 'system' => data-theme="system" (CSS media query handles prefers-color-scheme), otherwise set 'dark' or 'light'
    if(theme === 'system'){
      document.documentElement.setAttribute('data-theme','system')
    } else {
      document.documentElement.setAttribute('data-theme', theme)
    }
    localStorage.setItem('theme', theme)

    // Set button foreground depending on effective theme (simple): light theme -> dark text, otherwise light text
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
    const isLight = theme === 'light' || (theme === 'system' && prefersLight)
    document.documentElement.style.setProperty('--btn-foreground', isLight ? '#000' : '#fff')
  },[theme])

  useEffect(()=>{
    const pair = ACCENTS[accent] || ACCENTS.indigo
    document.documentElement.style.setProperty('--accent-start', pair[0])
    document.documentElement.style.setProperty('--accent-end', pair[1])
    localStorage.setItem('accent', accent)
  },[accent])

  useEffect(()=>{
    const p = PRESETS[preset] || PRESETS.midnight
    Object.entries(p).forEach(([k,v]) => document.documentElement.style.setProperty(k,v))
    localStorage.setItem('preset', preset)
  },[preset])

  const handleNavClick=(id)=>{
    setOpen(false)
    const el = document.getElementById(id.toLowerCase())
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'})
  }

  return (
    <header className={`fixed w-full z-40 top-4 transition-all ${scrolled? 'backdrop-blur-md bg-[rgba(6,8,15,0.6)] py-3':'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-4" aria-hidden="true" />

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map(item=> (
            <button key={item} onClick={()=>handleNavClick(item)} className="text-muted hover:text-white text-sm">{item}</button>
          ))}

          <a href="#contact" className="ml-4 inline-block btn-accent">Let's Talk</a>

          {/* Theme & accent selectors */}
          <div className="ml-4 flex items-center gap-3">
            {/* Theme buttons */}
            <div role="group" aria-label="Theme" className="flex items-center gap-1">
              <button onClick={()=>setTheme('system')} aria-pressed={theme==='system'} title="System" className={`w-8 h-8 rounded p-1 ${theme==='system' ? 'ring-2 ring-offset-2' : ''}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mx-auto" aria-hidden>
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </button>
              <button onClick={()=>setTheme('dark')} aria-pressed={theme==='dark'} title="Dark" className={`w-8 h-8 rounded p-1 ${theme==='dark' ? 'ring-2 ring-offset-2' : ''}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mx-auto" aria-hidden>
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
              </button>
              <button onClick={()=>setTheme('light')} aria-pressed={theme==='light'} title="Light" className={`w-8 h-8 rounded p-1 ${theme==='light' ? 'ring-2 ring-offset-2' : ''}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mx-auto" aria-hidden>
                  <path d="M12 3v2M12 19v2M21 12h-2M5 12H3M18.36 5.64l-1.42 1.42M7.05 17.95l-1.42 1.42M18.36 18.36l-1.42-1.42M7.05 6.05L5.63 7.47" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
              </button>
            </div>

            {/* Accent swatches */}
            <div role="group" aria-label="Accent colors" className="flex items-center gap-1">
              {Object.entries(ACCENTS).map(([key, pair])=> (
                <button key={key} title={key} onClick={()=>setAccent(key)} aria-pressed={accent===key} className={`w-8 h-8 rounded-full border-2 ${accent===key? 'border-white':'border-[rgba(255,255,255,0.06)]'}`} style={{background:`linear-gradient(90deg, ${pair[0]}, ${pair[1]})`}} />
              ))}
            </div>

            {/* Preset swatches */}
            <div role="group" aria-label="Presets" className="flex items-center gap-1">
              {Object.entries(PRESETS).map(([k,v])=> (
                <button key={k} title={k} onClick={()=>setPreset(k)} aria-pressed={preset===k} className={`w-8 h-8 rounded border-2 ${preset===k? 'ring-2 ring-offset-2':''}`} style={{background:v['--bg'], color:v['--text']}}>
                  <span className="sr-only">{k}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>

        <div className="md:hidden">
          <button aria-label="menu" onClick={()=>setOpen(v=>!v)} className="p-2 bg-[rgba(255,255,255,0.03)] rounded-md glass">
            {open? <X size={20}/> : <Menu size={20}/>}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden mt-4 max-w-7xl mx-auto px-6">
          <div className="glass p-4 rounded-lg shadow-lg flex flex-col gap-3">
            {navItems.map(item=> (
              <button key={item} onClick={()=>handleNavClick(item)} className="text-left px-2 py-2 rounded hover:bg-[rgba(255,255,255,0.02)]">{item}</button>
            ))}
            <a href="#contact" onClick={()=>setOpen(false)} className="mt-2 inline-block btn-accent text-black">Let's Talk</a>

            <div className="mt-2 flex items-center gap-2">
              <select aria-label="Theme mobile" value={theme} onChange={e=>setTheme(e.target.value)} className="bg-[rgba(255,255,255,0.02)] text-sm p-1 rounded w-full">
                <option value="system">System</option>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
              </select>
              <select aria-label="Accent mobile" value={accent} onChange={e=>setAccent(e.target.value)} className="bg-[rgba(255,255,255,0.02)] text-sm p-1 rounded w-full">
                {Object.keys(ACCENTS).map(a=> <option key={a} value={a}>{a}</option>)}
              </select>
            </div>

              <div className="mt-2">
                <select aria-label="Preset mobile" value={preset} onChange={e=>setPreset(e.target.value)} className="bg-[rgba(255,255,255,0.02)] text-sm p-1 rounded w-full">
                  {Object.keys(PRESETS).map(p=> <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
          </div>
        </div>
      )}
    </header>
  )
}
