import React from 'react'
import '../style/five.css'
import Header from '../component/Header'
import FiveCard from '../component/FiveCard'

function PageFive() {
  return (
    <div>
      <div className="container">
        <Header />
        <div className="five">
            <h2>Guliston tumani</h2>
            <div className="five_text">
                <FiveCard title="Uyma-uy yurilgan MFY soni" desc="0"/>
                <FiveCard title="Yerli=uy soni (ming) (XOVLI UY)" desc="0"/>
                <FiveCard title="" desc=""/>
                <FiveCard title="Uyma-uy yurilgan MFY soni" desc="0"/>
                <FiveCard title="Yerli=uy soni (ming) (XOVLI UY)" desc="0"/>
                <FiveCard title="" desc=""/>
                <FiveCard title="Uyma-uy yurilgan MFY soni" desc="0"/>
                <FiveCard title="Yerli=uy soni (ming) (XOVLI UY)" desc="0"/>
                <FiveCard title="" desc=""/>
                <FiveCard title="" desc=""/>
                <FiveCard title="" desc=""/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PageFive
