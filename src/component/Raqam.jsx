import React from 'react'

function Raqam({ raqam1, title1, desc1 }) {
    return (
        <div>
            <div className="raqam_card1">
                <div className="raqam_con1">
                    <h5>{title1}</h5>
                    <p>{desc1}</p>
                </div>
                <div>
                    <h1>{raqam1}</h1>
                </div>
            </div>
        </div>
    )
}

export default Raqam
