import React from 'react'
import '../style/two.css'
import rasm from '../image/adolat.png'
import Raqam from '../component/Raqam'
import RaqamBir from '../component/RaqamBir'

function PageTwo() {
  return (
    <div>
      <div className="container">
        <div className="two">
          <div className="flex">
            <h2>MUROJAATLAR MONITORINGI MOBIL DASTURI</h2>
            <img src={rasm} alt="" />
          </div>
          <div className="raqam_grid">
            <Raqam title1="RAXBAR" desc1="umumiy monitoring xodimlar taxlili" raqam1="1"/>
            <RaqamBir title2="SHITAB A'ZOLARI" desc2="umumiy monitoring xodimlar taxlili" raqam2="2"/>
            <Raqam title1="AKD HODIMI" desc1="umumiy monitoring xodimlar taxlili" raqam1="3"/>
            <RaqamBir title2="MA'SUL HODIMLAR" desc2="umumiy monitoring xodimlar taxlili" raqam2="4"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageTwo
