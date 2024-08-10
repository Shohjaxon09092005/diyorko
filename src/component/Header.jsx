import React from 'react'
import '../style/header.css'
import rasm1 from '../image/hamburger.png'
import rasm2 from '../image/lupa.webp'
import rasm3 from '../image/qonnnn.webp'
import rasm4 from '../image/odam.png'
import rasm5 from '../image/nuqta.webp'

function Header() {
  return (
    <header className='header'>
        <div className="burger">
            <img  src={rasm1} alt="" />
            <form>
                <img src={rasm2} alt="" />
                <input type="text" id="" placeholder='Qidiruv'/>
            </form>
        </div>
        <div className="header_flex">
            <img className='img1' src={rasm3} alt="" />
            <img className='img2' src={rasm4} alt="" />
            <img className='img3' src={rasm5} alt="" />
        </div>
    </header>
  )
}

export default Header
