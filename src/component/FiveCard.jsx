import React from 'react'

function FiveCard({title, desc}) {
  return (
    <div className='fiveCard'>
        <div className="five_H4">
            <h4>{title}</h4>
        </div>
        <div className="five_H3">
            <h3>{desc}</h3>
        </div>
    </div>
  )
}

export default FiveCard
