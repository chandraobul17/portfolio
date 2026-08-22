import React, { useState } from 'react'

const CAR_MODELS = {
  Maruti: ['Swift', 'Baleno', 'Brezza'],
  Hyundai: ['Creta', 'Venue', 'Verna'],
  Honda: ['City', 'Amaze', 'Civic'],
  Toyota: ['Innova', 'Fortuner', 'Camry'],
  BMW: ['3 Series', '5 Series', 'X5'],
  'Mercedes-Benz': ['C-Class', 'E-Class', 'GLC'],
  Audi: ['A4', 'Q5', 'A6'],
  Lexus: ['IS', 'RX', 'NX'],
  Volvo: ['XC60', 'S60', 'XC90'],
  Porsche: ['911', 'Cayenne', 'Macan'],
  Jaguar: ['XE', 'XF', 'F-Pace'],
  'Land Rover': ['Defender', 'Range Rover', 'Discovery'],
  Ferrari: ['Roma', 'F8 Tributo', 'SF90'],
  Lamborghini: ['Huracan', 'Aventador', 'Urus'],
  McLaren: ['570S', '720S', 'Artura'],
  Bugatti: ['Chiron', 'Veyron', 'Tourbillon'],
  'Aston Martin': ['DB11', 'Vantage', 'DBS'],
  Maserati: ['Ghibli', 'Levante', 'Quattroporte'],
  Koenigsegg: ['Jesko', 'Regera', 'Gemera'],
  Kia: ['Seltos', 'Sonet', 'Carnival'],
  Ford: ['Mustang', 'EcoSport', 'Figo'],
  Volkswagen: ['Polo', 'Vento', 'Taigun'],
  Nissan: ['Magnite', 'Sunny', 'X-Trail'],
  Renault: ['Kiger', 'Triber', 'Duster'],
  'Tata Motors': ['Nexon', 'Harrier', 'Safari'],
  Mahindra: ['Thar', 'Scorpio', 'XUV700'],
  Tata: ['Altroz', 'Punch', 'Tiago'],
  'Maruti Suzuki': ['Swift Dzire', 'Vitara Brezza', 'Ertiga'],
  Others: ['Model X']
}

export default function Projects(){
  const currentYear = new Date().getFullYear()
  const years = Array.from({length:25}).map((_,i)=> currentYear - i)

  const initialBrand = 'Maruti'
  const initialModel = CAR_MODELS[initialBrand][0]

  const [brand, setBrand] = useState(initialBrand)
  const [model, setModel] = useState(initialModel)
  const [year, setYear] = useState(currentYear)
  const [fuel, setFuel] = useState('Petrol')
  const [transmission, setTransmission] = useState('Manual')
  const [mileage, setMileage] = useState(50000)
  const [predicted, setPredicted] = useState(null)

  const availableModels = CAR_MODELS[brand] || CAR_MODELS.Others

  function handleBrandChange(nextBrand){
    setBrand(nextBrand)
    const nextModels = CAR_MODELS[nextBrand] || CAR_MODELS.Others
    setModel(nextModels[0])
  }

  function predictPrice(){
    const basePrices = {
      'Maruti': 800000,
      'Hyundai': 900000,
      'Honda': 1000000,
      'Toyota': 1200000,
      'BMW': 1800000,
      'Mercedes-Benz': 2000000,
      'Audi': 1900000,
      'Lexus': 1850000,
      'Volvo': 1750000,
      'Porsche': 2300000,
      'Jaguar': 1600000,
      'Land Rover': 1700000,
      'Ferrari': 3500000,
      'Lamborghini': 4200000,
      'McLaren': 3900000,
      'Bugatti': 9000000,
      'Aston Martin': 3600000,
      'Maserati': 2800000,
      'Koenigsegg': 9500000,
      'Kia': 1050000,
      'Ford': 1100000,
      'Volkswagen': 1150000,
      'Nissan': 1000000,
      'Renault': 950000,
      'Tata Motors': 900000,
      'Mahindra': 950000,
      'Tata': 880000,
      'Maruti Suzuki': 820000,
      'Others': 700000
    }

    let price = basePrices[brand] || basePrices['Others']

    const age = Math.max(0, currentYear - Number(year))
    price = price * Math.pow(0.82, age)

    const mileageFactor = Math.max(0.4, 1 - (mileage / 200000))
    price = price * mileageFactor

    const fuelMod = fuel === 'Diesel' ? 1.03 : (fuel === 'CNG' ? 0.9 : (fuel === 'Electric' ? 1.25 : 1.0))
    price = price * fuelMod

    const transMod = transmission === 'Automatic' ? 1.06 : 1.0
    price = price * transMod

    price = Math.max(20000, Math.round(price))
    setPredicted(price)
  }

  function formatINR(v){
    return v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <section id="projects" className="py-8">
      <h3 className="text-2xl font-semibold">Featured Project</h3>
      <p className="mt-2 text-slate-400">Car Price Prediction — interactive demo (client-side approximation).</p>

      <div className="mt-6 grid md:grid-cols-2 gap-6 items-start">
        <div className="glass p-6 rounded-lg">
          <div className="font-semibold text-lg">Car Price Predictor (Interactive Demo)</div>
          <p className="mt-3 text-slate-300">Enter vehicle specifications and click Predict. This client-side estimator is a demo and provides an approximate price based on simple heuristics.</p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="block">
              <div className="text-xs text-slate-400">Brand</div>
              <select value={brand} onChange={e => handleBrandChange(e.target.value)} className="mt-1 w-full bg-[rgba(255,255,255,0.02)] p-2 rounded">
                <optgroup label="Premium / Luxury">
                  <option>BMW</option>
                  <option>Mercedes-Benz</option>
                  <option>Audi</option>
                  <option>Lexus</option>
                  <option>Volvo</option>
                  <option>Porsche</option>
                  <option>Jaguar</option>
                  <option>Land Rover</option>
                </optgroup>
                <optgroup label="Performance / Sports">
                  <option>Ferrari</option>
                  <option>Lamborghini</option>
                  <option>McLaren</option>
                  <option>Bugatti</option>
                  <option>Aston Martin</option>
                  <option>Maserati</option>
                  <option>Koenigsegg</option>
                </optgroup>
                <optgroup label="Popular / Everyday">
                  <option>Toyota</option>
                  <option>Honda</option>
                  <option>Hyundai</option>
                  <option>Kia</option>
                  <option>Ford</option>
                  <option>Volkswagen</option>
                  <option>Nissan</option>
                  <option>Renault</option>
                  <option>Tata Motors</option>
                  <option>Mahindra</option>
                </optgroup>
                <optgroup label="Indian Brands">
                  <option>Tata</option>
                  <option>Mahindra</option>
                  <option>Maruti Suzuki</option>
                  <option>Maruti</option>
                </optgroup>
                <option>Others</option>
              </select>
            </label>

            <label className="block">
              <div className="text-xs text-slate-400">Model</div>
              <select value={model} onChange={e=>setModel(e.target.value)} className="mt-1 w-full bg-[rgba(255,255,255,0.02)] p-2 rounded">
                {availableModels.map(item => <option key={item} value={item}>{item}</option>)}
              </select>
            </label>

            <label className="block">
              <div className="text-xs text-slate-400">Year</div>
              <select value={year} onChange={e=>setYear(e.target.value)} className="mt-1 w-full bg-[rgba(255,255,255,0.02)] p-2 rounded">
                {years.map(y=> <option key={y} value={y}>{y}</option>)}
              </select>
            </label>

            <label className="block">
              <div className="text-xs text-slate-400">Fuel</div>
              <select value={fuel} onChange={e=>setFuel(e.target.value)} className="mt-1 w-full bg-[rgba(255,255,255,0.02)] p-2 rounded">
                <option>Petrol</option>
                <option>Diesel</option>
                <option>CNG</option>
                <option>Electric</option>
              </select>
            </label>

            <label className="sm:col-span-2 block">
              <div className="text-xs text-slate-400">Mileage (km)</div>
              <input type="number" value={mileage} onChange={e=>setMileage(Number(e.target.value))} className="mt-1 w-full bg-[rgba(255,255,255,0.02)] p-2 rounded" min={0} max={1000000} />
            </label>

            <label className="sm:col-span-2 block">
              <div className="text-xs text-slate-400">Transmission</div>
              <select value={transmission} onChange={e=>setTransmission(e.target.value)} className="mt-1 w-full bg-[rgba(255,255,255,0.02)] p-2 rounded">
                <option>Manual</option>
                <option>Automatic</option>
              </select>
            </label>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <button onClick={predictPrice} className="btn-accent">Predict Price</button>
            <div className="ml-auto text-sm text-slate-200">Estimated Price<br/>
              <span className="text-2xl font-bold">{predicted ? `₹ ${formatINR(predicted)}` : '—'}</span>
            </div>
          </div>

          <div className="mt-4 text-xs text-slate-400">Note: This estimator is a demonstrative client-side approximation and not a production model.</div>
        </div>

        <div className="glass p-6 rounded-lg">
          <div className="text-sm text-slate-400">Project Visual</div>
          <div className="mt-4 bg-[rgba(0,0,0,0.45)] p-4 rounded">
            <div className="text-xs text-slate-300">CAR PRICE PREDICTOR</div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-200">
              <div className="font-semibold">Brand</div>
              <div>{brand}</div>
              <div className="font-semibold">Model</div>
              <div>{model}</div>
              <div className="font-semibold">Year</div>
              <div>{year}</div>
              <div className="font-semibold">Fuel</div>
              <div>{fuel}</div>
              <div className="font-semibold">Transmission</div>
              <div>{transmission}</div>
              <div className="font-semibold">Mileage</div>
              <div>{mileage} km</div>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <div className="ml-auto text-sm text-slate-200">Predicted<br/><span className="text-2xl font-bold">{predicted ? `₹ ${formatINR(predicted)}` : '—'}</span></div>
            </div>

            <div className="mt-4 text-xs text-slate-400">This interactive demo is built for portfolio presentation and can later be connected to a trained ML endpoint.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
