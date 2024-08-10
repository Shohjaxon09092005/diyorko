import React from 'react'
import '../style/home.css'
import rasm from '../image/adolat.png'


function Home() {
  return (
    <div className="container">
      <div className='home'>
        <div className="oq">
        </div>
        <h2>MUROJAATLER MONITORINGI MOBIL DASTURI</h2>
        <div className="tel">
          <div className="oqq">
            <img src={rasm} alt="" />
            <button className='btn1'>KIRISH <div><span>ONE</span> <span>ID</span></div></button>
            <button className='btn2'>PAROL TIKLASH UCHUN BOSING</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
