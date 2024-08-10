import React from 'react'
import Header from '../component/Header'
import '../style/four.css'
import FourCard from '../component/FourCard'

function PageFour() {
    return (
        <div>
            <div className="container">
                <Header />
                <div className="four">
                    <FourCard title="Tuman/Shahar" desc="MFY soni"/>
                    <FourCard title="Guliston tumani" desc="26"/>
                    <FourCard title="sirdaryo tumani" desc="38"/>
                    <FourCard title="Boyovut tumani" desc="39"/>
                    <FourCard title="Guliston" desc="26"/>
                    <FourCard title="Guliston" desc="26"/>
                    <FourCard title="Guliston" desc="26"/>
                    <FourCard title="Guliston" desc="26"/>
                    <FourCard title="Guliston" desc="26"/>
                    <FourCard title="Guliston" desc="26"/>
                </div>
            </div>
        </div>
    )
}

export default PageFour
