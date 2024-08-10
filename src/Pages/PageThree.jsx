import React from 'react'
import '../style/three.css'
import Header from '../component/Header'
import ThreeCard from '../component/ThreeCard'

function PageThree() {
  return (
    <div>
      <div className="container">
        <Header />
        <div className="three">
            <ThreeCard title="Sirdaryo Viloyati"/>
            <ThreeCard title="Xodimlar"/>
            <ThreeCard title="Tuman va Shaharlar"/>
            <ThreeCard title="Sirdaryo Viloyati"/>
            <ThreeCard title="Sirdaryo Viloyati"/>
        </div>
      </div>
    </div>
  )
}

export default PageThree
